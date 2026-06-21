import React from 'react'

export const setName = 'Grid'

export function getLearning05(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'Grid',
      element: (
        <div className='flex flex-row flex- w-40 h-16 bg-pink-100 rounded-sm'>
          <div className='w-8 h-8 m-1 bg-amber-200 rounded-sm border-amber-200'></div>
          <div className='w-8 h-8 m-1 bg-amber-300 rounded-sm border-amber-300'></div>
          <div className='w-8 h-8 m-1 bg-amber-400 rounded-sm border-amber-400'></div>
          <div className='w-8 h-8 m-1 bg-amber-500 rounded-sm border-amber-500'></div>
        </div>
      ),
    },
    {
      name: 'Grid',
      element: (
        <div className='flex flex-row md:w-24 w-16'>
          <div className='w-4 h-4 flex-initial bg-amber-200 rounded-sm border-amber-200'></div>
          <div className='w-8 h-4 flex-initial bg-amber-300 rounded-sm border-amber-300'></div>
          <div className='w-12 h-4 flex-initial bg-amber-400 rounded-sm border-amber-400'></div>
        </div>
      ),
    },
    {
      name: 'Grid',
      element: (
        <div className='flex flex-col'>
          <div className='w-4 h-4 bg-amber-200 rounded-sm border-amber-200'></div>
          <div className='w-4 h-4 bg-amber-300 rounded-sm border-amber-300'></div>
          <div className='w-4 h-4 bg-amber-400 rounded-sm border-amber-400'></div>
          <div className='w-4 h-4 bg-amber-500 rounded-sm border-amber-500'></div>
        </div>
      ),
    },
    {
      name: 'Grid',
      element: (
        <div className='flex flex-wrap w-20 h-20 bg-pink-100 rounded-sm'>
          <div className='w-8 h-8 m-1 bg-amber-200 rounded-sm border-amber-200'></div>
          <div className='w-8 h-8 m-1 bg-amber-300 rounded-sm border-amber-300'></div>
          <div className='w-8 h-8 m-1 bg-amber-400 rounded-sm border-amber-400'></div>
          <div className='w-8 h-8 m-1 bg-amber-500 rounded-sm border-amber-500'></div>
        </div>
      ),
    },
  ]
}
