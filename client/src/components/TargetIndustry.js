import React from 'react';
import PropTypes from 'prop-types';

class TargetIndustry extends React.Component {
    static propTypes = {
        industry: PropTypes.string
    }
    render() {
        return (
            <div>
                <input type='text' name='industry' value={this.props.industry} />
            </div>
        )
    }
}

export default TargetIndustry;
