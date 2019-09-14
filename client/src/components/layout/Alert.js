import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = props => {
    const { alerts } = props;

    if (alerts !== null && alerts.length > 0) {
        let alertMap = alerts.map(alert => (
            <div key={alert.id} className={`alert alert-${alert.alertType}`}>
                {alert.msg}
            </div>
        ));
        return alertMap;
    } else {
        return null;
    }
    // alerts !== null &&
    //     alerts.length > 0 &&
    //     alerts.map(alert => (
    //         <div key={alert.id} className={`alert alert-${alert.alertType}`}>
    //             {alert.msg}
    //         </div>
    //     ));
};

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
