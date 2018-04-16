import React from 'react';
import moon from '../styles/images/logo.png';

const Logo= (props) => (
    <img className={`logo-image ${props.unique}`} src={moon} alt="placeholder"/>
);

export default Logo;
