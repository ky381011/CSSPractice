interface SidebarProps {
  sets: string[]
  current: number
  onSelect: (index: number) => void
  isOpen: boolean
  onToggle: () => void
}

export function Sidebar({ sets, current, onSelect, isOpen, onToggle }: SidebarProps) {
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

      {/* サイドバーコンテンツ（開いているときのみ表示） */}
      <div className={`flex flex-col flex-1 transition-opacity duration-200 ${
        isOpen ? 'opacity-100 delay-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="px-5 pt-5 pb-4 pr-12 border-b border-slate-100">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Animation
          </span>
          <h1 className="text-lg font-bold text-slate-700 mt-0.5">CSS Practice</h1>
        </div>

        <nav className="flex-1 overflow-y-auto py-3">
          <p className="px-4 mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Sets
          </p>
          <ul>
            {sets.map((name, i) => (
              <li key={i}>
                <button
                  onClick={() => onSelect(i)}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                    i === current
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
      </div>
    </aside>
  )
}
