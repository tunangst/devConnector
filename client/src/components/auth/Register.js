import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const Register = props => {
    const { setAlert } = props;
    //formData = setstate; setFormData = state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = element =>
        setFormData({
            ...formData,
            [element.target.name]: element.target.value
        });

    const onSubmit = async element => {
        element.preventDefault();
        if (password !== password2) {
            console.log('Passwords do not match');
            setAlert('Passwords do not match', 'danger');
        } else {
            console.log('success');
        }
    };

    return (
        <Fragment>
            <h1 className='large text-primary'>Sign Up</h1>
            <p className='lead'>
                <i className='fas fa-user'></i> Create Your Account
            </p>
            <form className='form' onSubmit={element => onSubmit(element)}>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={element => onChange(element)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        value={email}
                        onChange={element => onChange(element)}
                        required
                    />
                    <small className='form-text'>
                        This site uses Gravatar so if you want a profile image,
                        use a Gravatar email
                    </small>
                </div>
                <div className='form-group'>
                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={element => onChange(element)}
                        minLength='6'
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='password'
                        placeholder='Confirm Password'
                        name='password2'
                        value={password2}
                        onChange={element => onChange(element)}
                        minLength='6'
                    />
                </div>
                <input
                    type='submit'
                    className='btn btn-primary'
                    value='Register'
                />
            </form>
            <p className='my-1'>
                Already have an account? <Link to='/login'>Sign In</Link>
            </p>
        </Fragment>
    );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired
};

//didnt need to get state: 1st parameter
//actions to use as props: 2nd parameter
export default connect(
    null,
    { setAlert }
)(Register);
