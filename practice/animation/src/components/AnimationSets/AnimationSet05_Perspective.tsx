import React from 'react'

export function getAnimation05(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'translate-x-6',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="relative h-10 w-32">
            <div className="absolute inset-0 border-2 border-dashed border-slate-300 rounded-lg" />
            <div className="h-10 w-10 bg-rose-500 rounded-lg translate-x-6" />
          </div>
          <span className="text-xs text-slate-400">translate-x-6</span>
        </div>
      ),
    },
    {
      name: 'translate-y-4',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="relative h-16 w-10">
            <div className="absolute inset-0 border-2 border-dashed border-slate-300 rounded-lg" />
            <div className="h-10 w-10 bg-rose-500 rounded-lg translate-y-4" />
          </div>
          <span className="text-xs text-slate-400">translate-y-4</span>
        </div>
      ),
    },
    {
      name: 'perspective',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="[perspective:160px]">
            <div className="h-12 w-16 bg-rose-500 rounded-lg shadow-md [transform:rotateY(35deg)]" />
          </div>
          <span className="text-xs text-slate-400">perspective</span>
        </div>
      ),
    },
    {
      name: 'backface-visibility',
      element: (
        <div className="flex flex-col items-center gap-2">
          <div className="[perspective:200px] h-12 w-16">
            <div className="h-12 w-16 bg-rose-500 rounded-lg shadow-md backface-hidden [transform:rotateY(70deg)]" />
          </div>
          <span className="text-xs text-slate-400">backface-hidden</span>
        </div>
      ),
    },
  ]
}
