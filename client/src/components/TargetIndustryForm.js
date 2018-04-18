import React from 'react';
import ModalWrapper from './ModalWrapper';

const TargetIndustryForm = props => {
    const target = industry => {
        props.hideModal();
        props.signIn(industry);
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
