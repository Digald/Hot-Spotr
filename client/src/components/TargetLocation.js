import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class TargetLocation extends React.Component{
    static propTypes = {
        location: PropTypes.string
    }
    render () {
        return (
            <div>
                <p>What is your target location?</p>
                <Input />
            </div>
        )
    }
}

export default TargetLocation;
