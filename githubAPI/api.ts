
const githubAPI = 'https://api.github.com'

export async function getRepositorySearchResult(term: string): Promise<SearchResult> {

    const headers: Headers = new Headers()
    headers.set('Content-Type', 'application/json')
    headers.set('Accept', 'application/json')
  
    const request: RequestInfo = new Request(`${githubAPI}/search/repositories?q=${term}`, {
      method: 'GET',
      headers: headers
    })
  
    const response = await fetch(request);
    const responseJson = await response.json();
    return responseJson as SearchResult;
}