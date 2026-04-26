import React from 'react'

export function getAnimation05(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'animate-spin (gradient)',
      element: (
        <div className="relative h-12 w-12">
          <div className="animate-spin absolute inset-0 rounded-full bg-linear-to-tr from-rose-500 to-transparent" />
          <div className="absolute inset-1 rounded-full bg-white" />
        </div>
      ),
    },
    {
      name: 'animate-ping (multi)',
      element: (
        <div className="relative flex h-12 w-12 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-300 opacity-50" />
          <span
            className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-rose-400 opacity-60"
            style={{ animationDelay: '0.2s' }}
          />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-rose-500" />
        </div>
      ),
    },
    {
      name: 'animate-pulse (avatar)',
      element: (
        <div className="animate-pulse flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-rose-200" />
          <div className="space-y-2">
            <div className="h-3 w-24 rounded-full bg-rose-200" />
            <div className="h-3 w-16 rounded-full bg-rose-100" />
          </div>
        </div>
      ),
    },
    {
      name: 'animate-bounce (stagger)',
      element: (
        <div className="flex items-center gap-2">
          {['R', 'O', 'S', 'E'].map((char, i) => (
            <span
              key={i}
              className="animate-bounce inline-block font-bold text-rose-500 text-lg"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </div>
      ),
    },
  ]
}
