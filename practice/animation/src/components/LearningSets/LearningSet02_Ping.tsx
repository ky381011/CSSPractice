import React from 'react'

/**
 * クリックで1回だけ animate-ping を再生するコンポーネント。
 *
 * 仕組み:
 *   1. クリック → pinging を true にして animate-ping クラスを付与
 *   2. CSS アニメーションが1サイクル終わると onAnimationIteration が発火
 *   3. pinging を false に戻してクラスを外す → 次のクリックを受け付ける
 */
function ClickPing() {
  // pinging: animate-ping を適用するかどうかのフラグ
  const [pinging, setPinging] = React.useState(false)

  return (
    // cursor-pointer でクリック可能であることをユーザーに示す
    <div
      className="relative flex h-full w-full items-center justify-center cursor-pointer"
      onClick={() => setPinging(true)} // クリックでアニメーション開始
    >
      <div
        // pinging が true のときだけ animate-ping を追加
        className={`h-12 w-12 rounded-full bg-amber-400 ${pinging ? 'animate-ping' : ''}`}
        // アニメーション1ループ完了時に pinging を false へ戻す
        onAnimationIteration={() => setPinging(false)}
      ></div>
    </div>
  )
}

export const setName = 'Ping'

export function getLearning02(): { name: string; element: React.ReactNode }[] {
  return [
    {
      // 最もシンプルな animate-ping の使用例
      // 常時アニメーションが続く
      name: 'Base',
      element: (
        <div className="relative flex h-full w-full items-center justify-center">
          <div className='h-2 w-2 animate-ping rounded-full bg-amber-400'></div>
        </div>
      ),
    },
    {
      // ボタンの左上に通知バッジとして ping を配置する例
      // absolute + -top-1 -left-1 で親要素の角に重ねる
      name: 'Left Up',
      element: (
        <div className="flex h-full w-full items-center justify-center">
          <div className='relative h-8 w-32 rounded-full bg-amber-100 text-center'>
            {/* opacity-75 で周囲への主張を和らげる */}
            <span className="absolute -top-1 -left-1 inline-flex h-4 w-4 animate-ping rounded-full bg-amber-400 opacity-75"></span>
            Click Me!!
          </div>
        </div>
      ),
    },
    {
      // ホバー時のみ animate-ping を適用する例
      // hover: 修飾子で CSS 疑似クラス :hover にクラスを限定できる
      name: 'Hover',
      element: (
        <div className="relative flex h-full w-full items-center justify-center">
          <div className='h-12 w-12 rounded-full hover:animate-ping bg-amber-400'></div>
        </div>
      ),
    },
    {
      // クリック時のみ1回アニメーションを再生する例（ClickPing コンポーネント参照）
      name: 'Click',
      element: <ClickPing />,
    },
  ]
}
