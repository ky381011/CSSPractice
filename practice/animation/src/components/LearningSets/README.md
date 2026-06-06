# アニメーション学習の行い方

## Learning Set の複製
1. `LearningSetXX_Template.tsx` を複製してリネーム
2. 表示名を変更
```diff
- export const setName = 'Template'
+ export const setName = '表示名'
```
3. 採番した値に `export` を変更
```diff
- export function getLearningXX(): { name: string; element: React.ReactNode }[] {
+ export function getLearning05(): { name: string; element: React.ReactNode }[] {
```
4. `LearningFrame.tsx` に `import` を追加
5. `LearningFrame.tsx` の `learningSets` にコンポーネントを追加

## フレームの編集
1. 4つの要素を以下の型で編集する
```tsx
{ name: string; element: React.ReactNode }
```
