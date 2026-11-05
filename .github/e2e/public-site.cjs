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
    assert.match(heroText, /Alex Rivera/);
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
      await mobile.getByText(expected, { exact: false }).first().waitFor({ timeout: 12000 });
      if(path === "/research/masters/"){
        assert.match(await mobile.locator("body").innerText(), /analyzed social-media posts/i);
        passed("MSc case study aligns with CV social-media-post analysis");
      }
      if(path === "/research/recruitment-system/"){
        const content = await mobile.locator("body").innerText();
        assert.match(content,/Spring Boot and MySQL/);
        assert.match(content,/FastAPI, SQLite/);
        passed("2021 and 2026 engineering stacks are clearly distinguished");
      }
    }
    await go(mobile, base + "/", "Research homepage mobile reread");
    const cards = mobile.locator(".hz-featured-card");
    assert.equal(await cards.count(), 3);
    const homeDemoHref = await mobile.locator(".hz-featured-card a").filter({ hasText: "Interactive demo" }).first().getAttribute("href");
    assert.ok(homeDemoHref && homeDemoHref.endsWith("/assets/recruitment-demo.html"), "Homepage demo link incorrect: " + homeDemoHref);
    await mobile.screenshot({ path: resultsDir + "/mobile-home.png", fullPage: true });
    passed("Three research cards and demo link are present on live homepage");
    await isolated.close();

    page.once("dialog", (dialog) => dialog.accept());
    await page.locator("#hz-reset").click();
    assert.equal((await page.locator("#hz-total").innerText()).trim(), "14");
    await page.reload({ waitUntil: "domcontentloaded" });
    assert.equal((await page.locator("#hz-total").innerText()).trim(), "14");
    passed("Reset clears browser-local changes and remains reset after reload");

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
