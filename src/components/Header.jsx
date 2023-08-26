import React from 'react'

import '../Assests/CSS/header.css'

import Money from '../Assests/Images/money.svg'
import Eye from '../Assests/Images/eye.svg'

const Header = () => {
  return (
    <div className='header'>
        <img src={Money} alt="money-logo" />
        <div className='menu-list'>
            <p>sign in</p>
            <p>legal</p>
            <p>licenses</p>
            <p>security</p>
            <p>careers</p>
            <p>press</p>
            <p>support</p>
            <p>status</p>
            <p>codeblog</p>
        </div>
        <img src={Eye} alt="eye-logo" />
    </div>
  )
}

export default Header