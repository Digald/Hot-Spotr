import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class TargetDemographics extends React.Component {
    static propTypes = {
        demographics: PropTypes.string
    }
    render() {
        return(
            <div>
                <p>What is your target demographic?</p>
                <Input />
            </div>
        )
    }
}

export default TargetDemographics;
