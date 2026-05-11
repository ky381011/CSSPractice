import React from 'react'

const PlaceholderFrame = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center justify-center flex-1 min-h-0 w-full rounded-lg border-2 border-dashed border-slate-300 gap-2">
    <svg className="h-6 w-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
    </svg>
    <span className="text-xs text-slate-400">{label}</span>
  </div>
)

export function getLearning01(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'Base',
      element: (
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-300 border-t-amber-600" />
      ),
    },
    {
      name: 'Half Speed',
      element: (
        <div className="animate-spin [animation-duration:2s] rounded-full h-12 w-12 border-4 border-amber-300 border-t-amber-600" />
      ),
    },
    {
      name: 'Half and Half',
      element: (
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-300 border-t-amber-600 border-r-amber-600" />
      ),
    },
    {
      name: 'Four Color',
      element: (
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-amber-300 border-r-amber-400 border-b-amber-500 border-l-amber-600" />
      ),
    },
  ]
}
