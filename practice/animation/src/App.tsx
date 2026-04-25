import { useState } from 'react'
import './App.css'
import { PreviewFrame } from './components/PreviewFrame'
import { NavButton } from './components/NavButton'
import { SetIndicator } from './components/SetIndicator'

const TOTAL_SETS = 2

function App() {
  const [setIndex, setSetIndex] = useState(0)

  return (
    <>
      <div className="relative w-screen h-screen bg-sky-100">
        {/* ボタン・インジケーターと間隔を確保するインセット */}
        <div className="absolute inset-0 px-16 pt-4 pb-12">
          <PreviewFrame setIndex={setIndex} />
        </div>

        <NavButton
          direction="left"
          onClick={() => setSetIndex((prev) => (prev - 1 + TOTAL_SETS) % TOTAL_SETS)}
        />
        <NavButton
          direction="right"
          onClick={() => setSetIndex((prev) => (prev + 1) % TOTAL_SETS)}
        />
        <SetIndicator
          total={TOTAL_SETS}
          current={setIndex}
          onSelect={setSetIndex}
        />
      </div>
    </>
  )
}

export default App
