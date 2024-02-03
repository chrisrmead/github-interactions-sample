import { test, expect } from '@playwright/test';
import { getRepositorySearchResult } from '../githubAPI/api';


test('github search via API', async ({ page }) => {

  const searchResult: SearchResult = await getRepositorySearchResult('create-react-app');

  const firstResult = searchResult.items[0];

  expect(firstResult.description).toEqual('Set up a modern web app by running one command.')

  const firtResultLicense = firstResult.license;

  expect(firtResultLicense.key).toEqual('mit');
  expect(firtResultLicense.name).toEqual('MIT License');
  expect(firtResultLicense.node_id).toEqual('MDc6TGljZW5zZTEz');
  expect(firtResultLicense.spdx_id).toEqual('MIT');
  expect(firtResultLicense.url).toEqual('https://api.github.com/licenses/mit');

  await page.goto(firstResult.html_url);

  const headerContainer = page.locator('#repository-container-header')
  const pageSubtitle = headerContainer.locator('[data-pjax="#repo-content-pjax-container"]').first();
  const subtitleText = await pageSubtitle.innerText();

  expect(subtitleText).toEqual('create-react-app')

});