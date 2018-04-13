import React from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from './ModalWrapper';

const TargetDemographicsForm = props => {
    const signIn = provider => {
        props.hideModal();
        props.signIn(provider);
    };

    return (
        <ModalWrapper
            {...props}
            title="Change this*"
            width={400}
            showOk={false}
        >
            <p>What is your target demographic?</p>
            <input />
        </ModalWrapper>
    )
}

export default TargetDemographicsForm;
