import { cssCode } from "@/constants/css-globals-code"
import { tailwindConfigCode } from "@/constants/tailwind-config-code"

import { ButtonVariantsDemo } from "@/components/button-variants-demo"
import { Code } from "@/components/code"
import { ColorPalette } from "@/components/color-palette"
import { Footer } from "@/components/footer"
import { Terminal } from "@/components/terminal"
import { ThemeSwitch } from "@/components/theme-switch"
import { Title } from "@/components/title"

export default function Home() {
  return (
    <section className="flex h-full w-full justify-center">
      <div className="container relative mx-4 my-8 flex w-full max-w-screen-md flex-col justify-between gap-y-8 overflow-x-auto">
        <ThemeSwitch className="absolute right-0 top-0" />
        <Title />

        <ColorPalette />
        <ButtonVariantsDemo />
        <Terminal />

        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <Code highlightedCode={cssCode} />
          <Code highlightedCode={tailwindConfigCode} />
        </div>

        <Footer />
      </div>
    </section>
  )
}
