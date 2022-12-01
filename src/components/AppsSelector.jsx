import React from 'react'
import AppSelectButton from './AppSelectButton'

export default function AppsSelector({ title, itemsList }) {
  return (
    <div className='apps-selector'>
      <div className='apps-selector__header'>
        <div className='title'>
          <h2>Web Browsers</h2>
        </div>
        <div className='total-apps-selected'>0/10</div>
      </div>
      {itemsList.map((item, i) => {
        return (
          <AppSelectButton
            key={title + i}
            app={item.app}
            company={item.company}
            image={item.image}
          />
        )
      })}
    </div>
  )
}
