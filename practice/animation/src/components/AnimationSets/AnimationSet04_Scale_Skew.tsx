import React from 'react'

export function getAnimation04(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'animate-spin + scale-150',
      element: (
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin h-8 w-8 rounded-full border-4 border-amber-200 border-t-amber-500 scale-150" />
          <span className="text-xs text-slate-400">scale-150</span>
        </div>
      ),
    },
    {
      name: 'animate-ping + skew-x-12',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="relative flex h-12 w-12 items-center justify-center skew-x-12">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-md bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-6 w-6 rounded-md bg-amber-500" />
          </div>
          <span className="text-xs text-slate-400">skew-x-12</span>
        </div>
      ),
    },
    {
      name: 'animate-pulse + scale-90',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="animate-pulse w-40 rounded-lg bg-slate-200 p-3 space-y-2 scale-90">
            <div className="h-3 rounded bg-amber-200" />
            <div className="h-3 w-4/5 rounded bg-amber-200" />
            <div className="h-3 w-3/5 rounded bg-amber-200" />
          </div>
          <span className="text-xs text-slate-400">scale-90</span>
        </div>
      ),
    },
    {
      name: 'animate-bounce + skew-x-6',
      element: (
        <div className="flex flex-col items-center gap-2">
          <button className="animate-bounce rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-white shadow skew-x-6">
            Click ↓
          </button>
          <span className="text-xs text-slate-400">skew-x-6</span>
        </div>
      ),
    },
  ]
}
