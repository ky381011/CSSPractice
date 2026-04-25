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
    <>
      <div className="w-full h-full grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 overflow-hidden">
        {animations.map((anim) => (
          <div key={anim.name} className="widget">
            <div className="widget-content">
              {anim.element}
              <CopyLabel name={anim.name} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
