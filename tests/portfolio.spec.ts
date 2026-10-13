import { test, expect } from "@playwright/test";
import path from "node:path";

test("search, empty state and category reset work together", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("searchbox", { name: "Search selected projects" }).fill("no-such-project");
  await expect(page.getByRole("heading", { name: "No projects match that search." })).toBeVisible();
  await page.getByRole("button", { name: "Reset filters" }).click();
  await page.getByRole("button", { name: "Typed domain engineering" }).click();
  await expect(page.locator(".catalog-count")).toHaveText("2 projects");
  await expect(page.locator(".catalog-list a")).toHaveCount(2);
  await page.getByRole("button", { name: "All", exact: true }).click();
  await expect(page.locator(".catalog-list a")).toHaveCount(5);
});

test("theme persists and mobile navigation closes on Escape", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Toggle color theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Open navigation" })).toBeFocused();
});

for (const width of [320, 390, 768, 1440]) {
  test(`layout fits at ${width}px without broken images or browser errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    for (const image of await page.locator("img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty("complete", true);
      expect(await image.evaluate((element) => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    expect(errors).toEqual([]);
  });
}

for (const slug of ["recepti", "borza", "wtfcode", "drivewise", "pulse"]) {
  test(`case study ${slug} has source, status and canonical metadata`, async ({ page }) => {
    const response = await page.goto("/work/" + slug);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.getByRole("link", { name: "Explore the source" })).toHaveAttribute("href", /^https:\/\/github\.com\/flegardev\//);
    await expect(page.locator(".verification-note")).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new RegExp("/work/" + slug + "$"));
    if (slug === "wtfcode") await expect(page.getByRole("link", { name: /live demo/i })).toHaveCount(0);
  });
}

for (const colorScheme of ["light", "dark"] as const) {
  test(`homepage has no serious accessibility violations in ${colorScheme} mode`, async ({ page }) => {
    await page.emulateMedia({ colorScheme });
    await page.goto("/");
    await page.addScriptTag({ path: path.resolve("node_modules/axe-core/axe.min.js") });
    const violations = await page.evaluate(async () => {
      const axe = (window as unknown as { axe: { run: () => Promise<{ violations: { id: string; impact: string; nodes: { html: string; failureSummary: string }[] }[] }> } }).axe;
      return (await axe.run()).violations.filter((issue) => ["serious", "critical"].includes(issue.impact)).map((issue) => ({ id: issue.id, nodes: issue.nodes.map((node) => ({ html: node.html, reason: node.failureSummary })) }));
    });
    expect(violations).toEqual([]);
  });
}
