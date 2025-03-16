import test, { expect } from '@playwright/test';
import { MainPage } from '../../../pages/main.page';

test('search for watch list help', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();

  await mainPage.goToCommunityPortal();
  await expect(page).toHaveURL(
    'https://en.wikipedia.org/wiki/Wikipedia:Community_portal'
  );

  await mainPage.goToHelpDesk();
  expect(page).toHaveURL('https://en.wikipedia.org/wiki/Wikipedia:Help_desk');

  const inputField = page
    .locator('td')
    .filter({ hasText: 'Search the frequently asked' })
    .getByRole('textbox');
  await inputField.fill('watchlist');
  expect(inputField).toHaveValue('watchlist');

  const searchButton = page.getByRole('button', {
    name: 'Search the frequently asked',
  });
  await searchButton.click();

  await expect(page).toHaveURL(
    /\/wiki\/Special:Search\?fulltext=Search\+the\+frequently\+asked\+questions&fulltext=Search&prefix=Wikipedia%3AFAQ&search=watchlist&ns0=1/
  );

  const searchResultsContainer = page.locator('.mw-search-results');

  const resultItemsCount = await searchResultsContainer.locator('li').count(); // Count all <li> elements
  expect(resultItemsCount).toBeGreaterThan(1);
});
