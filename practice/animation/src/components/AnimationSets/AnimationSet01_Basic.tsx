import React from 'react'

export function getAnimation01(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'animate-spin',
      element: (
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-sky-300 border-t-sky-600" />
      ),
    },
    {
      name: 'animate-ping',
      element: (
        <div className="relative flex h-12 w-12 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-6 w-6 bg-sky-500" />
        </div>
      ),
    },
    {
      name: 'animate-pulse',
      element: (
        <div className="animate-pulse flex space-x-2">
          <div className="rounded-full bg-slate-300 h-10 w-10" />
          <div className="flex flex-col justify-center space-y-2">
            <div className="h-3 w-24 rounded bg-slate-300" />
            <div className="h-3 w-16 rounded bg-slate-300" />
          </div>
        </div>
      ),
    },
    {
      name: 'animate-bounce',
      element: (
        <div className="animate-bounce h-12 w-12 rounded-full bg-sky-500 flex items-center justify-center">
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      ),
    },
  ]
}
