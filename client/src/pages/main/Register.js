import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/** Actions */
import {
  registerUser,
  clearErrors,
  loadUser,
} from '../../redux/actions/authActions';

const Register = (props) => {
  const { auth, registerUser, loadUser, clearErrors } = props;
  const { isAuth, error } = auth;

  const [User, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confPassword: '',
  });

  const onChange = (e) => setUser({ ...User, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    clearForm();
    registerUser(User);
    e.preventDefault();
    props.history.push('/login');
  };

  const clearForm = () =>
    setUser({
      ...User,
      name: '',
      email: '',
      phone: '',
      password: '',
      confPassword: '',
    });

  useEffect(() => {
    loadUser();
    if (isAuth && !error) {
      props.history.push('/');
    }
    if (error) {
      clearErrors();
    }

    // eslint-disable-next-line
  }, [isAuth, props.history]);

  return (
    <div className='auth'>
      <div className='auth__form'>
        <h1 className='title'>register</h1>
        <form onSubmit={onSubmit}>
          <div className='input-field'>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Name'
              value={User.name}
              onChange={onChange}
              required
            />
          </div>
          <div className='input-field'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='johndoe@email.com (example)'
              value={User.email}
              onChange={onChange}
              required
            />
          </div>
          <div className='input-field'>
            <input
              type='number'
              name='phone'
              id='phone'
              placeholder='08570123456 (example)'
              value={User.phone}
              onChange={onChange}
              required
            />
          </div>
          <div className='input-field'>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              value={User.password}
              onChange={onChange}
              required
            />
          </div>
          <div className='input-field'>
            <input
              type='password'
              name='confPassword'
              id='confPassword'
              placeholder='Confirm password'
              value={User.confPassword}
              onChange={onChange}
              required
            />
          </div>
          <button className='btn primary'>Register</button>
        </form>
      </div>
      <div className='auth__member'>
        <h2>Have an account? </h2>
        <Link to='/login' className='link'>
          LOGIN HERE
        </Link>
      </div>
    </div>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  registerUser,
  clearErrors,
  loadUser,
})(Register);
