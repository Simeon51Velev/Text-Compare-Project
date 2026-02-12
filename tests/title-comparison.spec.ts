import { test, expect } from "./fixtures";

test("Compare different site titles", async ({ page, sites }) => {
  let amusnetTitle: string;
  let egtTitle: string;

  await test.step("Get Amusnet title", async () => {
    await page.goto(sites[0]);
    amusnetTitle = await page.title();
    console.log("Amusnet Title:", amusnetTitle);
  });

  await test.step("Get EGT Digital title", async () => {
    await page.goto(sites[1]);
    egtTitle = await page.title();
    console.log("EGT Title:", egtTitle);
  });

  await test.step("Compare titles", async () => {
    expect(amusnetTitle).not.toBe(egtTitle);
  });

  await test.step("Validate titles are correct", async () => {
    expect(amusnetTitle).toContain("Amusnet");
    expect(egtTitle).toContain("EGT");
  });
});
