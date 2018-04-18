import React from 'react';
import logo from '../styles/images/logo.png';

const Logo= (props) => (
    <img className={`logo-image ${props.unique}`} src={logo} alt="Hot Spotr"/>
);

export default Logo;
