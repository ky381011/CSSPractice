import { useState } from 'react'
import './App.css'
import { PreviewFrame } from './components/PreviewFrame'
import { NavButton } from './components/NavButton'
import { SetIndicator } from './components/SetIndicator'
import { Sidebar } from './components/Sidebar'

const SET_NAMES = ['Basic', 'Transform', 'Rotate', 'Scale & Skew', 'Perspective']
const TOTAL_SETS = SET_NAMES.length

function App() {
  const [setIndex, setSetIndex] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <>
      <div className="flex w-screen h-screen bg-sky-100">
        <Sidebar
          sets={SET_NAMES}
          current={setIndex}
          onSelect={setSetIndex}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen((prev) => !prev)}
        />

        <div className="relative flex-1">
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
      </div>
    </>
  )
}

export default App
