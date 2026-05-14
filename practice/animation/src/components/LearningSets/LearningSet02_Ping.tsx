import React from 'react'

function ClickPing() {
  const [pinging, setPinging] = React.useState(false)
  return (
    <div
      className="relative flex h-full w-full items-center justify-center cursor-pointer"
      onClick={() => setPinging(true)}
    >
      <div
        className={`h-12 w-12 rounded-full bg-amber-400 ${pinging ? 'animate-ping' : ''}`}
        onAnimationIteration={() => setPinging(false)}
      ></div>
    </div>
  )
}

export const setName = 'Ping'

export function getLearning02(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'Base',
      element: (
        <div className="relative flex h-full w-full items-center justify-center">
          <div className='h-2 w-2 animate-ping rounded-full bg-amber-400'></div>
        </div>
      ),
    },
    {
      name: 'Left Up',
      element: (
        <div className="flex h-full w-full items-center justify-center">
          <div className='relative h-8 w-32 rounded-full bg-amber-100 text-center'>
            <span className="absolute -top-1 -left-1 inline-flex h-4 w-4 animate-ping rounded-full bg-amber-400 opacity-75"></span>
            Click Me!!
          </div>
        </div>
      ),
    },
    {
      name: 'Hover',
      element: (
        <div className="relative flex h-full w-full items-center justify-center">
          <div className='h-12 w-12 rounded-full hover:animate-ping bg-amber-400'></div>
        </div>
      ),
    },
    {
      name: 'Click',
      element: <ClickPing />,
    },
  ]
}
