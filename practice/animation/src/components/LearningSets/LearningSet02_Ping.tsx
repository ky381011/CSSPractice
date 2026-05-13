import React from 'react'

export const setName = 'Ping'

const PlaceholderFrame = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center justify-center flex-1 min-h-0 w-full rounded-lg border-2 border-dashed border-slate-300 gap-2">
    <svg className="h-6 w-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
    </svg>
    <span className="text-xs text-slate-400">{label}</span>
  </div>
)

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
      name: 'Next',
      element: (
        <div className="relative flex h-full w-full items-center justify-center">
          <div className='h-2 w-2 animate-ping rounded-full bg-amber-400'></div>
        </div>
      ),
    },
  ]
}
