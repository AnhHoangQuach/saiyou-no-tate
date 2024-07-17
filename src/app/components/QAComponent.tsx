import { Container } from "@mui/material"

import { QAItem } from "."

const QAComponent = () => {
  const data = [
    {
      answer:
        "詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。",
      question: "タイトルテキストが入ります。",
    },
    {
      answer:
        "詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。",
      question: "タイトルテキストが入ります。",
    },
    {
      answer:
        "詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。",
      question: "タイトルテキストが入ります。",
    },
    {
      answer:
        "詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。",
      question: "タイトルテキストが入ります。",
    },
    {
      answer:
        "詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。",
      question: "タイトルテキストが入ります。",
    },
    {
      answer:
        "詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。",
      question: "タイトルテキストが入ります。",
    },
  ]
  return (
    <Container className="flex w-full flex-col items-center justify-center pb-[100px] pt-14" maxWidth="lg">
      <div className="mb-10 text-4xl font-bold">FAQ</div>
      <div className="flex w-full flex-col gap-6">
        {data.map((item, index) => (
          <QAItem answer={item.answer} key={index} question={item.question} />
        ))}
      </div>
    </Container>
  )
}
export default QAComponent
