import React from 'react';
import ModalWrapper from './ModalWrapper';

const TargetDemographicsForm = props => {
    const updateDemographic = demographic => {
        props.hideModal();
        props.updateDemographic(demographic);
    };

    return (
        <ModalWrapper
            {...props}
            title="UserProfile"
            width={400}
            showOk={false}
        >
            <p>What is your target demographic?</p>
            <input />
            <button onClick={() => updateDemographic()}>Update</button>
        </ModalWrapper>
    )
}

export default TargetDemographicsForm;
