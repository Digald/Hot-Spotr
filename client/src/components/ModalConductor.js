import React from 'react';

import TargetIndustryForm from './TargetIndustryForm.js';
import TargetLocationForm from './TargetLocationForm';
import TargetDemographicsForm from './TargetDemographicsForm';

const ModalConductor = props => {
    switch (props.currentModal) {
        case 'TARGET_INDUSTRY':
            return <TargetIndustryForm {...props} />;

        case 'TARGET_LOCATION':
            return <TargetLocationForm {...props} />;

        case 'TARGET_DEMOGRAPHICS':
            return <TargetDemographicsForm {...props} />;

        default:
            return null;
    }
};

export default ModalConductor;
