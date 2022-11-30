import { useState } from 'react'
import reactLogo from './assets/images/react.svg'
import { brewCask } from './lib/code_out'

function App() {
  const [count, setCount] = useState(0)

  // console.log(brewCask(['google-chrome', 'brave-browser']))

  return (
    <div className='App'>
      <nav className='nav'>
        <div className='nav-left'>
          <div className='nav-left__sitename'>
            <span>macnite</span>
          </div>
        </div>
        <div className='nav-right'>
          <ul className='nav-right__items'>
            <li className='item'>
              <a href='#/deslect' className='btn'>
                Deselect All
              </a>
            </li>
            <li className='item'>
              <a href='#/download' className='btn download'>
                Download
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <h1>hello world</h1>
      </main>
    </div>
  )
}

export default App
