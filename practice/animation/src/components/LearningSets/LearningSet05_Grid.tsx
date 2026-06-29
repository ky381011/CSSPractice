import React from 'react'

export const setName = 'Grid'

/**
 * MiniSquare - 小さい正方形コンポーネント
 * 
 * グリッドやフレックスボックスのデモ用の小さな装飾要素
 * 幅・高さ：2x2 (w-2 h-2)
 * 背景色：白 (bg-white)
 * 枠線：白 (border-white)
 * 丸み：下部に丸み (rounded-b-xs)
 * 
 * @returns {JSX.Element} 小さい白い正方形
 */
const MiniSquare = () => {
  return (
    <div className='w-2 h-2 bg-white border-white rounded-b-xs'></div>
  )
}

/**
 * MiniSquareGroup - 複数のMiniSquareを配置するコンポーネント
 * 
 * 指定した個数のMiniSquareを、指定したレイアウトで横並べ（またはカスタム配置）で返す。
 * デフォルトではフレックスボックスの行方向（横並べ）で、要素間に1単位のギャップを設定。
 * 
 * @param {number} count - 表示するMiniSquareの個数（必須）
 * @param {string} [className='flex flex-row gap-1'] - カスタムCSSクラス（Tailwind CSS）
 *   
 *   デフォルト値の詳細：
 *   - `flex` - フレックスボックスを有効化。子要素を柔軟にレイアウト
 *   - `flex-row` - 行方向（水平・左から右）に配置。フレックスボックスのデフォルト方向
 *   - `gap-1` - 要素間のギャップを 0.25rem に設定
 *   
 *   カスタマイズ例：
 *   - 縦並べ: `'flex flex-col gap-2'` (gap-2は0.5rem)
 *   - グリッド2列: `'grid grid-cols-2 gap-1'`
 *   - グリッド3列: `'grid grid-cols-3 gap-1'`
 *   - グリッドレスポンシブ: `'grid grid-cols-2 md:grid-cols-4 gap-1'`
 * 
 * @returns {JSX.Element} MiniSquareを配置したコンテナ
 */
const MiniSquareGroup = ({ count, className = 'flex flex-row gap-1' }: { count: number; className?: string }) => {
  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, i) => (
        <MiniSquare key={i} />
      ))}
    </div>
  )
}

export function getLearning05(): { name: string; element: React.ReactNode }[] {
  return [
    {
      name: 'Grid',
      element: (
        <div className='grid grid-cols-2 place-content-center place-items-center justify-center w-40 h-20 bg-pink-100 rounded-sm'>
          <div className='w-16 h-8 m-1 grid grid-cols-1 place-content-center place-items-center bg-amber-200 rounded-sm border-amber-200'>
            <MiniSquareGroup count={4} />
          </div>
          <div className='w-16 h-8 m-1 grid grid-cols-1 place-content-center place-items-center bg-amber-200 rounded-sm border-amber-200'>
            <MiniSquareGroup count={4} className='flex flex-row gap-2'/>
          </div>
          <div className='w-16 h-8 m-1 bg-amber-400 rounded-sm border-amber-400'></div>
          <div className='w-16 h-8 m-1 bg-amber-500 rounded-sm border-amber-500'></div>
        </div>
      ),
    },
    {
      name: 'Grid',
      element: (
        <div className='flex flex-row md:w-24 w-16'>
          <div className='w-4 h-4 flex-initial bg-amber-200 rounded-sm border-amber-200'></div>
          <div className='w-8 h-4 flex-initial bg-amber-300 rounded-sm border-amber-300'></div>
          <div className='w-12 h-4 flex-initial bg-amber-400 rounded-sm border-amber-400'></div>
        </div>
      ),
    },
    {
      name: 'Grid',
      element: (
        <div className='flex flex-col'>
          <div className='w-4 h-4 bg-amber-200 rounded-sm border-amber-200'></div>
          <div className='w-4 h-4 bg-amber-300 rounded-sm border-amber-300'></div>
          <div className='w-4 h-4 bg-amber-400 rounded-sm border-amber-400'></div>
          <div className='w-4 h-4 bg-amber-500 rounded-sm border-amber-500'></div>
        </div>
      ),
    },
    {
      name: 'Grid',
      element: (
        <div className='flex flex-wrap w-20 h-20 bg-pink-100 rounded-sm'>
          <div className='w-8 h-8 m-1 bg-amber-200 rounded-sm border-amber-200'></div>
          <div className='w-8 h-8 m-1 bg-amber-300 rounded-sm border-amber-300'></div>
          <div className='w-8 h-8 m-1 bg-amber-400 rounded-sm border-amber-400'></div>
          <div className='w-8 h-8 m-1 bg-amber-500 rounded-sm border-amber-500'></div>
        </div>
      ),
    },
  ]
}
