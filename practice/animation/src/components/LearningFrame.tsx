import './PreviewFrame.css'
import { useState, useRef } from 'react'
import { getLearning01 } from './LearningSets/LearningSet01_Spin'
import { getLearning02 } from './LearningSets/LearningSet02_Ping'
import { getLearning03 } from './LearningSets/LearningSet03_Pulse'
import { getLearning04 } from './LearningSets/LearningSet04_Flex'
import { getLearning05 } from './LearningSets/LearningSet05_Flex'
import { getLearningXX } from './LearningSets/LearningSetXX_Template'

const learningSets = [getLearning01, getLearning02, getLearning03, getLearning04, getLearning05, getLearningXX]

interface LearningFrameProps {
  setIndex: number
}

export function LearningFrame({ setIndex }: LearningFrameProps) {
  const items = learningSets[setIndex]()
  const [widths, setWidths] = useState<{ [key: string]: number }>({})
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const handleMouseDown = (name: string, e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const startX = e.clientX
    const widget = contentRefs.current[name]
    if (!widget) return

    const startWidth = widget.offsetWidth

    const handleMouseMove = (e: MouseEvent) => {
      const diff = e.clientX - startX
      const newWidth = Math.max(80, startWidth + diff)
      widget.style.width = `${newWidth}px`
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <div className="preview-wrapper">
      <div className="preview-grid">
        {items.map((item) => (
          <div key={item.name} className="widget">
            <div 
              className="widget-content"
              ref={(el) => { if (el) contentRefs.current[item.name] = el }}
              onMouseDown={(e) => handleMouseDown(item.name, e)}
            >
              {item.element}
              <span className="text-sm font-mono text-slate-500">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
