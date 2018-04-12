import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
    render () {
        return (
            <input type='text' name='industry' value={this.props.location} />
        )
    }
}

export default Input;
