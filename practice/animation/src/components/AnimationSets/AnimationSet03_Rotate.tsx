import React from 'react'

const UpArrow = ({ className }: { className: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
)

export function getAnimation03(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'rotate-45',
      element: (
        <div className="flex flex-col items-center gap-2">
          <UpArrow className="h-12 w-12 text-emerald-500 rotate-45" />
          <span className="text-xs text-slate-400">rotate-45</span>
        </div>
      ),
    },
    {
      name: 'rotate-90',
      element: (
        <div className="flex flex-col items-center gap-2">
          <UpArrow className="h-12 w-12 text-emerald-500 rotate-90" />
          <span className="text-xs text-slate-400">rotate-90</span>
        </div>
      ),
    },
    {
      name: 'rotate-180',
      element: (
        <div className="flex flex-col items-center gap-2">
          <UpArrow className="h-12 w-12 text-emerald-500 rotate-180" />
          <span className="text-xs text-slate-400">rotate-180</span>
        </div>
      ),
    },
    {
      name: '-rotate-45',
      element: (
        <div className="flex flex-col items-center gap-2">
          <UpArrow className="h-12 w-12 text-emerald-500 -rotate-45" />
          <span className="text-xs text-slate-400">-rotate-45</span>
        </div>
      ),
    },
  ]
}
