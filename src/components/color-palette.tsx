const ColorPalette = () => {
  return (
    <div className="flex w-full flex-col items-start">
      <div className="grid w-full grid-cols-8 self-center">
        <div className="h-6 w-auto bg-orange-primary" />
        <div className="h-6 w-auto bg-green-primary" />
        <div className="h-6 w-auto bg-cyan-primary" />
        <div className="h-6 w-auto bg-blue-primary" />
        <div className="h-6 w-auto bg-purple-primary" />
        <div className="h-6 w-auto bg-magenta-primary" />
        <div className="h-6 w-auto bg-yellow-primary" />
        <div className="h-6 w-auto bg-red-primary" />

        <div className="h-6 w-auto bg-orange-secondary" />
        <div className="h-6 w-auto bg-green-secondary" />
        <div className="h-6 w-auto bg-cyan-secondary" />
        <div className="h-6 w-auto bg-blue-secondary" />
        <div className="h-6 w-auto bg-purple-secondary" />
        <div className="h-6 w-auto bg-magenta-secondary" />
        <div className="h-6 w-auto bg-yellow-secondary" />
        <div className="h-6 w-auto bg-red-secondary" />
      </div>
    </div>
  )
}

export { ColorPalette }
