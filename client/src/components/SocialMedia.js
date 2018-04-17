import React from 'react';
import facebook from '../styles/images/facebook.svg';
import instagram from '../styles/images/instagram.svg';
import google from '../styles/images/google.svg';
import twitter from '../styles/images/twitter.svg';

const SocialMedia = props => (
    <div className={props.socialClass}>
        <a href='https://www.facebook.com' target='_blank' rel="noopener noreferrer">
            <img src={facebook} className={`social-icon ${props.unique}`} alt='facebook' />
        </a>
        <a href='https://www.twitter.com' target='_blank' rel="noopener noreferrer">
            <img src={twitter} className={`social-icon ${props.unique}`} alt='twitter' />
        </a>
        <a href='https://www.instagram.com' target='_blank' rel="noopener noreferrer">
            <img src={instagram} className={`social-icon ${props.unique}`} alt='instagram' />
        </a>
        <a href='https://plus.google.com/' target='_blank' rel="noopener noreferrer">
            <img src={google} className={`social-icon ${props.unique}`} alt='google' />
        </a>
    </div>
)

export default SocialMedia;
