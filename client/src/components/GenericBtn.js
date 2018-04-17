import React from 'react';

const GenericBtn = (props) => (
    <button className={`button ${props.style}`} onClick={() => props.toggleModal()}>{props.children}</button>
);

export default GenericBtn