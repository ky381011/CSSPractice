import './PreviewFrame.css'
import { useState, useRef, useEffect } from 'react'
import { getAnimation01 } from './AnimationSets/AnimationSet01_Basic'
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
  const [widths, setWidths] = useState<{ [key: string]: number }>({})
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const handleMouseDown = (name: string, e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const startX = e.clientX
    const widget = contentRefs.current[name]
    if (!widget) return

    const previewWrapper = widget.closest('.preview-wrapper') as HTMLDivElement
    if (!previewWrapper) return

    const maxWidth = previewWrapper.offsetWidth / 2
    const startWidth = widget.offsetWidth

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    const handleMouseMove = (e: MouseEvent) => {
      // マウスがpreview-wrapper内にあるかチェック
      const rect = previewWrapper.getBoundingClientRect()
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
        handleMouseUp()
        return
      }

      const diff = e.clientX - startX
      const newWidth = Math.max(0, Math.min(maxWidth, startWidth + diff))
      const scale = maxWidth > 0 ? newWidth / startWidth : 0
      widget.style.width = `${newWidth}px`
      widget.style.transform = `scaleX(${scale})`
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <div className="preview-wrapper">
      <div className="preview-grid">
        {animations.map((anim) => (
          <div key={anim.name} className="widget">
            <div 
              className="widget-content" 
              ref={(el) => { if (el) contentRefs.current[anim.name] = el }}
              onMouseDown={(e) => handleMouseDown(anim.name, e)}
            >
              {anim.element}
              <CopyLabel name={anim.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
