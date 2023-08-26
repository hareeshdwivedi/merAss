import React from 'react'

import '../Assests/CSS/footer.css';

import AppStore from '../Assests/Images/app-store.svg';
import PlayStore from '../Assests/Images/play-store.svg';
import Arrow from '../Assests/Images/arrow.svg';
import Chat from '../Assests/Images/chat.svg';
import Twitter from '../Assests/Images/twitter.svg';
import Instagram from '../Assests/Images/instagram.svg'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='left-section'>
            <button>
                <img src={AppStore} alt="" />
                <p>app store</p>
            </button>
            <button>
                <img src={PlayStore} alt="" />
                <p>play store</p>
            </button>
        </div>
        <div className='right-section'>
            <img src={Arrow} alt="" />
            <p>Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
            <div className='logos'>
                <img src={Chat} alt="" />
                <img src={Twitter} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer