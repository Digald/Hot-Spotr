import React from 'react';

const GenericBtn = (props) => (
    <button className={`button ${props.style}`}>{props.children}</button>
);

export default GenericBtn