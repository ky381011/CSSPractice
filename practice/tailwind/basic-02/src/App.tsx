import './App.css'

function App() {
  return (
    <>
      <div>
        <div className='border border-blue-400 p-16 my-10 mx-10'>
          <h1 className="lg:text-7xl font-bold sm:text-red-400 md:text-blue-400 lg:text-pink-400 xl:text-green-400">TailwindCSS入門</h1>
        </div>
        <div className='border border-blue-400 p-16 my-10 mx-10'>
          <h1 className="text-7xl font-bold">TailwindCSS入門</h1>
        </div>
        <button className="easy-button">ボタン</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-10">ボタン</button> 
      </div>
    </>
  )
}

export default App