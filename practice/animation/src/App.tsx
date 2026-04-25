import { useState } from 'react'
import './App.css'
import { PreviewFrame } from './components/PreviewFrame'

const TOTAL_SETS = 2

function App() {
  const [setIndex, setSetIndex] = useState(0)

  return (
    <>
      <div className="relative w-screen h-screen bg-sky-100">
        <PreviewFrame setIndex={setIndex} />

        {/* 左ボタン */}
        <button
          onClick={() => setSetIndex((prev) => (prev - 1 + TOTAL_SETS) % TOTAL_SETS)}
          className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center h-10 w-10 rounded-full bg-white/80 shadow-md hover:bg-white hover:shadow-lg transition-all text-slate-500 hover:text-sky-600"
          aria-label="Previous set"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* 右ボタン */}
        <button
          onClick={() => setSetIndex((prev) => (prev + 1) % TOTAL_SETS)}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center h-10 w-10 rounded-full bg-white/80 shadow-md hover:bg-white hover:shadow-lg transition-all text-slate-500 hover:text-sky-600"
          aria-label="Next set"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* インジケーター */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: TOTAL_SETS }).map((_, i) => (
            <button
              key={i}
              onClick={() => setSetIndex(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                i === setIndex ? 'bg-sky-500 w-4' : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Set ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
