"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const { chromium } = require("playwright");

const base = "https://ivyhongzhan.github.io/Ivyhongzhan";
const demoUrl = base + "/assets/recruitment-demo.html";
const resultsDir = "public-site-e2e-results";
fs.mkdirSync(resultsDir, { recursive: true });

const checks = [];
function passed(label) { checks.push(label); console.log("PASS:", label); }
async function go(page, url, label) {
  const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 50000 });
  assert.ok(response, label + ": no HTTP response");
  assert.equal(response.status(), 200, label + ": expected HTTP 200, got " + response.status());
  if (new URL(url).pathname !== "/Ivyhongzhan/") assert.notEqual(new URL(page.url()).pathname, "/Ivyhongzhan/", label + ": unexpectedly redirected to homepage");
  await page.waitForTimeout(3500); // The site's previous 404 template redirected after 3 seconds.
  assert.equal(new URL(page.url()).pathname, new URL(url).pathname, label + ": URL changed after 3.5 sec");
  passed(label + " reachable (HTTP 200, no delayed redirect)");
}
(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const context = await browser.newContext({ viewport: { width: 1365, height: 850 }, acceptDownloads: true });
    const page = await context.newPage();
    const runtimeErrors = [];
    page.on("pageerror", (error) => runtimeErrors.push(error.message));
    await go(page, demoUrl, "Public recruitment demo");
    await page.locator("#hz-board .column").first().waitFor({ timeout: 15000 });
    assert.equal(await page.locator("#hz-board .column").count(), 6);
    assert.equal((await page.locator("#hz-total").innerText()).trim(), "14");
    passed("Six-stage demo and seeded applicant count render");
    assert.equal(await page.locator(".post-header").count(), 0, "Duplicate title remains above demo");
    await page.getByText("Design decisions and trade-offs").waitFor({timeout:10000});
    const heroText = await page.locator(".hero").innerText();
    assert.match(heroText, /Zero Point HR/);
    assert.match(heroText, /Select an applicant in Screening/);
    assert.match(await page.locator("footer").innerText(), /Fictional data, for portfolio demonstration only/);
    passed("Hero, design rationale and demo-specific footer render");
    await page.screenshot({ path: resultsDir + "/desktop-demo.png", fullPage: true });

    // Use a unique fictional identifier to make it impossible to confuse with real applicants.
    const name = "Playwright Fictional Test";
    await page.locator("#hz-add-person").evaluate((el) => { el.closest("details").open = true; });
    await page.locator("#hz-new-name").fill(name);
    await page.locator("#hz-new-role").selectOption({ index: 0 });
    await page.locator("#hz-add-person button[type=submit]").click();
    assert.equal((await page.locator("#hz-total").innerText()).trim(), "15");
    await page.locator("#hz-board .person").filter({ hasText: name }).waitFor();
    passed("Fictional applicant can be created via browser UI");
    const saved = await page.evaluate(() => localStorage.getItem("hong-zhan-recruitment-workflow-demo-v2"));
    assert.ok(saved && saved.includes(name), "Local storage does not contain created applicant");
    await page.reload({ waitUntil: "domcontentloaded" });
    assert.equal((await page.locator("#hz-total").innerText()).trim(), "15");
    await page.locator("#hz-board .person").filter({ hasText: name }).waitFor();
    passed("Browser-local data persists after page reload");

    await page.locator("#hz-board .person").filter({ hasText: name }).click();
    await page.locator("#hz-details").waitFor({ state: "visible" });
    assert.match(await page.locator("#hz-detail-body").innerText(), /Applied/);
    await page.locator("#hz-next").selectOption("1");
    await page.locator("#hz-update").click();
    assert.match(await page.locator("#hz-detail-body").innerText(), /Screening/);
    assert.match(await page.locator("#hz-history").innerText(), /Applied.*Screening/);
    passed("Stage transition and local event history work");
    await page.locator("#hz-details button.close").click();
    await page.reload({ waitUntil: "domcontentloaded" });
    await page.locator("#hz-board .person").filter({ hasText: name }).click();
    assert.match(await page.locator("#hz-detail-body").innerText(), /Screening/);
    assert.match(await page.locator("#hz-history").innerText(), /Applied.*Screening/);
    passed("Stage and history persist after reload");
    await page.locator("#hz-details button.close").click();

    // A second, isolated browser session must not see the first user's changes.
    const isolated = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const mobile = await isolated.newPage();
    mobile.on("pageerror", (e) => runtimeErrors.push(e.message));
    await go(mobile, demoUrl, "Mobile public recruitment demo");
    assert.equal((await mobile.locator("#hz-total").innerText()).trim(), "14");
    await mobile.screenshot({ path: resultsDir + "/mobile-demo.png", fullPage: true });
    const mobileWidth = await mobile.evaluate(() => ({ viewport: document.documentElement.clientWidth, content: document.documentElement.scrollWidth }));
    assert.ok(mobileWidth.content <= mobileWidth.viewport + 2, "Mobile page-level horizontal overflow: " + JSON.stringify(mobileWidth));
    passed("New browser context is isolated; mobile layout has no page overflow");

    // Confirm homepage and project detail links serve real HTML without 404 template redirect.
    for (const [path, label, expected] of [
      ["/", "Research homepage", "Selected Work"],
      ["/research/", "Research overview", "Beyond the Aggregate"],
      ["/research/masters/", "MSc case study", "15 semi-structured interviews"],
      ["/research/recruitment-system/", "Systems case study", "Recruitment Management System"]
    ]) {
      await go(mobile, base + path, label);
      await mobile.locator("#main-content").getByText(expected, { exact: false }).first().waitFor({ timeout: 12000 });
      if(path === "/research/masters/"){
        assert.match(await mobile.locator("body").innerText(), /analyzed social-media posts/i);
        passed("MSc case study aligns with CV social-media-post analysis");
      }
      if(path === "/research/recruitment-system/"){
        const content = await mobile.locator("body").innerText();
        assert.match(content,/Spring Boot and MySQL/);
        assert.match(content,/not connected to MySQL/i);
        passed("2021 and 2026 engineering stacks are clearly distinguished");
      }
    }
    await go(mobile, base + "/", "Research homepage mobile reread");
    const cards = mobile.locator(".hz-featured-card");
    assert.equal(await cards.count(), 4);
    const homeDemoHref = await mobile.locator(".hz-featured-card a").filter({ hasText: "Interactive demo" }).first().getAttribute("href");
    assert.ok(homeDemoHref && homeDemoHref.endsWith("/assets/recruitment-demo.html"), "Homepage demo link incorrect: " + homeDemoHref);
    await mobile.screenshot({ path: resultsDir + "/mobile-home.png", fullPage: true });
    passed("Four research/project cards and recruitment demo link are present on live homepage");

    // Verify the current homepage itself, not only the recruitment demo.
    const desktopHome = await context.newPage();
    desktopHome.on("pageerror", (error) => runtimeErrors.push(error.message));
    await desktopHome.setViewportSize({ width: 1440, height: 900 });
    await go(desktopHome, base + "/", "Desktop academic homepage");
    const desktopCards = desktopHome.locator(".hz-featured-card");
    assert.equal(await desktopCards.count(), 4);
    const desktopGeometry = await desktopCards.evaluateAll((items) => items.map((card) => ({
      box: (() => { const r = card.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }; })(),
      rows: Array.from(card.children).map((element) => element.getBoundingClientRect().top)
    })));
    assert.ok(desktopGeometry.every((item) => item.rows.length === 6), "Each card must have six alignment rows");
    for (const [left, right] of [[0, 1], [2, 3]]) {
      assert.ok(Math.abs(desktopGeometry[left].box.y - desktopGeometry[right].box.y) < 2, "Paired desktop cards must start together");
      assert.ok(Math.abs(desktopGeometry[left].box.height - desktopGeometry[right].box.height) < 2, "Paired desktop cards must have equal heights");
      for (let row = 0; row < 6; row++) {
        assert.ok(Math.abs(desktopGeometry[left].rows[row] - desktopGeometry[right].rows[row]) < 2, "Card section " + (row + 1) + " misaligned within pair " + left);
      }
    }
    assert.ok(desktopGeometry[2].box.y > desktopGeometry[0].box.y + desktopGeometry[0].box.height, "Second card row must begin below first");
    const desktopOverflow = await desktopHome.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth
    }));
    assert.ok(desktopOverflow.content <= desktopOverflow.viewport + 2, "Desktop overflow: " + JSON.stringify(desktopOverflow));
    await desktopHome.screenshot({ path: resultsDir + "/desktop-home.png", fullPage: true });
    passed("Desktop: two-by-two cards, aligned content rows, no horizontal overflow");
    const firstCard = desktopCards.first();
    await firstCard.hover();
    await desktopHome.waitForTimeout(350);
    const hoveredBox = await firstCard.boundingBox();
    const neighborBox = await desktopCards.nth(1).boundingBox();
    assert.ok(hoveredBox.width >= desktopGeometry[0].box.width * 1.045, "Hovered card did not scale up enough");
    assert.ok(Math.abs(neighborBox.width - desktopGeometry[1].box.width) < 2, "Hover should not enlarge neighboring cards");
    await desktopHome.screenshot({ path: resultsDir + "/desktop-home-hover.png", fullPage: true });
    await desktopHome.mouse.move(1, 1);
    await desktopHome.waitForTimeout(350);
    const restoredBox = await firstCard.boundingBox();
    assert.ok(Math.abs(restoredBox.width - desktopGeometry[0].box.width) < 2, "Card did not return to original width on mouse leave");
    passed("Desktop hover gently enlarges only hovered card and smoothly restores it");


    const dropdown = desktopHome.locator(".site-navigation-dropdown");
    await dropdown.locator("summary").click();
    assert.equal(await dropdown.locator(".site-navigation-dropdown-menu a").count(), 4);
    assert.ok(await dropdown.locator(".site-navigation-dropdown-menu").isVisible());
    await desktopHome.keyboard.press("Escape");
    assert.equal(await dropdown.getAttribute("open"), null, "Escape should close dropdown");
    await dropdown.locator("summary").focus();
    await desktopHome.keyboard.press("Enter");
    assert.ok(await dropdown.locator(".site-navigation-dropdown-menu").isVisible(), "Keyboard Enter must open dropdown");
    await desktopHome.locator("h1").first().click();
    assert.equal(await dropdown.getAttribute("open"), null, "Outside click should close dropdown");
    passed("Projects dropdown opens with click/keyboard and closes with Escape/outside click");
    for (const route of ["/research/genai-trust/", "/research/masters/", "/research/recruitment-system/", "/research/ai-trust-verification/"]) {
      await dropdown.locator("summary").click();
      await dropdown.locator('a[href$="' + route + '"]').click();
      assert.equal(new URL(desktopHome.url()).pathname, "/Ivyhongzhan" + route, "Project link must navigate to its own page");
      await go(desktopHome, base + "/", "Return from " + route);
    }
    passed("All three project navigation links open distinct detail pages");
    await desktopHome.close();

    await go(mobile, base + "/", "Mobile homepage layout verification");
    const mobileCards = mobile.locator(".hz-featured-card");
    const mobileGeometry = await mobileCards.evaluateAll((items) => items.map((card) => {
      const r = card.getBoundingClientRect();
      return { x: r.x, y: r.y, width: r.width, height: r.height };
    }));
    assert.equal(mobileGeometry.length, 4);
    assert.ok(mobileGeometry.every((item) => Math.abs(item.x - mobileGeometry[0].x) < 2), "Mobile cards should use one aligned column");
    for (let i = 1; i < mobileGeometry.length; i++) {
      assert.ok(mobileGeometry[i - 1].y + mobileGeometry[i - 1].height < mobileGeometry[i].y, "Mobile cards should be stacked without overlap");
    }
    const mobileHomeWidth = await mobile.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth
    }));
    assert.ok(mobileHomeWidth.content <= mobileHomeWidth.viewport + 2, "Mobile academic homepage overflows horizontally: " + JSON.stringify(mobileHomeWidth));
    await mobile.locator(".site-navigation-dropdown summary").click();
    const mobileMenu = await mobile.locator(".site-navigation-dropdown-menu").boundingBox();
    assert.ok(mobileMenu && mobileMenu.x >= -1 && mobileMenu.x + mobileMenu.width <= 391, "Mobile Projects menu extends beyond viewport: " + JSON.stringify(mobileMenu));
    await mobile.keyboard.press("Escape");
    await mobile.screenshot({ path: resultsDir + "/mobile-home-verified.png", fullPage: true });
    passed("Mobile: single-column cards, no overlap or page overflow, dropdown fully visible");

    await isolated.close();

    page.once("dialog", (dialog) => dialog.accept());
    await page.locator("#hz-reset").click();
    assert.equal((await page.locator("#hz-total").innerText()).trim(), "14");
    await page.reload({ waitUntil: "domcontentloaded" });
    assert.equal((await page.locator("#hz-total").innerText()).trim(), "14");
    passed("Reset clears browser-local changes and remains reset after reload");


    // Recruitment Lens: 2026 read-only analytics extension, separate from the ATS demo.
    const lens = await context.newPage();
    lens.on("pageerror", (error) => runtimeErrors.push("Lens: " + error.message));
    await go(lens, base + "/assets/recruitment-lens.html", "Recruitment Lens analytics demo");
    await lens.locator("#metric-applications").waitFor({ timeout: 12000 });
    assert.equal((await lens.locator("#metric-applications").innerText()).trim(), "360");
    assert.equal(await lens.locator("#funnel .funnel-row").count(), 5);
    assert.equal(await lens.locator("#load-error").isVisible(), false);
    passed("Lens loads 360 synthetic records and five ever-reached stages");
    await lens.locator("#department").selectOption({ index: 1 });
    const subsetSize = Number((await lens.locator("#metric-applications").innerText()).replaceAll(",", ""));
    assert.ok(subsetSize > 0 && subsetSize < 360, "Lens filter did not update denominators");
    await lens.locator("#clear-filters").click();
    assert.equal((await lens.locator("#metric-applications").innerText()).trim(), "360");
    passed("Lens department filtering and reset change the correct denominator");
    await lens.locator("#records-body .inspect-btn").first().click();
    assert.equal(await lens.locator("#detail-drawer").isVisible(), true);
    assert.match(await lens.locator("#detail-content").innerText(), /Recorded stage events/);
    await lens.locator("#close-drawer").click();
    passed("Lens record-level event drill-down works");
    const [csvDownload] = await Promise.all([
      lens.waitForEvent("download"),
      lens.locator("#export-btn").click()
    ]);
    assert.ok(csvDownload.suggestedFilename().endsWith("360-records.csv"));
    passed("Lens exports filtered synthetic records to CSV");
    await lens.screenshot({ path: resultsDir + "/recruitment-lens-desktop.png", fullPage: true });
    const lensMobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const lensMobilePage = await lensMobile.newPage();
    lensMobilePage.on("pageerror", (error) => runtimeErrors.push("Lens mobile: " + error.message));
    await go(lensMobilePage, base + "/assets/recruitment-lens.html", "Recruitment Lens mobile analytics demo");
    assert.equal((await lensMobilePage.locator("#metric-applications").innerText()).trim(), "360");
    const lensWidth = await lensMobilePage.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth
    }));
    assert.ok(lensWidth.content <= lensWidth.viewport + 2, "Lens mobile horizontal overflow: " + JSON.stringify(lensWidth));
    await lensMobilePage.screenshot({ path: resultsDir + "/recruitment-lens-mobile.png", fullPage: true });
    await lensMobile.close();
    await lens.close();
    passed("Lens mobile layout has no page-level horizontal overflow");

    assert.deepEqual(runtimeErrors, [], "Uncaught JavaScript errors: " + runtimeErrors.join("; "));
    passed("No uncaught JavaScript page errors");
    fs.writeFileSync(resultsDir + "/checks.json", JSON.stringify({ url: demoUrl, passed: checks, environment: "GitHub-hosted Chromium external network" }, null, 2));
    console.log("PASS: " + checks.length + " public browser checks");
    await context.close();
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error("PUBLIC E2E FAILURE:", error.stack || error);
  process.exitCode = 1;
});
