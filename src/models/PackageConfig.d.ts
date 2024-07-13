type PackageConfig = {
  autoIssueTicket: boolean
  bookingLimit: number
  descriptions: PackageConfigDescription[]
  enable: boolean
  enableDraft: boolean
  enableFilter: boolean
  enableQR: boolean
  feeTransaction: number
  isGift: boolean
  issueLimit: number
  isWeb: boolean
  isWeb: false
  name: string
  name: string
  paxLimit: number
  price: number
  searchLimit: number
  unit: string
} & CommonEntity

type PackageConfigParams = {
  enable?: boolean
  nonePagination?: boolean
}

type PackageConfigDescription = {
  description: string
  key: string
  value: boolean | number | string
}
