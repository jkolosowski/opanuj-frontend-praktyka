import test, { expect } from '@playwright/test';
import { MainPage } from '../../../pages/main.page';

test('search for articles', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.searchFor('Playwright');

  const pageTitle = page
    .getByRole('heading', { name: 'Playwright', exact: true })
    .locator('span');
  await expect(pageTitle).toHaveText('Playwright');
});
