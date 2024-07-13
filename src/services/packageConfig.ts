import { client } from "./axios"

const fetchPackageConfigs = (params: PackageConfigParams): Promise<PaginateResponse<PackageConfig>> =>
  client.get(`/public/package-config`, { params })

const packageConfigService = {
  fetchPackageConfigs,
}

export default packageConfigService
