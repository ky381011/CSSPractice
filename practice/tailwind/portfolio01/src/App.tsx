import './App.css'

function App() {
  return (
    <>
      <div className='min-h-screen font-poppins bg-body text-white'>
        {/* ナビゲーションバー */}
        {/* ヘッダー部分 */}
        <div className='py-6'> 
          <div>
            <div>SAMPLE.com</div>
            <div>
              <a href="#home">ホーム</a>
              <a href="#home">ポートフォリオ</a>
              <a href="#home">お客様</a>
              <a href="#home"><button>お問い合わせ</button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
