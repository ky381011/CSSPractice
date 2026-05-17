import React from 'react'

export const setName = 'Pulse'

const PlaceholderFrame = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center justify-center flex-1 min-h-0 w-full rounded-lg border-2 border-dashed border-slate-300 gap-2">
    <svg className="h-6 w-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
    </svg>
    <span className="text-xs text-slate-400">{label}</span>
  </div>
)

export function getLearning03(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'Base',
      element: (
        <div className="relative flex h-full w-full items-center justify-center">
          <div className='h-12 w-12 animate-pulse rounded-full bg-amber-400'></div>
        </div>
      ),
    },
    {
      // テキストへの適用: div だけでなくテキストにも animate-pulse は使える
      // 「読み込み中」の状態をラベルで伝えつつ、視覚的に動きを加える
      name: 'Text',
      element: (
        <div className="flex h-full w-full items-center justify-center">
          <p className="animate-pulse text-slate-400 text-sm">読み込み中...</p>
        </div>
      ),
    },
    {
      name: 'Pulse-3',
      element: <PlaceholderFrame label="ここに学習コンテンツを追加" />,
    },
    {
      name: 'Pulse-4',
      element: <PlaceholderFrame label="ここに学習コンテンツを追加" />,
    },
  ]
}
