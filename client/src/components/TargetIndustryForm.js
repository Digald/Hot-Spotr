import React from 'react';
import ModalWrapper from './ModalWrapper';

const TargetIndustryForm = props => {
    const targetIndustry = industry => {
        props.hideModal();
        props.targetIndustry(industry);
    };

    return (
        <ModalWrapper
            {...props}
            title="Change this*"
            width={400}
            showOk={false}
        >
            <p>Which industry would you like to research?</p>
            <button onClick={() => targetIndustry()}>Update</button>
            <input />
        </ModalWrapper>
    )
}

export default TargetIndustryForm;
