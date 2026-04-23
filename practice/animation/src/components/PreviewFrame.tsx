import './PreviewFrame.css'

export function PreviewFrame(){
  return (
    <>
      <div className="w-full h-full grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 overflow-hidden">
        <div className="widget"></div>
        <div className="widget"></div>
        <div className="widget"></div>
        <div className="widget"></div>
      </div>
    </>
  )
}
