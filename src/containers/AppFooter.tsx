import { Container } from "@mui/material"
import Image from "next/image"

const AppFooter = () => {
  return (
    <Container className="flex flex-col items-center justify-between gap-y-6 lg:flex-row" maxWidth="lg">
      <Image alt="Logo" height={90} priority src="/logo.png" width={290} />
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="space-y-6 text-center lg:text-right">
          <div className="text-2xl font-semibold text-[#080809]">Công Ty</div>
          <div className="space-y-2 text-xl text-[#5E6282]">
            <div>Về chúng tôi</div>
            <div>Tầm nhìn</div>
            <div>Tuyển dụng</div>
          </div>
        </div>
        <div className="space-y-6 text-center lg:text-right">
          <div className="text-2xl font-semibold text-[#080809]">Liên Hệ</div>
          <div className="space-y-2 text-xl text-[#5E6282]">
            <div>Hỗ trợ/FAQ</div>
            <div>Tin tức</div>
            <div>Liên kết</div>
          </div>
        </div>
        <div className="space-y-6 text-center lg:text-right">
          <div className="text-2xl font-semibold text-[#080809]">Công Ty</div>
          <div className="space-y-2 text-xl text-[#5E6282]">
            <div>Airlinefees</div>
            <div>Airline</div>
            <div>Low fare tips</div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AppFooter
