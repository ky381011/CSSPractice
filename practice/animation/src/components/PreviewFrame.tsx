import './PreviewFrame.css'
import { getAnimation01 } from './AnimationSets/Animation01'
import { getAnimation02 } from './AnimationSets/Animation02'
import { CopyLabel } from './CopyLabel'

const animationSets = [getAnimation01, getAnimation02]

interface PreviewFrameProps {
  setIndex: number
}

export function PreviewFrame({ setIndex }: PreviewFrameProps){
  const animations = animationSets[setIndex]()

  return (
    <div className="preview-wrapper">
      <div className="preview-grid">
        {animations.map((anim) => (
          <div key={anim.name} className="widget">
            <div className="widget-content">
              {anim.element}
              <CopyLabel name={anim.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
