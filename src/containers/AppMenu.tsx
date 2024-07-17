import { TextSnippetOutlined } from "@mui/icons-material"
import { Button } from "@mui/material"
import Image from "next/image"

const AppMenu = () => {
  return (
    <div className="grid h-[100px] w-full grid-cols-2">
      <div className="flex w-full items-center justify-between bg-[#f77f7f9d] px-8">
        <div className="flex items-center gap-2">
          <Image alt="Logo" height={58} priority src="/logo.png" width={58} />
          <div className="text-2xl font-semibold text-black">SAIYOU no TATE</div>
        </div>
        <div className="flex flex-col items-end justify-center text-black">
          <div className="text-[16px] font-bold text-white">平日10:00〜19:00</div>
          <div className="flex items-center justify-center gap-2">
            <Image alt="Logo" className="max-h-[25px]" height={25} priority src="/images/phone-icon.png" width={25} />
            <div className="text-[28px] font-bold">03-1234-5678</div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between px-8 text-white">
        <Button
          className="flex h-[50px] w-[200px] rounded-md border border-white bg-primary-main text-white"
          startIcon={<TextSnippetOutlined />}
          variant="outlined"
        >
          資料請求
        </Button>
        <Button
          className="flex h-[50px] w-[200px] rounded-md border border-white bg-[#000] text-white"
          startIcon={<TextSnippetOutlined />}
          variant="outlined"
        >
          資料請求
        </Button>
        <Button
          className="flex h-[50px] w-[200px] rounded-md border border-white bg-secondary-main text-white"
          startIcon={<TextSnippetOutlined />}
          variant="outlined"
        >
          資料請求
        </Button>
      </div>
    </div>
  )
}

export default AppMenu
