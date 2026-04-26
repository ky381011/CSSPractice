import React from 'react'

export function getAnimation03(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'animate-spin (dual)',
      element: (
        <div className="relative h-12 w-12">
          <div className="animate-spin absolute inset-0 rounded-full border-4 border-transparent border-t-emerald-500" />
          <div
            className="animate-spin absolute inset-1 rounded-full border-4 border-transparent border-t-emerald-300"
            style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}
          />
        </div>
      ),
    },
    {
      name: 'animate-ping (badge)',
      element: (
        <div className="relative inline-flex">
          <button className="rounded-full bg-emerald-500 px-4 py-2 text-sm text-white font-medium">
            Notifications
          </button>
          <span className="animate-ping absolute -top-1 -right-1 inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75" />
          <span className="absolute -top-1 -right-1 inline-flex h-3 w-3 rounded-full bg-red-500" />
        </div>
      ),
    },
    {
      name: 'animate-pulse (list)',
      element: (
        <div className="animate-pulse space-y-2 w-44">
          {[40, 32, 44, 28].map((w, i) => (
            <div key={i} className="h-3 rounded bg-emerald-200" style={{ width: `${w * 0.9}px` }} />
          ))}
        </div>
      ),
    },
    {
      name: 'animate-bounce (dots)',
      element: (
        <div className="flex items-end gap-1">
          {[0, 0.15, 0.3].map((delay, i) => (
            <div
              key={i}
              className="animate-bounce h-3 w-3 rounded-full bg-emerald-500"
              style={{ animationDelay: `${delay}s` }}
            />
          ))}
        </div>
      ),
    },
  ]
}
