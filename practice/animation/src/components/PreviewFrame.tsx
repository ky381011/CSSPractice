import './PreviewFrame.css'
import { getAnimation01 } from './AnimationSets/AnimationSet01_Basic'
import { getAnimation02 } from './AnimationSets/AnimationSet02_Shape'
import { getAnimation03 } from './AnimationSets/AnimationSet03_Compound'
import { getAnimation04 } from './AnimationSets/AnimationSet04_UI'
import { getAnimation05 } from './AnimationSets/AnimationSet05_Effect'
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
