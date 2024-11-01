import { Button } from "./ui/button"

export const ButtonVariantsDemo = () => {
  return (
    <div className="mx-auto grid w-fit grid-cols-3 gap-4 self-start">
      <Button>default</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
    </div>
  )
}
