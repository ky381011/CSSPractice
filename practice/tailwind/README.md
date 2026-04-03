# TailwindCSSの学習

1. [Vite](#vite)

### Vite
#### 基盤作成
1. アプリを作成するディレクトリに移動
`cd practice/tailwind`
1. アプリの作成
`npm create vite@latest`
1. インターフェースに従って作成
    1. `プロジェクト名`を入力
    1. Framework : `react`を選択
    1. Variant : `javascript`を選択
    1. (実験機能は`No`)
    1. installとstart : `Yes`
1. Tailwind CSSのインストール
```bash
npm install tailwindcss @tailwindcss/vite
```
1. Viteプラグインの設定 (`vite.config.ts`)
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <=

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <=
  ],
})
```
1. Tailwind CSSのimport (`index.css`)
```css
@import "tailwindcss";
/* 既存のものはコメントアウト */
```
#### 追加設定
1. `package.json`を編集
```diff
"scripts": {
- "dev": "vite",
...
}
"scripts": {
+ "start": "vite",
...
}
```
#### 初期化
1. 各svgを削除(任意)
1. `App.css`を以下に更新
```css
@reference "./index.css";
```
1. `App.jsx`を以下に更新
```jsx
import './App.css'

function App() {
  return (
    <>
      <div></div>
    </>
  )
}

export default App
```
#### 次回以降
1. ディレクトリ移動
`cd practice/tailwind/(プロジェクト名)`
1. 起動
`npm start`
