import React from 'react'

export function getLearning01(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'Template',
      element: (
        <div className="flex flex-col items-center justify-center h-24 w-full rounded-lg border-2 border-dashed border-slate-300 gap-2">
          <svg className="h-6 w-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
          <span className="text-xs text-slate-400">ここに学習コンテンツを追加</span>
        </div>
      ),
    },
  ]
}
