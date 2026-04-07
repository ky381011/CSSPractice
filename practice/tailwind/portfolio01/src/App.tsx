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
            <div className='container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full'>
              <a href="#home">ホーム</a>
              <a href="#portfolio">ポートフォリオ</a>
              <a href="#clients">お客様</a>
              <a href="#contact"><button>お問い合わせ</button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
