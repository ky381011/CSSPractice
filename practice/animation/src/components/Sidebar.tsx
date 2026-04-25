interface SidebarProps {
  sets: string[]
  current: number
  onSelect: (index: number) => void
}

export function Sidebar({ sets, current, onSelect }: SidebarProps) {
  return (
    <aside className="flex flex-col w-52 h-full bg-white border-r border-slate-200 shadow-sm shrink-0">
      <div className="px-5 py-5 border-b border-slate-100">
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
    </aside>
  )
}
