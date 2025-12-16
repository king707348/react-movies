"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"

interface TruncatedTextProp {
    text: string
}

export default function TruncatedText({text}:TruncatedTextProp){
    const maxTextLeng = 100
    const isLongText = text.length > maxTextLeng
    const [isExpendText, setIsExpendText] = useState(false)

    const displayedText = isLongText && !isExpendText ?
        text.substring(0, maxTextLeng) + "..." : text

    return (
        <>
            <div>{displayedText}</div>
            <Button variant="outline"
                onClick={()=>setIsExpendText(!isExpendText)}
            >
                {isExpendText ? '收合內容 ▲': '展開更多 ▼'}
            </Button>
        </>
    )
}