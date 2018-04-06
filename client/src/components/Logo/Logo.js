import React from 'react';
import './Logo.css';
import moon from './images/moonlogo.png';

const Logo= (props) => (
    <img className={`logo-image ${props.unique}`} src={moon} alt="placeholder"/>
);

export default Logo;