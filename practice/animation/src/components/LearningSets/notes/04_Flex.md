# Flex

Flexboxは、CSSで1次元のレイアウトを効率的に作成するための強力なモデルです。コンテナ内の要素を柔軟に配置・整列・配分できます。

## 基本的な Flex

`display: flex` と `flex-row` を使用することで、子要素を水平方向に配置します。これが基本的なFlexboxの使用方法です。

```css
.flex {
  display: flex;
  flex-direction: row;
}
```

## Flex-initial

`flex-initial` を使用すると、各要素は独立したサイズを保ちます。要素は自身のコンテンツサイズに基づいて表示され、利用可能なスペースに対して伸縮しません。

```css
.flex-initial {
  flex: 0 1 auto;  /* flex-initial の短縮形 */
}
```

## Flex Column

`flex-column` を使用することで、子要素を垂直方向（上から下）に配置します。

```css
.flex-column {
  display: flex;
  flex-direction: column;
}
```

## Flex Wrap

`flex-wrap` を使用すると、コンテナの幅を超える要素は次の行に折り返されます。複数行のレイアウトを実現できます。

```css
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
}
```

## まとめ

Flexboxは以下の場面で特に有用です：
- ナビゲーションバー
- グリッドレイアウト
- カード型レイアウト
- レスポンシブデザイン
