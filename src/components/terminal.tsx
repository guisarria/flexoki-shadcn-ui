"use client"

import { useRef, useState } from "react"

const terminalCommands = {
  help: {
    content: [
      "Available commands:<br/>",
      "<span class='text-orange-primary'>help</span> - Show this help message <br/>",
      "<span class='text-orange-primary'>clear</span> - Clear terminal <br/>",
      "<span class='text-orange-primary'>colors</span> - Show all colors <br/>",
      "<span class='text-orange-primary'>palette</span> - Display color pairs <br/>",
      "<span class='text-orange-primary'>mentioned</span> - Brazil mentioned <br/>",
      "<span class='text-orange-primary'>flexoki</span> - About Flexoki <br/>",
      "<span class='text-orange-primary'>shadcn/ui</span> - About shadcn/ui",
    ],
  },
  clear: {
    content: [],
    isClear: true,
  },
  colors: {
    content: [
      "<span class='text-red-primary'>█</span> red-primary",
      "<span class='text-orange-primary'>█</span> orange-primary",
      "<span class='text-yellow-primary'>█</span> yellow-primary",
      "<span class='text-green-primary'>█</span> green-primary",
      "<span class='text-cyan-primary'>█</span> cyan-primary",
      "<span class='text-blue-primary'>█</span> blue-primary",
      "<span class='text-purple-primary'>█</span> purple-primary",
      "<span class='text-magenta-primary'>█</span> magenta-primary",
      "<span class='text-red-secondary'>█</span> red-secondary",
      "<span class='text-orange-secondary'>█</span> orange-secondary",
      "<span class='text-yellow-secondary'>█</span> yellow-secondary",
      "<span class='text-green-secondary'>█</span> green-secondary",
      "<span class='text-cyan-secondary'>█</span> cyan-secondary",
      "<span class='text-blue-secondary'>█</span> blue-secondary",
      "<span class='text-purple-secondary'>█</span> purple-secondary",
      "<span class='text-magenta-secondary'>█</span> magenta-secondary",
    ],
  },
  palette: {
    content: [
      "<span class='text-red-primary'>█</span><span class='text-red-secondary'>█</span> Red",
      "<span class='text-orange-primary'>█</span><span class='text-orange-secondary'>█</span> Orange",
      "<span class='text-yellow-primary'>█</span><span class='text-yellow-secondary'>█</span> Yellow",
      "<span class='text-green-primary'>█</span><span class='text-green-secondary'>█</span> Green",
      "<span class='text-cyan-primary'>█</span><span class='text-cyan-secondary'>█</span> Cyan",
      "<span class='text-blue-primary'>█</span><span class='text-blue-secondary'>█</span> Blue",
      "<span class='text-purple-primary'>█</span><span class='text-purple-secondary'>█</span> Purple",
      "<span class='text-magenta-primary'>█</span><span class='text-magenta-secondary'>█</span> Magenta",
    ],
  },
  mentioned: {
    content: [
      "<div class='leading-none'>",
      "<span class='text-green-primary'>██</span><span class='text-green-primary'>█</span><span class='text-green-primary'>█</span><span class='text-green-primary'>█</span><span class='text-green-primary'>██</span><br />",
      "<span class='text-green-primary'>██</span><span class='text-green-primary'>█</span><span class='text-yellow-primary'>█</span><span class='text-green-primary'>█</span><span class='text-green-primary'>██</span><br />",
      "<span class='text-green-primary'>██</span><span class='text-yellow-primary'>█</span><span class='text-blue-primary'>█</span><span class='text-yellow-primary'>█</span><span class='text-green-primary'>██</span><br />",
      "<span class='text-green-primary'>██</span><span class='text-green-primary'>█</span><span class='text-yellow-primary'>█</span><span class='text-green-primary'>█</span><span class='text-green-primary'>██</span><br />",
      "<span class='text-green-primary'>██</span><span class='text-green-primary'>█</span><span class='text-green-primary'>█</span><span class='text-green-primary'>█</span><span class='text-green-primary'>██</span><br />",
      "</div>",
    ],
  },
  flexoki: {
    content: [
      "Flexoki is an inky color scheme for prose and code. Flexoki is designed for reading and writing on digital screens. It is inspired by analog printing inks and warm shades of paper.<br />",
      "It was designed by <a href='https://stephango.com/flexoki' target='_blank' class='text-cyan-primary'>Steph Ango</a>.",
    ],
  },
  "shadcn/ui": {
    content: [
      "shadcn/ui it's a collection of re-usable components that you can copy and paste into your apps. <br />",
      "It was designed by <a href='https://ui.shadcn.com/' target='_blank' class='text-cyan-primary'>shadcn</a>.",
    ],
  },
} as const

interface CommandResponse {
  content: string[] | readonly string[]
  isClear?: boolean
}

function Terminal() {
  const [history, setHistory] = useState<string[]>([])
  const [input, setInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  function handleCommand(command: string): CommandResponse {
    const response = terminalCommands[command as keyof typeof terminalCommands]

    if (!response) {
      return {
        content: [
          `Command not found: ${command}. Type 'help' for available commands.`,
        ],
      }
    }

    return response
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const command = input.trim().toLowerCase()
    const response = handleCommand(command)

    if (response.isClear) {
      setHistory([])
      setInput("")
      return
    }

    setHistory([...history, `>_ ${input}`, response.content.join("\n")])
    setInput("")
  }

  return (
    <div className="border p-1">
      <div className="flex items-center bg-red-primary text-center text-background">
        <span className="mx-auto">terminal</span>
      </div>
      <div className="w-full bg-background p-4 font-medium">
        <div className="mb-4 h-[20vh] overflow-y-auto">
          {history.map((line, index) => (
            <div
              key={index}
              className={
                index % 2 === 0
                  ? "text-red-primary"
                  : "mb-2 leading-tight text-primary"
              }
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex items-center gap-x-2">
          <span className="text-magenta-primary">{">_"}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow bg-transparent font-mono focus:outline-none"
            aria-label="Terminal input"
          />
        </form>
      </div>
    </div>
  )
}

export { Terminal }
