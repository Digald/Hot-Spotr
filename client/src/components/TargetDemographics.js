import React from 'react';
import PropTypes from 'prop-types';

class TargetDemographics extends React.Component {
    static propTypes = {
        demographics: PropTypes.string
    }
    render() {
        return(
            <div>
                <input type='text' name='industry' value={this.props.industry} />
            </div>
        )
    }
}

export default TargetDemographics;
