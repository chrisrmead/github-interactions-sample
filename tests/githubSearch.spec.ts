import { test, expect } from '@playwright/test';
import { getRepositorySearchResult } from '../githubAPI/api';


test('github search via API', async ({ page }) => {

  const searchResult: SearchResult = await getRepositorySearchResult('create-react-app');

  const firstResult = searchResult.items[0];

  expect(firstResult.description).toEqual('Set up a modern web app by running one command.');

  const firtResultLicense = firstResult.license;

  const expectedLicense = {
    key: 'mit',
    name: 'MIT License',
    node_id: 'MDc6TGljZW5zZTEz',
    spdx_id: 'MIT',
    url: 'https://api.github.com/licenses/mit'
  }

  expect(firtResultLicense).toEqual(expectedLicense);

  await page.goto(firstResult.html_url);

  const headerContainer = page.locator('#repository-container-header');
  const pageSubtitle = headerContainer.locator('[data-pjax="#repo-content-pjax-container"]').first();
  const subtitleText = await pageSubtitle.innerText();

  expect(subtitleText).toEqual('create-react-app');

  page.close();

});