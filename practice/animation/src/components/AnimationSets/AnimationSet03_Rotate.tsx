import React from 'react'

export function getAnimation03(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'animate-spin + rotate-45',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="animate-spin h-12 w-12 rounded-lg border-4 border-transparent border-t-emerald-600 rotate-45" />
          <span className="text-xs text-slate-400">rotate-45</span>
        </div>
      ),
    },
    {
      name: 'animate-ping + rotate-12',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="relative flex h-12 w-12 items-center justify-center rotate-12">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-6 w-6 rounded-full bg-emerald-500" />
          </div>
          <span className="text-xs text-slate-400">rotate-12</span>
        </div>
      ),
    },
    {
      name: 'animate-pulse + rotate-3',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="animate-pulse flex space-x-2 rotate-3">
            <div className="rounded-full bg-emerald-200 h-10 w-10 shrink-0" />
            <div className="flex flex-col justify-center space-y-2">
              <div className="h-3 w-20 rounded bg-emerald-200" />
              <div className="h-3 w-14 rounded bg-emerald-200" />
            </div>
          </div>
          <span className="text-xs text-slate-400">rotate-3</span>
        </div>
      ),
    },
    {
      name: 'animate-bounce + -rotate-12',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="animate-bounce h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center -rotate-12">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <span className="text-xs text-slate-400">-rotate-12</span>
        </div>
      ),
    },
  ]
}
