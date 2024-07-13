import { Telegram } from "@mui/icons-material"
import { Button, Container, Grid, Typography } from "@mui/material"
import { Center } from "components/common"
import Image from "next/image"

const services = [
  {
    description: "Tìm kiếm, so sánh giá, đặt chỗ PNR thật Vietnam Airlines, Vietjet Air, 1G.",
    gif: "/gifs/pin.gif",
    title: "Đặt giữ chỗ giá tốt VNA, Vietjet, 1G",
  },
  {
    description: "Tìm kiếm đường bay chính xác, hầu hết các hãng hàng không toàn cầu",
    gif: "/gifs/worldwide.gif",
    title: "+500 hãng hàng không trong nước và quốc tế",
  },
  {
    description: "Chuẩn SEO và Responsive, hiển thị nhanh và đẹp trên điện thoại.",
    gif: "/gifs/responsive.gif",
    title: "Website thiết kế đẹp với điện thoại",
  },
  {
    description: "Quý khách yên tâm sử dụng, không phải chi trả thêm bất kỳ khoản chi phí nào khác",
    gif: "/gifs/no-fee.gif",
    title: "Trọn gói bao gồm website, tra vé, hosting",
  },
  {
    description: "Giúp làm SEO và chạy quảng cáo hiệu quả hơn rất nhiều",
    gif: "/gifs/paper-plane.gif",
    title: "Tốc độ tải trang chỉ 3 giây",
  },
  {
    description: "Thông tin vé được cập nhật liên tục và trực quan trên ứng dụng",
    gif: "/gifs/customer-satisfaction.gif",
    title: "Thống kê chi tiết thông tin hoạt động",
  },
]

const interfaces = [
  {
    description: "Hỗ trợ trên mọi trình duyệt và thiết bị",
    image: "/images/1.png",
    price: "294",
    title: "Avia",
  },
  {
    description: "Hỗ trợ trên mọi trình duyệt và thiết bị",
    image: "/images/2.png",
    price: "294",
    title: "Avia",
  },
  {
    description: "Hỗ trợ trên mọi trình duyệt và thiết bị",
    image: "/images/3.png",
    price: "294",
    title: "Avia",
  },
  {
    description: "Hỗ trợ trên mọi trình duyệt và thiết bị",
    image: "/images/4.png",
    price: "294",
    title: "Avia",
  },
  {
    description: "Hỗ trợ trên mọi trình duyệt và thiết bị",
    image: "/images/5.png",
    price: "294",
    title: "Avia",
  },
  {
    description: "Hỗ trợ trên mọi trình duyệt và thiết bị",
    image: "/images/6.png",
    price: "294",
    title: "Avia",
  },
]

const Home = () => {
  return (
    <div className="relative">
      <Container>
        <Image
          alt="Decore"
          className="absolute right-0 top-0 z-[-1]"
          height={1160}
          priority
          src="/decore.png"
          width={900}
        />
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row xl:gap-0">
          <div className="order-last basis-1/2 space-y-4 xl:order-1 xl:space-y-8">
            <Typography className="font-bold text-[#DF6951]" variant="h5">
              Thiết kế website bán lẻ theo phong cách riêng
            </Typography>
            <div className="font-slab	text-3xl font-bold leading-none xl:text-[112px] xl:leading-[120px] xl:tracking-tighter">
              Chúng tôi là lựa chọn tốt nhất của bạn
            </div>
            <div>
              <div className="font-ad text-xl font-normal text-[#212832] xl:text-2xl">
                Hãy dùng cách 100+ doanh nghiệp và phòng vé đã lựa chọn
              </div>
              <div className="font-ad text-xl font-normal text-[#212832] xl:text-2xl">
                Hệ thống Website hoàn thiện nhất được thiết kế riêng cho Phòng vé
              </div>
            </div>
            <Button className="rounded-xl bg-[#F1A501]">Tạo ngay web site miễn phí</Button>
          </div>
          <Image alt="Logo" className="z-10 order-1 xl:order-last" height={650} src="/flight.png" width={780} />
        </div>
        <Container className="my-8 text-center xl:mt-[354px]" maxWidth="lg">
          <div className="text-2xl font-semibold text-[#5E6282]">Tiện ích của chúng tôi</div>
          <div className="mb-20 mt-4 font-slab text-3xl xl:text-5xl">Chúng tôi cung cấp dịch vụ tốt nhất</div>

          <Grid columnSpacing={12} container rowSpacing={8}>
            {services.map((record, index) => (
              <Grid className="flex flex-col items-center justify-center gap-2" item key={index} lg={4} xs={12}>
                <Image alt={record.title} className="bg-transparent" height={150} src={record.gif} width={150} />
                <div className="text-3xl font-bold xl:min-h-[112px]">{record.title}</div>
                <div className="text-3xl text-[#5E6282]">{record.description}</div>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container className="my-8 text-center xl:my-[240px]" maxWidth="lg" style={{ background: "#FFFFFFAC" }}>
          <div className="text-2xl font-semibold text-[#5E6282]">Miễn phí và hỗ trợ trên mọi trình duyệt</div>
          <div className="mb-20 mt-4 font-slab text-3xl xl:text-5xl">Giao diện website đa dạng, chuyên nghiệp</div>

          <Grid columnSpacing={{ md: 8, xs: 4 }} container rowSpacing={{ md: 10, xs: 4 }}>
            {interfaces.map((record, index) => (
              <Grid item key={index} lg={4} xs={12}>
                <div
                  className="min-h-[450px] rounded-t-3xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${record.image})` }}
                ></div>
                <div className="space-y-6 bg-white px-6 py-5">
                  <div className="flex justify-between">
                    <div className="text-2xl font-bold text-[#5E6282]">Avia</div>
                    <div className="text-2xl font-bold text-[#FE8420]">{record.price}K/Tháng</div>
                  </div>
                  <div className="flex justify-start space-x-2">
                    <Telegram />
                    <div className="text-left text-xl text-[#666]">Hỗ trợ trên mọi trình duyệt và thiết bị</div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container className="my-8 xl:my-[240px]" maxWidth="lg" style={{ background: "#FFFFFFAC" }}>
          <div className="flex flex-col justify-between lg:flex-row">
            <div>
              <div className="text-xl font-semibold text-[#5E6282]">
                Dùng thử miễn phí 15 ngày, đảm bảo hoàn tiền trong 30 ngày.
              </div>
              <div className="mb-10 mt-4 font-slab text-3xl	xl:text-5xl xl:leading-tight">
                Hệ Thống Website Hoàn Thiện Nhất Được Thiết Kế Riêng Cho Phòng vé
              </div>
              <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-14 md:space-y-0">
                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <Image alt="Traveller" height={62} priority src="/images/Basic.png" width={62} />
                    <div>
                      <div className="text-2xl">Cơ bản</div>
                      <div className="text-xl text-[#20BBA8]">249.000đ/tháng</div>
                      <div className="text-xl text-[#20BBA8]">Giảm 10%/gói 1 năm</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <Image alt="Traveller" height={62} priority src="/images/Standard.png" width={62} />
                    <div>
                      <div className="text-2xl">Cơ bản</div>
                      <div className="text-xl text-[#20BBA8]">249.000đ/tháng</div>
                      <div className="text-xl text-[#20BBA8]">Giảm 10%/gói 1 năm</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <Image alt="Traveller" height={62} priority src="/images/Advance.png" width={62} />
                    <div>
                      <div className="text-2xl">Cơ bản</div>
                      <div className="text-xl text-[#20BBA8]">249.000đ/tháng</div>
                      <div className="text-xl text-[#20BBA8]">Giảm 10%/gói 1 năm</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <Image alt="Traveller" height={62} priority src="/images/Basic.png" width={62} />
                    <div>
                      <div className="text-2xl">Cơ bản</div>
                      <div className="text-xl text-[#20BBA8]">249.000đ/tháng</div>
                      <div className="text-xl text-[#20BBA8]">Giảm 10%/gói 1 năm</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <Image alt="Traveller" height={62} priority src="/images/Basic.png" width={62} />
                    <div>
                      <div className="text-2xl">Cơ bản</div>
                      <div className="text-xl text-[#20BBA8]">249.000đ/tháng</div>
                      <div className="text-xl text-[#20BBA8]">Giảm 10%/gói 1 năm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image
              alt="Traveller"
              className="lg:min-w-[540px]"
              height={735}
              priority
              src="/images/traveller.png"
              width={540}
            />
          </div>
          <Button className="rounded-xl bg-[#F1A501]">Xem chi tiết bảng giá</Button>
        </Container>

        <Container className="my-8 text-center xl:my-[240px]" maxWidth="lg" style={{ background: "#FFFFFFAC" }}>
          <div className="mb-20 font-slab text-3xl xl:text-5xl">Khách hàng tiêu biểu Airdata.vn</div>
          <Center className="flex flex-wrap items-center justify-center gap-4">
            {Array.from({ length: 9 }).map((_, index) => (
              <Image alt="logo" height={120} key={index} priority src={`/images/brand${index + 1}.png`} width={200} />
            ))}
          </Center>
        </Container>

        <Container
          className="relative my-8 text-center xl:my-[240px]"
          maxWidth="lg"
          style={{ background: "#FFFFFFAC" }}
        >
          <div className="bg-cover bg-center p-4 2xl:p-28" style={{ backgroundImage: `url(/images/background.png)` }}>
            <Image
              alt="logo"
              className="absolute -top-4 right-0 w-10 2xl:w-24"
              height={94}
              src={`/images/telegram.png`}
              width={94}
            />
            <div className="p-4 font-slab capitalize 2xl:text-3xl">
              Airdata hướng tới sự tối giản hoá, nâng cấp trải nghiệm về ngành du lịch nói chung và ngành vé nói riêng.
              Lấy công nghệ làm cốt lõi trong xây dựng hệ thống, Airdata đưa trải nghiệm kinh doanh bán lẻ trong ngành
              du lịch trở nên nhanh, dễ dàng và Thuận tiện hơn bao giờ hết.
            </div>
          </div>
        </Container>
      </Container>
    </div>
  )
}

export default Home
