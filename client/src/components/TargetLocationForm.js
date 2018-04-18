import React from 'react';
import ModalWrapper from './ModalWrapper';

    const TargetLocationForm = props => {
        const updateLocation = location => {
            props.hideModal();
            props.updateLocation(location);
        };

        return (
            <ModalWrapper
                {...props}
                title="Change this*"
                width={400}
                showOk={false}
            >
                <p>Where is your target location?</p>
                <input />
                <button onClick={() => updateLocation()}>Update</button>
            </ModalWrapper>
        )
    }

export default TargetLocationForm;
