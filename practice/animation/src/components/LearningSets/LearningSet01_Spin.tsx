import React from 'react'

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
