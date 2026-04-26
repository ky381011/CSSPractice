import React from 'react'

export function getAnimation05(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'animate-spin + translate-x-4',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="animate-spin h-10 w-10 rounded-full border-4 border-rose-200 border-t-rose-500 translate-x-4" />
          <span className="text-xs text-slate-400">translate-x-4</span>
        </div>
      ),
    },
    {
      name: 'animate-ping + perspective',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="[perspective:120px]">
            <div className="relative flex h-12 w-12 items-center justify-center [transform:rotateY(20deg)]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex h-6 w-6 rounded-full bg-rose-500" />
            </div>
          </div>
          <span className="text-xs text-slate-400">perspective</span>
        </div>
      ),
    },
    {
      name: 'animate-pulse + translate-y-2',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="animate-pulse flex items-center gap-3 translate-y-2">
            <div className="h-10 w-10 rounded-full bg-rose-200 shrink-0" />
            <div className="space-y-2">
              <div className="h-3 w-24 rounded-full bg-rose-200" />
              <div className="h-3 w-16 rounded-full bg-rose-100" />
            </div>
          </div>
          <span className="text-xs text-slate-400">translate-y-2</span>
        </div>
      ),
    },
    {
      name: 'animate-bounce + backface-hidden',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="[perspective:200px]">
            <div className="animate-bounce h-12 w-12 rounded-lg bg-rose-500 shadow-md backface-hidden" />
          </div>
          <span className="text-xs text-slate-400">backface-hidden</span>
        </div>
      ),
    },
  ]
}
