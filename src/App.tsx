
import './App.css'
import qr from '../../images/image-qr-code.png'
function App() {

  return (
    <>
      <div className='bg-[hsl(212,45%,89%)] h-screen flex items-center justify-center'>
        <div className='bg-white w-[320px] h-[497px] p-3 rounded-lg flex flex-col items-center'>
          <img src={qr} className=' rounded-lg' />
          <div className=' text-center mt-3'>
            <h1 className='text-black text-2xl font-bold text-wrap'>Improve your front-end skills by building projects</h1>
            <p className='text-gray-500'>Scan the QR code to visit Frontend mentor and take your coding skills to the next level</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
