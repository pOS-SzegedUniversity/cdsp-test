import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('https://fk-test-ci-instance-01.ps-01-platformos.com/');

  const heading = page.getByRole("heading")
  await expect(heading).toHaveText(/Contact Us/);
});
