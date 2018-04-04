import React from 'react';

const Columns = (props) => (
    <div className={`columns ${props.responsive}`}>
        {props.children}
    </div>
);

export default Columns;