import React from 'react';
import PropTypes from 'prop-types';

class TargetLocation extends React.Component{
    static propTypes = {
        location: PropTypes.string
    }
    render () {
        return (
            <div>
                <input type='text' name='industry' value={this.props.location} />
            </div>
        )
    }
}

export default TargetLocation;
