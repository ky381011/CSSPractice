import './PreviewFrame.css'
import { getLearning01 } from './LearningSets/LearningSet01_Spin'
import { getLearning02 } from './LearningSets/LearningSet02_Ping'
import { getLearning03 } from './LearningSets/LearningSet03_Pulse'
import { getLearning04 } from './LearningSets/LearningSet04_Flex'
import { getLearning05 } from './LearningSets/LearningSet05_Grid'
import { getLearningXX } from './LearningSets/LearningSetXX_Template'

const learningSets = [getLearning01, getLearning02, getLearning03, getLearning04, getLearning05, getLearningXX]

interface LearningFrameProps {
  setIndex: number
}

export function LearningFrame({ setIndex }: LearningFrameProps) {
  const items = learningSets[setIndex]()

  return (
    <div className="preview-wrapper">
      <div className="preview-grid">
        {items.map((item) => (
          <div key={item.name} className="widget">
            <div 
              className="widget-content"
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
