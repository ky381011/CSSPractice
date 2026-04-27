import React from 'react'

const PlaceholderFrame = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center justify-center h-24 w-full rounded-lg border-2 border-dashed border-slate-300 gap-2">
    <svg className="h-6 w-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
    </svg>
    <span className="text-xs text-slate-400">{label}</span>
  </div>
)

export function getLearningXX(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'Template-1',
      element: <PlaceholderFrame label="ここに学習コンテンツを追加" />,
    },
    {
      name: 'Template-2',
      element: <PlaceholderFrame label="ここに学習コンテンツを追加" />,
    },
    {
      name: 'Template-3',
      element: <PlaceholderFrame label="ここに学習コンテンツを追加" />,
    },
    {
      name: 'Template-4',
      element: <PlaceholderFrame label="ここに学習コンテンツを追加" />,
    },
  ]
}
