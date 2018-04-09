import React from 'react';

export const Container = (props) => (
    <div className={`container ${props.size} ${props.unique}`}>
        {props.children}
    </div>
);
