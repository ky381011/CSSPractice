import React from 'react'

export function getAnimation02(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'animate-spin + origin-top-left',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="animate-spin h-12 w-12 rounded-full border-4 border-violet-200 border-t-violet-600 origin-top-left" />
          <span className="text-xs text-slate-400">origin-top-left</span>
        </div>
      ),
    },
    {
      name: 'animate-ping + origin-bottom-right',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="relative flex h-12 w-12 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75 origin-bottom-right" />
            <span className="relative inline-flex h-6 w-6 rounded-full bg-violet-500" />
          </div>
          <span className="text-xs text-slate-400">origin-bottom-right</span>
        </div>
      ),
    },
    {
      name: 'animate-pulse + rotate-3',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="animate-pulse w-40 rounded-lg bg-slate-200 p-3 space-y-2 rotate-3">
            <div className="h-3 rounded bg-violet-200" />
            <div className="h-3 w-4/5 rounded bg-violet-200" />
          </div>
          <span className="text-xs text-slate-400">rotate-3</span>
        </div>
      ),
    },
    {
      name: 'animate-bounce + preserve-3d',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="[perspective:200px]">
            <div className="animate-bounce h-12 w-12 rounded-lg bg-violet-500 shadow-lg [transform-style:preserve-3d] [transform:rotateY(20deg)]" />
          </div>
          <span className="text-xs text-slate-400">preserve-3d</span>
        </div>
      ),
    },
  ]
}
