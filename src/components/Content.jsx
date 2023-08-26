import React from 'react'

import Cube from '../Assests/Images/cube.svg';
import Cubes from '../Assests/Images/cubes.svg';
import Stairs from '../Assests/Images/stairs.svg';
import Pillar from '../Assests/Images/pillars.svg';
import Phone from '../Assests/Images/phone.svg'

import '../Assests/CSS/content.css'

const Content = () => {
  return (
    <div className='content'>
        <img className='cube' src={Cube} alt="cube"/>
        <img className='cubes' src={Cubes} alt="cubes"/>
        <img className='stairs' src={Stairs} alt="stairs"/>
        <img className='pillar' src={Pillar} alt="pillar"/>
        <div className='content-inner'>
            <h1 className='cash'>CASH</h1>
            <img className='phone' src={Phone} alt="" />
            <h1 className='app'>APP</h1>
        </div>
    </div>
  )
}

export default Content