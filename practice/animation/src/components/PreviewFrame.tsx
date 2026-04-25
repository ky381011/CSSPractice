import './PreviewFrame.css'
import { getAnimation01 } from './AnimationSets/Animation01'
import { CopyLabel } from './CopyLabel'

export function PreviewFrame(){
  const animations = getAnimation01()

  return (
    <>
      <div className="w-full h-full grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 overflow-hidden">
        {animations.map((anim) => (
          <div key={anim.name} className="widget">
            {anim.element}
            <CopyLabel name={anim.name} />
          </div>
        ))}
      </div>
    </>
  )
}
