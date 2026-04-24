import './PreviewFrame.css'

export function PreviewFrame(){
  return (
    <>
      <div className="w-full h-full grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 overflow-hidden">
        {/* animate-spin */}
        <div className="widget flex flex-col items-center justify-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-sky-300 border-t-sky-600" />
          <span className="text-sm font-mono text-slate-500">animate-spin</span>
        </div>

        {/* animate-ping */}
        <div className="widget flex flex-col items-center justify-center gap-4">
          <div className="relative flex h-12 w-12 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-6 w-6 bg-sky-500" />
          </div>
          <span className="text-sm font-mono text-slate-500">animate-ping</span>
        </div>

        {/* animate-pulse */}
        <div className="widget flex flex-col items-center justify-center gap-4">
          <div className="animate-pulse flex space-x-2">
            <div className="rounded-full bg-slate-300 h-10 w-10" />
            <div className="flex flex-col justify-center space-y-2">
              <div className="h-3 w-24 rounded bg-slate-300" />
              <div className="h-3 w-16 rounded bg-slate-300" />
            </div>
          </div>
          <span className="text-sm font-mono text-slate-500">animate-pulse</span>
        </div>

        {/* animate-bounce */}
        <div className="widget flex flex-col items-center justify-center gap-4">
          <div className="animate-bounce h-12 w-12 rounded-full bg-sky-500 flex items-center justify-center">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <span className="text-sm font-mono text-slate-500">animate-bounce</span>
        </div>
      </div>
    </>
  )
}
