import './App.css'

function App() {
  return (
    <>
      <div className='min-h-screen font-poppins bg-body text-white'>
        {/* ナビゲーションバー */}
        {/* ヘッダー部分 */}
        <div className='py-6 relative z-10'> 
          <div className='container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full'>
            <div className='text-lg font-bold'>SAMPLE.com</div>
            <div className='space-x-12 hidden md:flex items-center'>
              <a
                href="#home"
                className='hover:text-selected-text transition-all duration-300'
              >ホーム</a>
              <a
                href="#portfolio"
                className='hover:text-selected-text transition-all duration-300'
              >ポートフォリオ</a>
              <a
                href="#skills"
                className='hover:text-selected-text transition-all duration-300'
              >スキル一覧</a>
              <a
                href="#contact"
                className='hover:text-selected-text transition-all duration-300'
              ><button className='px-6 py-2 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300'>お問い合わせ</button></a>
            </div>
            <div className='md:hidden'>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
        {/* ヒーローセクション */}
        <div id="home" className='container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
          <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-start max-w-xl'>
            <div className='md:my-36 lg:ml-20 relative z-10 md:justify-center flex flex-wrap'>
              <h1 className='font-bold text-5xl text-center md:text-left lg:text-7xl md:text-6xl'>
                TailwindCSSで <br />
                美しいサイトを <br />
                作ります
              </h1>
              <button className='px-6 py-4 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300 mt-10'>
                <span><i className="fa-solid fa-rocket mr-1"></i>もっと見る</span>
              </button>
            </div>
            <img src="/images/human.jpg" alt="image" className='md:absolute lg:top-2 lg:right-52 md:w-2/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto z-0'></img>
          </div>
        </div>
        {/* ポートフォリオセクション */}
        <div id="portfolio" className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full z-10'>
          <section className='w-full'>
            <h2 className='secondary-title'>
              私のポートフォリオ
            </h2>
            <p className='section-paragraph'>
              私が作ってきたWebアプリケーションがこちら
            </p>
            <div className='grid lg:grid-color-4 md:grid-cols-2 grid-cols-1 gap-6'>
              <img src='./images/portfolio1.jpg' alt='' className='w-full h-36 lg:h-72 object-cover rounded-md'></img>
              <img src='./images/portfolio2.jpg' alt='' className='w-full h-36 lg:h-72 object-cover rounded-md'></img>
              <img src='./images/portfolio3.jpg' alt='' className='w-full h-36 lg:h-72 object-cover rounded-md'></img>
              <img src='./images/portfolio4.jpg' alt='' className='w-full h-36 lg:h-72 object-cover rounded-md'></img>
              <img src='./images/portfolio5.jpg' alt='' className='w-full h-36 lg:h-72 object-cover rounded-md'></img>
              <img src='./images/portfolio6.jpg' alt='' className='w-full h-36 lg:h-72 object-cover rounded-md'></img>
            </div>
          </section>
        </div>
        {/* スキルスタック */}
        <div id="portfolio" className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full z-10'>
          <section className='w-full'>
            <h2 className='secondary-title'>
              スキルスタック
            </h2>
            <p className='section-paragraph'>
              私は以下のプログラミングをx年以上取り扱ってきました。
            </p>
            <div className='my-16'>
              <div className='w-full border border-purple-300'>
                {/* 言語のロゴ */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
