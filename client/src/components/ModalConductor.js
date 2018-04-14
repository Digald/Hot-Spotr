import React from 'react';
import { connect } from 'react-redux';
import index from '../reducers/index';
import store from '../store';

import * as actions from '../actions/actionCreator.js';
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

export default connect(state => state, () => actions)(ModalConductor(store));
