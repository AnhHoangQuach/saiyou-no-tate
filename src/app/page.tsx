import { TextSnippetOutlined } from "@mui/icons-material"
import { Box, Button, FormControl, TextField } from "@mui/material"
import Image from "next/image"

import { QAComponent } from "./components"

const Home = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-start justify-center bg-[#f77f7f9d] px-20 pt-4">
          <div className="text-[22px]">採用前後のバックグラウンド調査に特化</div>
          <div className="text-left text-[64px] font-bold">
            外国人材の採用 <br />
            活用にともなう <br />
            リスクを徹底排除
          </div>
          <div className="text-2xl">外国人材バックグラウンド調査サービス</div>
          <div className="relative text-[64px] font-black">SAIYOU no TATE</div>
          <Image alt="Logo" height={374} priority src="/images/people.png" width={543} />
        </div>
        <div className="px-24 py-16">
          <Box>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="border-b-8 border-primary-main px-2 text-2xl font-medium text-black">
                  まずは資料請求 (無料)
                </div>
              </div>
              <div className="my-10 space-y-10">
                <FormControl fullWidth>
                  <label className="mb-2 text-left">
                    会社名/団体名 <span className="text-red-500">(必須)</span>
                  </label>
                  <TextField required />
                </FormControl>
                <FormControl fullWidth>
                  <label className="mb-2 text-left">
                    お名前 <span className="text-red-500">(必須)</span>
                  </label>
                  <TextField placeholder="利幸 太郎" required />
                </FormControl>
                <FormControl fullWidth>
                  <label className="mb-2 text-left">
                    メールアドレス <span className="text-red-500">(必須)</span>
                  </label>
                  <TextField placeholder="research＠research-shield.com" required />
                </FormControl>
                <FormControl fullWidth>
                  <label className="mb-2 text-left">
                    現在のご状況 <span className="text-red-500">(必須)</span>
                  </label>
                  <TextField placeholder="外国人材の採用を検討中" required />
                </FormControl>
              </div>
              <Button
                className="flex h-[70px] w-[284px] bg-primary-main"
                startIcon={<TextSnippetOutlined />}
                variant="contained"
              >
                資料をダウンロード
              </Button>
            </div>
          </Box>
        </div>
      </div>
      <div className="layers flex min-h-[600px] items-center justify-center">
        <div className="background">
          <div className="layer1"></div>
          <div className="layer2"></div>
        </div>
        <div className="flex flex-col items-center justify-center gap-7">
          <div className="text-5xl font-bold">各種お問い合わせはこちら</div>
          <div className="font-bold">お気軽にご連絡ください。</div>
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
      </div>
      <div className="bg-[#fdf3f4]">
        <QAComponent />
      </div>
    </div>
  )
}

export default Home
