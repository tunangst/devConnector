import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// const PrivateRoute = ({
//     component: Component,
//     auth: { isAuthenticated, loading },
//     ...rest
// }) => {

const PrivateRoute = props => {
    // {component: Component} destructures component from props and renames it to Component
    const { component: Component, auth, ...rest } = props;
    const { isAuthenticated, loading } = auth;
    return (
        <Route
            {...rest}
            render={props =>
                !isAuthenticated && !loading ? (
                    <Redirect to='/login' />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps)(PrivateRoute);
