import React from 'react';
import moon from '../css/images/moonlogo.png';

const Logo= (props) => (
    <img className={`logo-image ${props.unique}`} src={moon} alt="placeholder"/>
);

export default Logo;
