import React from 'react'

export function getAnimation04(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'animate-spin (progress)',
      element: (
        <div className="flex items-center gap-3">
          <div className="animate-spin h-10 w-10 rounded-full border-4 border-amber-200 border-t-amber-500" />
          <span className="text-sm text-amber-600 font-medium">Loading…</span>
        </div>
      ),
    },
    {
      name: 'animate-ping (status)',
      element: (
        <div className="flex items-center gap-2">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-500" />
          </div>
          <span className="text-sm text-amber-700 font-medium">Online</span>
        </div>
      ),
    },
    {
      name: 'animate-pulse (image)',
      element: (
        <div className="animate-pulse flex gap-3 items-start w-44">
          <div className="h-10 w-10 rounded-md bg-amber-200 shrink-0" />
          <div className="flex-1 space-y-2 pt-1">
            <div className="h-3 rounded bg-amber-200" />
            <div className="h-3 w-4/5 rounded bg-amber-200" />
          </div>
        </div>
      ),
    },
    {
      name: 'animate-bounce (button)',
      element: (
        <button className="animate-bounce rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-white shadow">
          Click me ↓
        </button>
      ),
    },
  ]
}
