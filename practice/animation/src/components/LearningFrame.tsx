import './PreviewFrame.css'
import { getLearningXX } from './LearningSets/LearningSetXX_Template'

const learningSets = [getLearningXX]

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
            <div className="widget-content">
              {item.element}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
