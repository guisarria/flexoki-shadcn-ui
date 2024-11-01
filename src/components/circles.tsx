const Circles = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex size-32 flex-col items-center justify-center rounded-full border-[2px] border-orange-primary">
        <div className="flex size-24 flex-col items-center justify-center rounded-full border-[2px] border-magenta-primary">
          <div className="flex size-16 flex-col items-center justify-center rounded-full border-[2px] border-green-primary">
            <div className="flex size-8 flex-col items-center justify-center rounded-full border-[2px] border-cyan-primary"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Circles }
