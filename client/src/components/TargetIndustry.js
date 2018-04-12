import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class TargetIndustry extends React.Component {
    static propTypes = {
        industry: PropTypes.string
    }
    render() {
        return (
            <div>
                <p>Which industry would you like to research?</p>
                <Input />
            </div>
        )
    }
}

export default TargetIndustry;
