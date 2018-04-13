import React from 'react';
import ModalWrapper from './ModalWrapper';

    const TargetLocationForm = props => {
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
                <p>Where is your target location?</p>
                <input />
            </ModalWrapper>
        )
    }

export default TargetLocationForm;
