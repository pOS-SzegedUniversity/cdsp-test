import { test, expect } from '@playwright/test';

test('contact page form elements are visible', async ({ page }) => {
  await page.goto('https://fk-test-ci-instance-01.ps-01-platformos.com/');

  const heading = page.getByRole('heading', { name: /Contact Us/ });
  await expect(heading).toBeVisible();

  const emailField = page.getByRole('textbox', { name: 'Email' });
  await expect(emailField).toBeVisible();

  const messageField = page.locator('textarea');
  await expect(messageField).toBeVisible();

  const submitButton = page.getByRole('button', { name: 'Send' });
  await expect(submitButton).toBeVisible();
});
