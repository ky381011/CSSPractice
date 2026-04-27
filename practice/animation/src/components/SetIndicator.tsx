interface SetIndicatorProps {
  total: number
  current: number
  onSelect: (index: number) => void
  mode?: 'animation' | 'learning'
}

export function SetIndicator({ total, current, onSelect, mode = 'animation' }: SetIndicatorProps) {
  const activeColor = mode === 'learning' ? 'bg-red-400' : 'bg-sky-500'
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`h-2 rounded-full transition-all ${
            i === current ? `${activeColor} w-4` : 'bg-slate-300 hover:bg-slate-400 w-2'
          }`}
          aria-label={`Set ${i + 1}`}
        />
      ))}
    </div>
  )
}
