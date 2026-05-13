import React from 'react'

export const setName = 'Ping'

const PlaceholderFrame = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center justify-center flex-1 min-h-0 w-full rounded-lg border-2 border-dashed border-slate-300 gap-2">
    <svg className="h-6 w-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
    </svg>
    <span className="text-xs text-slate-400">{label}</span>
  </div>
)

export function getLearning02(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'Ping-1',
      element: <PlaceholderFrame label="ここに学習コンテンツを追加" />,
    },
    {
      name: 'Ping-2',
      element: <PlaceholderFrame label="ここに学習コンテンツを追加" />,
    },
    {
      name: 'Ping-3',
      element: <PlaceholderFrame label="ここに学習コンテンツを追加" />,
    },
    {
      name: 'Ping-4',
      element: <PlaceholderFrame label="ここに学習コンテンツを追加" />,
    },
  ]
}
