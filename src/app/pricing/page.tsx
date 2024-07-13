"use client"

import { Cancel, CheckCircle } from "@mui/icons-material"
import { Container, Divider, Grid, Paper } from "@mui/material"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { Center, Flex, FlexColumn } from "components/common"
import { packageServiceDescriptions } from "constant"
import { Fragment, useEffect, useMemo, useState } from "react"
import { packageConfigService } from "services"
import { clsxm } from "utils/merge"

const PricingPage = () => {
  const [selectedPackage, setSelectedPackage] = useState<PackageConfig>()

  const { data } = useQuery({
    placeholderData: keepPreviousData,
    queryFn: () => packageConfigService.fetchPackageConfigs({ enable: true, nonePagination: true }),
    queryKey: ["packageConfigService.fetchPackageConfigs"],
  })

  const { items = [] } = data ?? {}

  const packageWeb: PackageConfig[] = useMemo(() => items.filter((data) => data.isWeb), [items])
  const packageAPI: PackageConfig[] = useMemo(() => items.filter((data) => !data.isWeb), [items])

  useEffect(() => {
    if (packageAPI.length > 0) {
      setSelectedPackage(packageAPI[0])
    }
  }, [packageAPI])

  console.log(selectedPackage)

  return (
    <Container className="mt-10 text-center">
      <div className="text-lg font-semibold text-[#5E6282] lg:text-2xl">Miễn phí và hỗ trợ trên mọi trình duyệt</div>
      <div className="my-10 font-slab text-3xl xl:mb-20 xl:text-5xl">Giao diện website đa dạng, chuyên nghiệp</div>

      <div className="hidden xl:block">
        <Grid
          columns={packageAPI.length + 1}
          container
          spacing={{ lg: 2, xs: 1 }}
          style={{ marginTop: items.length * 10 }}
        >
          <Grid item xs={1}>
            <Center className="h-full rounded-xl border border-[#BABABA] bg-[#FFFFFF1A] p-1 font-slab font-bold lg:p-3">
              Gói
            </Center>
          </Grid>
          {packageAPI.map((record, index) => {
            const height = index * 10
            return (
              <Grid item key={record.id} xs={1}>
                <Center
                  className={clsxm(
                    `flex rounded-xl border border-[#BABABA] p-1 font-slab text-xs font-bold lg:p-3 lg:text-base`,
                    {
                      "bg-[#2C59B11A]": index === 1,
                      "bg-[#8D58E51A]": index === 2,
                      "bg-[#8FD00A33]": index === 0,
                      "bg-[#F15A2B1A]": index === 3,
                    },
                  )}
                  style={{ height: 60 + height, marginTop: -height }}
                >
                  {record.name}
                </Center>
              </Grid>
            )
          })}
          {packageServiceDescriptions.map((item) => {
            return (
              <Fragment key={item.key}>
                <Grid item xs={1}>
                  <Center className="h-full min-h-16 rounded-xl border border-[#BABABA] bg-[#FFFFFF1A] p-1 font-slab text-sm font-bold lg:p-3 lg:text-base">
                    {item.description}
                  </Center>
                </Grid>
                {packageAPI.map((record) => {
                  const value = record.descriptions.find((description) => description.key === item.key)?.value
                  const isBoolean = typeof value === "boolean"
                  return (
                    <Grid item key={record.id} xs={1}>
                      <Center className="h-full rounded-xl border border-[#BABABA] bg-[#FFFFFF1A] p-1 lg:p-3">
                        {isBoolean ? (
                          value ? (
                            <CheckCircle color="success" fontSize="large" />
                          ) : (
                            <Cancel color="error" fontSize="large" />
                          )
                        ) : (
                          value
                        )}
                      </Center>
                    </Grid>
                  )
                })}
              </Fragment>
            )
          })}
        </Grid>
      </div>

      <div className="block xl:hidden">
        <Grid columns={packageAPI.length} container spacing={{ lg: 2, xs: 1 }}>
          {packageAPI.map((record) => {
            return (
              <Grid item key={record.id} xs={1}>
                <Center
                  className={clsxm(
                    `flex h-16 rounded-xl border border-[#BABABA] p-1 font-slab text-base font-bold lg:p-3`,
                    {
                      "bg-[#F15A2B1A]": selectedPackage?.id === record.id,
                    },
                  )}
                  onClick={() => setSelectedPackage(record)}
                >
                  {record.name}
                </Center>
              </Grid>
            )
          })}
        </Grid>
        <div className="mt-6 flex flex-col gap-2">
          {selectedPackage?.descriptions.map((item) => {
            const value = selectedPackage.descriptions.find((description) => description.key === item.key)?.value
            const isBoolean = typeof value === "boolean"
            return (
              <Fragment key={item.key}>
                <Flex className="justify-between">
                  <div className="text-sm font-bold text-[#767676]">{item.description}</div>
                  <div className="text-sm font-bold text-[#767676]">
                    {isBoolean ? value ? <CheckCircle color="success" /> : <Cancel color="error" /> : value}
                  </div>
                </Flex>
                <Divider />
              </Fragment>
            )
          })}
        </div>
      </div>

      <div className="my-10 text-lg font-semibold text-[#FF6868] lg:text-2xl">
        *Bảng giá trên là của chức năng tra giá vé , chưa bao gồm chi phí khởi tạo website
      </div>
      <Container className="mb-[120px] w-fit">
        <Paper className="p-4" elevation={1}>
          <div className="flex flex-col gap-8 lg:flex-row">
            {packageWeb.map((item) => (
              <FlexColumn
                className="min-w-[280px] items-center justify-center rounded-2xl bg-[#F0BB1F1A]"
                key={item.id}
              >
                <div className="w-full rounded-2xl border-2 border-[#F0BB1F] p-6 font-slab text-xl font-bold">
                  {item.name}
                </div>
                <div className="space-y-2 p-2">
                  {item.descriptions.map((record) => (
                    <div key={record.key}>{record.description}</div>
                  ))}
                </div>
              </FlexColumn>
            ))}
          </div>
        </Paper>
      </Container>
    </Container>
  )
}

export default PricingPage
