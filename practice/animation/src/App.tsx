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
      <div className={`flex w-screen h-screen transition-colors duration-300 ${mode === 'learning' ? 'bg-red-50' : 'bg-sky-100'}`}>
        <Sidebar
          animSets={ANIMATION_SET_NAMES}
          learnSets={LEARNING_SET_NAMES}
          animCurrent={animSetIndex}
          learnCurrent={learnSetIndex}
          onAnimSelect={setAnimSetIndex}
          onLearnSelect={setLearnSetIndex}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen((prev) => !prev)}
          mode={mode}
          onModeChange={setMode}
        />

        <div className="relative flex-1 overflow-hidden">
          {/* スライドコンテナ */}
          <div
            className="absolute inset-0 flex transition-transform duration-400 ease-in-out"
            style={{ transform: mode === 'learning' ? 'translateX(-100%)' : 'translateX(0%)' }}
          >
            {/* Animation パネル */}
            <div className="absolute inset-0 w-full px-16 pt-4 pb-12"
              style={{ left: '0%' }}>
              <PreviewFrame setIndex={animSetIndex} />
            </div>
            {/* Learning パネル */}
            <div className="absolute inset-0 w-full px-16 pt-4 pb-12"
              style={{ left: '100%' }}>
              <LearningFrame setIndex={learnSetIndex} />
            </div>
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
