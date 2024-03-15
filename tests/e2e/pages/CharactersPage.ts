import { Page } from '@playwright/test';
import { URLs } from '../utils/constants';

export class CharactersPage {
  private readonly page: Page;
  private readonly url = URLs.CHARACTERS_PAGE;

  constructor(page: Page) {
    this.page = page;
  }

  navigate() {
    return this.page.goto(this.url);
  }

  async navigateToCharacterDetails(characterId: string) {
    await this.page.click(`[data-testid="character-link-${characterId}"]`);
    await this.page.waitForSelector('[data-testid="character-details"]');
  }
}
