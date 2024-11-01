"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { highlight } from "sugar-high"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Code({ highlightedCode }: { highlightedCode: string }) {
  const [hasCopied, setHasCopied] = useState(false)

  async function copyToClipboard() {
    await navigator.clipboard.writeText(highlightedCode)
    setHasCopied(true)
    setTimeout(() => setHasCopied(false), 2000)
  }

  return (
    <ScrollArea className="relative max-h-[38vh] w-full border">
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-4 top-4 z-20"
        onClick={copyToClipboard}
      >
        {hasCopied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </Button>
      <div className="relative overflow-auto">
        <pre className="overflow-auto px-4 pb-4 leading-tight">
          <code
            dangerouslySetInnerHTML={{ __html: highlight(highlightedCode) }}
            className={"font-medium tracking-tight"}
          />
        </pre>
      </div>
    </ScrollArea>
  )
}
