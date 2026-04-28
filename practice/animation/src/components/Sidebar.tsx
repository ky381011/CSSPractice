type Mode = 'animation' | 'learning'

interface SidebarProps {
  animSets: string[]
  learnSets: string[]
  animCurrent: number
  learnCurrent: number
  onAnimSelect: (index: number) => void
  onLearnSelect: (index: number) => void
  isOpen: boolean
  onToggle: () => void
  mode: Mode
  onModeChange: (mode: Mode) => void
}

export function Sidebar({ animSets, learnSets, animCurrent, learnCurrent, onAnimSelect, onLearnSelect, isOpen, onToggle, mode, onModeChange }: SidebarProps) {
  return (
    <aside
      className={`relative flex flex-col h-full bg-white border-r border-slate-200 shadow-sm shrink-0 transition-[width] duration-300 overflow-hidden ${
        isOpen ? 'w-52' : 'w-12'
      }`}
    >
      {/* ハンバーガーボタン */}
      <button
        onClick={onToggle}
        className="absolute top-4 right-2 z-10 flex flex-col justify-center items-center w-8 h-8 gap-1.5 rounded hover:bg-slate-100 transition-colors shrink-0"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <span className={`block h-0.5 bg-slate-500 transition-all duration-300 ${
          isOpen ? 'w-4 rotate-45 translate-y-2' : 'w-4'
        }`} />
        <span className={`block h-0.5 bg-slate-500 transition-all duration-300 ${
          isOpen ? 'opacity-0 w-4' : 'w-4'
        }`} />
        <span className={`block h-0.5 bg-slate-500 transition-all duration-300 ${
          isOpen ? 'w-4 -rotate-45 -translate-y-2' : 'w-4'
        }`} />
      </button>

      {/* ヘッダー（開いているときのみ表示） */}
      <div className={`shrink-0 transition-opacity duration-200 ${
        isOpen ? 'opacity-100 delay-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="px-5 pt-5 pb-4 pr-12 border-b border-slate-100">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Animation
          </span>
          <h1 className="text-lg font-bold text-slate-700 mt-0.5">CSS Practice</h1>
        </div>
      </div>

      {/* モード切替ピル */}
      <div className={`shrink-0 overflow-hidden transition-all duration-300 ${isOpen ? 'px-3 py-3 h-auto' : 'h-0 px-3 py-0'}`}>
        <div className="relative flex rounded-full bg-slate-100 p-1">
          {/* スライドする背景ピル */}
          <span
            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full shadow-sm transition-all duration-300 ease-in-out ${
              mode === 'learning' ? 'bg-red-400 left-[calc(50%+4px)]' : 'bg-sky-500 left-1'
            }`}
          />
          <button
            onClick={() => onModeChange(mode === 'animation' ? 'learning' : 'animation')}
            className={`relative z-10 flex-1 py-1.5 text-xs font-semibold rounded-full transition-colors duration-300 ${
              mode === 'animation' ? 'text-white' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            Animation
          </button>
          <button
            onClick={() => onModeChange(mode === 'learning' ? 'animation' : 'learning')}
            className={`relative z-10 flex-1 py-1.5 text-xs font-semibold rounded-full transition-colors duration-300 ${
              mode === 'learning' ? 'text-white' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            Learning
          </button>
        </div>
      </div>

      {/* navスライドコンテナ（開いているときのみ表示） */}
      <div className={`relative flex-1 overflow-hidden transition-opacity duration-200 ${
        isOpen ? 'opacity-100 delay-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div
          className="absolute inset-0 flex transition-transform duration-400 ease-in-out"
          style={{ transform: mode === 'learning' ? 'translateX(-100%)' : 'translateX(0%)' }}
        >
            {/* Animation nav */}
            <nav className="absolute inset-0 w-full overflow-y-auto py-3" style={{ left: '0%' }}>
              <p className="px-4 mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">Sets</p>
              <ul>
                {animSets.map((name, i) => (
                  <li key={i}>
                    <button
                      onClick={() => onAnimSelect(i)}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        i === animCurrent
                          ? 'bg-sky-50 text-sky-600 font-semibold border-r-2 border-sky-500'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                      }`}
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Learning nav */}
            <nav className="absolute inset-0 w-full overflow-y-auto py-3" style={{ left: '100%' }}>
              <p className="px-4 mb-1 text-xs font-semibold uppercase tracking-widest text-red-300">Sets</p>
              <ul>
                {learnSets.map((name, i) => (
                  <li key={i}>
                    <button
                      onClick={() => onLearnSelect(i)}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        i === learnCurrent
                          ? 'bg-red-50 text-red-400 font-semibold border-r-2 border-red-400'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                      }`}
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
    </aside>
  )
}
