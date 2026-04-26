import React from 'react'

export function getAnimation02(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'animate-spin (ring)',
      element: (
        <div className="animate-spin h-12 w-12 rounded-full border-4 border-transparent border-t-violet-500 border-r-violet-300" />
      ),
    },
    {
      name: 'animate-ping (square)',
      element: (
        <div className="relative flex h-12 w-12 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-md bg-violet-400 opacity-75" />
          <span className="relative inline-flex rounded-md h-6 w-6 bg-violet-500" />
        </div>
      ),
    },
    {
      name: 'animate-pulse (card)',
      element: (
        <div className="animate-pulse w-40 rounded-lg bg-slate-200 p-3 space-y-2">
          <div className="h-3 rounded bg-slate-300" />
          <div className="h-3 w-4/5 rounded bg-slate-300" />
          <div className="h-3 w-3/5 rounded bg-slate-300" />
        </div>
      ),
    },
    {
      name: 'animate-bounce (arrow)',
      element: (
        <div className="animate-bounce flex flex-col items-center gap-0.5">
          {[1, 2, 3].map((i) => (
            <svg
              key={i}
              className="h-4 w-4 text-violet-400"
              style={{ opacity: 0.3 + i * 0.3 }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          ))}
        </div>
      ),
    },
  ]
}
