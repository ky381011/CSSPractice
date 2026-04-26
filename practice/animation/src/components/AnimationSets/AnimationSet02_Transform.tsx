import React from 'react'

export function getAnimation02(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'transform: rotate-12',
      element: (
        <div className="h-12 w-12 bg-violet-500 rounded-lg rotate-12 shadow-md" />
      ),
    },
    {
      name: 'transform-origin: top-left',
      element: (
        <div className="relative h-16 w-16 flex items-center justify-center">
          <div className="absolute inset-0 border-2 border-dashed border-slate-300 rounded" />
          <div className="h-10 w-10 bg-violet-400 rounded origin-top-left rotate-45" />
        </div>
      ),
    },
    {
      name: 'transform-origin: bottom-right',
      element: (
        <div className="relative h-16 w-16 flex items-center justify-center">
          <div className="absolute inset-0 border-2 border-dashed border-slate-300 rounded" />
          <div className="h-10 w-10 bg-violet-600 rounded origin-bottom-right rotate-45" />
        </div>
      ),
    },
    {
      name: 'transform-style: preserve-3d',
      element: (
        <div className="[perspective:160px]">
          <div className="h-12 w-16 bg-violet-500 rounded-lg shadow-md [transform-style:preserve-3d] [transform:rotateY(35deg)]" />
        </div>
      ),
    },

  ]
}
