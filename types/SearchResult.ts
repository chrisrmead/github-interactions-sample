import { SearchResultItem } from './SearchResultItem'

export type SearchResult = {
    total_count: string
    incomplete_results: boolean
    items: SearchResultItem[]
}