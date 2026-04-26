import React from 'react'

export function getAnimation04(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'scale-75',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="relative h-14 w-14 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-dashed border-slate-300 rounded-lg" />
            <div className="h-14 w-14 bg-amber-400 rounded-lg scale-75" />
          </div>
          <span className="text-xs text-slate-400">scale-75</span>
        </div>
      ),
    },
    {
      name: 'scale-125',
      element: (
        <div className="flex flex-col items-center gap-3">
          <div className="relative h-14 w-14 flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-dashed border-slate-300 rounded-lg" />
            <div className="h-14 w-14 bg-amber-500 rounded-lg scale-125" />
          </div>
          <span className="text-xs text-slate-400">scale-125</span>
        </div>
      ),
    },
    {
      name: 'skew-x-12',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-16 bg-amber-400 rounded skew-x-12" />
          <span className="text-xs text-slate-400">skew-x-12</span>
        </div>
      ),
    },
    {
      name: 'skew-y-6',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-16 bg-amber-500 rounded skew-y-6" />
          <span className="text-xs text-slate-400">skew-y-6</span>
        </div>
      ),
    },
  ]
}
