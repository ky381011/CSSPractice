interface NavButtonProps {
  direction: 'left' | 'right'
  onClick: () => void
}

export function NavButton({ direction, onClick }: NavButtonProps) {
  const isLeft = direction === 'left'

  return (
    <button
      onClick={onClick}
      className={`absolute ${isLeft ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 flex items-center justify-center h-10 w-10 rounded-full bg-white/80 shadow-md hover:bg-white hover:shadow-lg transition-all text-slate-500 hover:text-sky-600`}
      aria-label={isLeft ? 'Previous set' : 'Next set'}
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        {isLeft
          ? <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          : <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        }
      </svg>
    </button>
  )
}
