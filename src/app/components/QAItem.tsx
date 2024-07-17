"use client"
import { ExpandMore } from "@mui/icons-material"
import { Collapse, IconButton, Typography } from "@mui/material"
import clsx from "clsx"
import { useState } from "react"

type QAItemProps = {
  answer?: string
  question: string
}

const QAItem = ({ answer, question }: QAItemProps) => {
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="flex items-start justify-between rounded-2xl border border-[#EB001C] bg-white p-6 shadow-md">
      <div>
        <div className="flex items-start gap-6">
          <div className="text-3xl font-bold text-[#EB001C]">Q</div>
          <div>
            <Typography className="font-bold" variant="h6">
              {question}
            </Typography>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              {answer}
            </Collapse>
          </div>
        </div>
      </div>
      <IconButton
        className={clsx({
          "rotate-180 transform border": expanded,
        })}
        onClick={handleExpandClick}
      >
        <ExpandMore />
      </IconButton>
    </div>
  )
}

export default QAItem
