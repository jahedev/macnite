import { useState } from 'react'
import reactLogo from './assets/images/react.svg'
import { brewCask } from './lib/code_out'
import AppsSelector from './components/AppsSelector'

function App() {
  const [count, setCount] = useState(0)

  // console.log(brewCask(['google-chrome', 'brave-browser']))

  const webBrowsers = [
    {
      app: 'Brave',
      company: 'Brave Software Inc.',
      image: 'https://via.placeholder.com/128x128?text=Brave',
    },
    {
      app: 'Chrome',
      company: 'Google',
      image: 'https://via.placeholder.com/128x128?text=Chrome',
    },
    {
      app: 'Firefox',
      company: 'Mozilla',
      image: 'https://via.placeholder.com/128x128?text=Firefox',
    },
  ]

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
        <div className='main-content'>
          <div className='website-info'>
            <h1>Get Mac apps automatically!</h1>
            <p>
              The best alternative to Ninite for Mac Just choose what apps to
              install and get apps automatically installed, quietly, fast and
              easy. Use it to setup your new computer, deploy Mac apps in your
              company or to install apps while enjoying coffee.
            </p>
          </div>
          <div className='all-app-selectors'>
            <AppsSelector title='Web Browsers' itemsList={webBrowsers} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
