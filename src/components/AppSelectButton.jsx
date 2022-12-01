import React from 'react'

export default function AppSelectButton(props) {
  return (
    <div className='app-select__button'>
      <div className='image'>
        <img src={props.image} alt='' />
      </div>
      <div className='company-name'>{props.company}</div>
      <div className='app-name'>{props.app}</div>
    </div>
  )
}
