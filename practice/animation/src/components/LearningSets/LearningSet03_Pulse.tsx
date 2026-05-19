import React from 'react'

export const setName = 'Pulse'

export function getLearning03(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'Base',
      element: (
        <div className="relative flex h-full w-full items-center justify-center">
          <div className='h-12 w-12 animate-pulse rounded-full bg-amber-400'></div>
        </div>
      ),
    },
    {
      // テキストへの適用: div だけでなくテキストにも animate-pulse は使える
      // 「読み込み中」の状態をラベルで伝えつつ、視覚的に動きを加える
      name: 'Text',
      element: (
        <div className="flex h-full w-full items-center justify-center">
          <p className="animate-pulse text-slate-400 text-sm">読み込み中...</p>
        </div>
      ),
    },
    {
      // ローディングUI: animate-pulse でスケルトンスクリーン風のカードローダーを表現
      // 実際のコンテンツが読み込まれる前の「仮の形」を灰色のブロックで示す
      name: 'Loading',
      element: (
        <div className="flex h-full w-full items-center justify-center">
          <div className="w-32 rounded bg-white shadow p-2 space-y-1.5">
            {/* アバター + 名前エリア */}
            <div className="flex items-center gap-1.5">
              <div className="animate-pulse h-5 w-5 rounded-full bg-slate-200" />
              <div className="flex-1 space-y-0.5">
                <div className="animate-pulse h-1.5 w-12 rounded bg-slate-200" />
                <div className="animate-pulse h-1 w-8 rounded bg-slate-200" />
              </div>
            </div>
            {/* 本文エリア */}
            <div className="space-y-1">
              <div className="animate-pulse h-1 w-full rounded bg-slate-200" />
              <div className="animate-pulse h-1 w-5/6 rounded bg-slate-200" />
              <div className="animate-pulse h-1 w-4/6 rounded bg-slate-200" />
            </div>
            {/* ボタンエリア */}
            <div className="animate-pulse h-4 w-full rounded bg-slate-200" />
          </div>
        </div>
      ),
    },
    {
      name: 'Scale Combination',
      element: <div
        className="w-12 h-12 rounded-full bg-amber-400 animate-[glow_2s_ease-in-out_infinite]"
        style={{
          animationName: "glow",
        }}
      >
        <style>
          {`
            @keyframes glow {
              0%,100% {
                opacity: 0.6;
                transform: scale(1);
              }

              50% {
                opacity: 1;
                transform: scale(1.1);
              }
            }
          `}
        </style>
      </div>
    },
  ]
}
