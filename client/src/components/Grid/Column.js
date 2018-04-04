import React from 'react';

export const Column = (props) => (
    <div className={`column ${props.size}`}>
        {props.children}
    </div>
);
