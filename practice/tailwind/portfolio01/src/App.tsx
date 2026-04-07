import './App.css'

function App() {
  return (
    <>
      <div className='min-h-screen font-poppins bg-body text-white'>
        {/* ナビゲーションバー */}
        {/* ヘッダー部分 */}
        <div className='py-6'> 
          <div className='container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full'>
            <div className='text-lg font-bold'>SAMPLE.com</div>
            <div className='space-x-12'>
              <a href="#home" className='hover:text-selected-text transition-all duration-300'>ホーム</a>
              <a href="#portfolio" className='hover:text-selected-text transition-all duration-300'>ポートフォリオ</a>
              <a href="#clients" className='hover:text-selected-text transition-all duration-300'>お客様</a>
              <a href="#contact" className='hover:text-selected-text transition-all duration-300'><button>お問い合わせ</button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
