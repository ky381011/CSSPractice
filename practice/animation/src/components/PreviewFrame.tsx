import './PreviewFrame.css'
import { getAnimation01 } from './AnimationSets/Animation01'
import { getAnimation02 } from './AnimationSets/Animation02'
import { getAnimation03 } from './AnimationSets/Animation03'
import { getAnimation04 } from './AnimationSets/Animation04'
import { getAnimation05 } from './AnimationSets/Animation05'
import { CopyLabel } from './CopyLabel'

const animationSets = [getAnimation01, getAnimation02, getAnimation03, getAnimation04, getAnimation05]

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
