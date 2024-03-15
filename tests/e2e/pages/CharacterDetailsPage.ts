import { Page } from '@playwright/test';
import { URLs } from '../utils/constants';

export class CharacterDetailsPage {
  private readonly page: Page;
  private readonly url: string = '';

  constructor(page: Page, id: string) {
    this.page = page;
    this.url = URLs.CHARACTER_DETAILS_PAGE(id);
  }

  navigate() {
    return this.page.goto(this.url);
  }

  async navigateToCharactersList() {
    await this.page.click(`[data-testid="characters-list-link"]`);
    await this.page.waitForSelector('[data-testid="characters-list"]');
  }
}
