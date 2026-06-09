import React from 'react'

export const setName = 'flex'

const PlaceholderFrame = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center justify-center flex-1 min-h-0 w-full rounded-lg border-2 border-dashed border-slate-300 gap-2">
    <svg className="h-6 w-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
    </svg>
    <span className="text-xs text-slate-400">{label}</span>
  </div>
)

export function getLearning04(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'Flex',
      element: (
        <div className='flex flex-row'>
          <div className='w-4 h-4 bg-amber-200 rounded-sm border-amber-200'></div>
          <div className='w-4 h-4 bg-amber-300 rounded-sm border-amber-300'></div>
          <div className='w-4 h-4 bg-amber-400 rounded-sm border-amber-400'></div>
          <div className='w-4 h-4 bg-amber-500 rounded-sm border-amber-500'></div>
        </div>
      ),
    },
    {
      name: 'Flex ',
      element: (
        <div className='flex flex-row md:w-24 w-16'>
          <div className='w-4 h-4 flex-initial bg-amber-200 rounded-sm border-amber-200'></div>
          <div className='w-8 h-4 flex-initial bg-amber-300 rounded-sm border-amber-300'></div>
          <div className='w-12 h-4 flex-initial bg-amber-400 rounded-sm border-amber-400'></div>
        </div>
      ),
    },
    {
      name: 'Bounce-3',
      element: <PlaceholderFrame label="ここに学習コンテンツを追加" />,
    },
    {
      name: 'Bounce-4',
      element: <PlaceholderFrame label="ここに学習コンテンツを追加" />,
    },
  ]
}
