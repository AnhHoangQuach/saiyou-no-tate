import { TextSnippetOutlined } from "@mui/icons-material"
import { Button, Typography } from "@mui/material"
import Image from "next/image"

const AppFooter = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-10 bg-[#242424] pt-[50px]">
      <div className="flex flex-col items-center justify-center gap-2">
        <Image alt="Logo" height={93} priority src="/logo.png" width={93} />
        <Typography className="text-white" variant="h4">
          SAIYOU no TATE
        </Typography>
      </div>
      <div className="flex items-center justify-between gap-[70px] text-white">
        <div>FAQ</div>
        <div>運営者</div>
        <div>プライバシーポリシー</div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="text-white">外国人材の採用・活用に課題のある事業者様はお問い合わせください。</div>
        <div className="flex items-center justify-between gap-[10px] text-white">
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
      <div className="mb-5 text-sm text-white">Copyright © SAIYOU no TATE</div>
    </div>
  )
}

export default AppFooter
