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
              <div className='w-full border border-purple-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-yellow-300 transition-all duration-300 cursor-pointer'>
                {/* 言語のロゴ */}
                <div className='mb-6 lg:mb-0 self-center'>
                  <i className="fa-brands fa-square-js text-9xl text-yellow-300"></i>
                </div>
                {/* スキルの説明 */}
                <div className='text-center flex flex-wrap justify-center lg:text-left lg:block'>
                  <h3 className='text-3xl font-semibold'>Javascript</h3>
                  <div className='flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8'>
                    <div className='badge'>ウェブサイト制作</div>
                    <div className='badge'>フロントエンド開発</div>
                  </div>
                  <p className='text-secondary'>Javascriptエンジニア。普段はReactを使って...</p>
                </div>
              </div>
            </div>
            <div className='my-16'>
              <div className='w-full border border-purple-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-blue-300 transition-all duration-300 cursor-pointer'>
                {/* 言語のロゴ */}
                <div className='mb-6 lg:mb-0 self-center'>
                  <i className="fa-brands fa-python text-9xl text-blue-300"></i>
                </div>
                {/* スキルの説明 */}
                <div className='text-center flex flex-wrap justify-center lg:text-left lg:block'>
                  <h3 className='text-3xl font-semibold'>Python</h3>
                  <div className='flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8'>
                    <div className='badge'>AI/DX</div>
                    <div className='badge'>データサイエンス</div>
                  </div>
                  <p className='text-secondary'>AI開発をメインに...</p>
                </div>
              </div>
            </div>
            <div className='my-16'>
              <div className='w-full border border-purple-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-orange-400 transition-all duration-300 cursor-pointer'>
                {/* 言語のロゴ */}
                <div className='mb-6 lg:mb-0 self-center'>
                  <i className="fa-brands fa-html5 text-9xl text-orange-400"></i>
                </div>
                {/* スキルの説明 */}
                <div className='text-center flex flex-wrap justify-center lg:text-left lg:block'>
                  <h3 className='text-3xl font-semibold'>HTML/CSS</h3>
                  <div className='flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8'>
                    <div className='badge'>UI/UX</div>
                    <div className='badge'>ホームページ制作</div>
                  </div>
                  <p className='text-secondary'>Webサイトの開発を...</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* お問い合わせ */}
        <div id="contact" className='container mt-52 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full z-10'>
          <section className='w-full'>
            <h2 className='secondary-title'>
              お問い合わせ
            </h2>
            <p className='section-paragraph'>
              サンプルお問い合わせフォーマットです。
            </p>
            <div className='w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-16'>
              <div className='space-y-12'>
                <div>
                  <label className='text-white block mb-6 text-xl font-bold'>お名前</label>
                  <input type="text" className='w-full border border-inputBorder bg-input px-4 py-4'></input>
                </div>
                <div>
                  <label className='text-white block mb-6 text-xl font-bold'>メールアドレス</label>
                  <input type="text" className='w-full border border-inputBorder bg-input px-4 py-4'></input>
                </div>
                <div>
                  <label className='text-white block mb-6 text-xl font-bold'>メッセージ</label>
                  <input type="text" className='w-full border border-inputBorder bg-input px-4 py-4'></input>
                </div>
                <button className='px-8 py-3 mb-20 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300'>送信する</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
