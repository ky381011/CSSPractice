import { useState } from 'react'
import './App.css'
import { PreviewFrame } from './components/PreviewFrame'
import { LearningFrame } from './components/LearningFrame'
import { NavButton } from './components/NavButton'
import { SetIndicator } from './components/SetIndicator'
import { Sidebar } from './components/Sidebar'

const ANIMATION_SET_NAMES = ['Basic', 'Transform', 'Rotate', 'Scale & Skew', 'Perspective']
const LEARNING_SET_NAMES = ['Template']

type Mode = 'animation' | 'learning'

function App() {
  const [mode, setMode] = useState<Mode>('animation')
  const [animSetIndex, setAnimSetIndex] = useState(0)
  const [learnSetIndex, setLearnSetIndex] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const setNames = mode === 'animation' ? ANIMATION_SET_NAMES : LEARNING_SET_NAMES
  const setIndex = mode === 'animation' ? animSetIndex : learnSetIndex
  const setSetIndex = mode === 'animation' ? setAnimSetIndex : setLearnSetIndex
  const totalSets = setNames.length

  return (
    <>
      <div className={`flex w-screen h-screen transition-colors duration-300 ${mode === 'learning' ? 'bg-red-100' : 'bg-sky-100'}`}>
        <Sidebar
          sets={setNames}
          current={setIndex}
          onSelect={setSetIndex}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen((prev) => !prev)}
          mode={mode}
          onModeChange={setMode}
        />

        <div className="relative flex-1">
          {/* ボタン・インジケーターと間隔を確保するインセット */}
          <div className="absolute inset-0 px-16 pt-4 pb-12">
            {mode === 'animation' ? (
              <PreviewFrame setIndex={animSetIndex} />
            ) : (
              <LearningFrame setIndex={learnSetIndex} />
            )}
          </div>

          <NavButton
            direction="left"
            onClick={() => setSetIndex((prev) => (prev - 1 + totalSets) % totalSets)}
            mode={mode}
          />
          <NavButton
            direction="right"
            onClick={() => setSetIndex((prev) => (prev + 1) % totalSets)}
            mode={mode}
          />
          <SetIndicator
            total={totalSets}
            current={setIndex}
            onSelect={setSetIndex}
            mode={mode}
          />
        </div>
      </div>
    </>
  )
}

export default App
