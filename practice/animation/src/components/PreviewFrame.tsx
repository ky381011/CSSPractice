import './PreviewFrame.css'
import { getAnimation01 } from './AnimationSets/AnimationSet01_Animation'
import { getAnimation02 } from './AnimationSets/AnimationSet02_Transform'
import { getAnimation03 } from './AnimationSets/AnimationSet03_Rotate'
import { getAnimation04 } from './AnimationSets/AnimationSet04_Scale_Skew'
import { getAnimation05 } from './AnimationSets/AnimationSet05_Perspective'
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
