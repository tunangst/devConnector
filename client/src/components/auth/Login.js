import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    //formData = setstate; setFormData = state
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = element =>
        setFormData({
            ...formData,
            [element.target.name]: element.target.value
        });

    const onSubmit = async element => {
        element.preventDefault();
        console.log('success');
    };

    return (
        <Fragment>
            <h1 className='large text-primary'>Sign In</h1>
            <p className='lead'>
                <i className='fas fa-user'></i> Sign Into Your Account
            </p>
            <form className='form' onSubmit={element => onSubmit(element)}>
                <div className='form-group'>
                    <input
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        value={email}
                        onChange={element => onChange(element)}
                        required
                    />
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

                <input
                    type='submit'
                    className='btn btn-primary'
                    value='Login'
                />
            </form>
            <p className='my-1'>
                Don't have an account? <Link to='/register'>Sign Up</Link>
            </p>
        </Fragment>
    );
};

export default Login;
