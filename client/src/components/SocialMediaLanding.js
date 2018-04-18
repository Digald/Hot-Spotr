import React from 'react';
import facebook from '../styles/images/facebook-white.svg';
import instagram from '../styles/images/instagram-white.svg';
import google from '../styles/images/google-white.svg';
import twitter from '../styles/images/twitter-white.svg';

const SocialMediaSidebar = props => (
    <div className={props.socialClass}>
        <a href='https://www.facebook.com' target='_blank' rel="noopener noreferrer">
            <img src={facebook} className='social-icon' alt='facebook' />
        </a>
        <a href='https://www.twitter.com' target='_blank' rel="noopener noreferrer">
            <img src={twitter} className='social-icon' alt='twitter' />
        </a>
        <a href='https://www.instagram.com' target='_blank' rel="noopener noreferrer">
            <img src={instagram} className='social-icon' alt='instagram' />
        </a>
        <a href='https://plus.google.com/' target='_blank' rel="noopener noreferrer">
            <img src={google} className='social-icon' alt='google' />
        </a>
    </div>
)

export default SocialMediaSidebar;
