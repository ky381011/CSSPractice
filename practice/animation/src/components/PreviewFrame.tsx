import { useState } from 'react'
import './PreviewFrame.css'

function CopyLabel({ name }: { name: string }) {
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(name)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      onClick={handleClick}
      className="text-sm font-mono text-slate-500 hover:text-sky-500 cursor-pointer transition-colors flex items-center gap-1"
    >
      {copied ? (
        <>
          <svg className="h-3.5 w-3.5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-green-500">copied!</span>
        </>
      ) : (
        <>
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path strokeLinecap="round" d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
          {name}
        </>
      )}
    </button>
  )
}

export function PreviewFrame(){
  return (
    <>
      <div className="w-full h-full grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 overflow-hidden">
        {/* animate-spin */}
        <div className="widget">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-sky-300 border-t-sky-600" />
          <CopyLabel name="animate-spin" />
        </div>

        {/* animate-ping */}
        <div className="widget">
          <div className="relative flex h-12 w-12 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-6 w-6 bg-sky-500" />
          </div>
          <CopyLabel name="animate-ping" />
        </div>

        {/* animate-pulse */}
        <div className="widget">
          <div className="animate-pulse flex space-x-2">
            <div className="rounded-full bg-slate-300 h-10 w-10" />
            <div className="flex flex-col justify-center space-y-2">
              <div className="h-3 w-24 rounded bg-slate-300" />
              <div className="h-3 w-16 rounded bg-slate-300" />
            </div>
          </div>
          <CopyLabel name="animate-pulse" />
        </div>

        {/* animate-bounce */}
        <div className="widget">
          <div className="animate-bounce h-12 w-12 rounded-full bg-sky-500 flex items-center justify-center">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <CopyLabel name="animate-bounce" />
        </div>
      </div>
    </>
  )
}
