import React from 'react';
import ModalWrapper from './ModalWrapper';

const TargetIndustryForm = props => {
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
            <p>Which industry would you like to research?</p>
            <input />
        </ModalWrapper>
    )
}

export default TargetIndustryForm;
