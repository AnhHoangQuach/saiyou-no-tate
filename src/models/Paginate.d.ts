type SortDirectionType = "asc" | "desc" | null

type PaginateParams = {
  page?: number
  searchText?: string
  size?: number
  sortBy?: string
  sortDirection?: SortDirectionType
}

type PaginateResponse<T> = {
  count: number
  items: T[]
  page: number
  size: number
  sortBy?: string
  sortDirection?: SortDirectionType
}
