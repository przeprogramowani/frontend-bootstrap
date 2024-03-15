import { test } from '@playwright/test';
import { CharactersPage } from '../pages/CharactersPage';
import { CharacterDetailsPage } from '../pages/CharacterDetailsPage';

test('navigation to character details', async ({ page }) => {
  const mainPage = new CharactersPage(page);
  await mainPage.navigate();
  await mainPage.navigateToCharacterDetails('1');
});

test('navigation to characters list', async ({ page }) => {
  const detailsPage = new CharacterDetailsPage(page, '3');
  await detailsPage.navigate();
  await detailsPage.navigateToCharactersList();
});
