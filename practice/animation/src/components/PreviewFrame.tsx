import { useState } from 'react'
import './PreviewFrame.css'
import { getAnimation01 } from './AnimationSets/Animation01'

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
  const animations = getAnimation01()

  return (
    <>
      <div className="w-full h-full grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 overflow-hidden">
        {animations.map((anim) => (
          <div key={anim.name} className="widget">
            {anim.element}
            <CopyLabel name={anim.name} />
          </div>
        ))}
      </div>
    </>
  )
}
