import React from 'react';
import ModalWrapper from './ModalWrapper';

const TargetDemographicsForm = props => {
    const targetDemographicsForm = demographic => {
        props.hideModal();
        props.targetDemographicsForm(demographic);
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
