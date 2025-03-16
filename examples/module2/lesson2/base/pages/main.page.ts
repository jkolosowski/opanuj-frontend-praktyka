import type { Locator, Page } from '@playwright/test';
import { URLs } from '../utils/constants';

export class MainPage {
  private readonly page: Page;
  private readonly url = URLs.MAIN_PAGE;
  readonly navigation: Locator;
  private readonly featuredArticleExcerpt: Locator;
  private readonly communityPortalLink: Locator;
  private readonly helpDeskLink: Locator;
  private readonly search: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigation = page.getByRole('navigation', {
      name: 'Personal tools',
    });

    this.featuredArticleExcerpt = page.locator('#mp-tfa');
    this.communityPortalLink = page.locator('#n-portal');
    this.helpDeskLink = page
      .locator('div')
      .filter({ hasText: /^Help desk$/ })
      .getByRole('link');
    this.search = page.locator('#searchInput');
  }

  navigate() {
    return this.page.goto(this.url);
  }

  goToLoginPage() {
    return this.navigation.getByRole('link', { name: 'Log in' }).click();
  }

  async goToFeaturedArticle() {
    const linkToFeaturedArticle = this.featuredArticleExcerpt
      .getByRole('paragraph')
      .getByRole('link')
      .first();

    const articleHref = (await linkToFeaturedArticle.getAttribute('href'))!;

    await linkToFeaturedArticle.click();

    return this.page.waitForURL(`**${articleHref}`);
  }

  getNavigation() {
    return this.navigation;
  }

  goToCommunityPortal() {
    return this.communityPortalLink.click();
  }

  async goToHelpDesk() {
    const helpDeskHref = (await this.helpDeskLink.getAttribute('href'))!;
    await this.helpDeskLink.click();

    return this.page.waitForURL(`**${helpDeskHref}`);
  }

  async searchFor(term: string) {
    await this.search.fill(term);

    const searchButton = this.page.getByRole('button', { name: 'Search' });
    await searchButton.click();

    return this.page.waitForURL('**/wiki/Playwright');
  }
}
