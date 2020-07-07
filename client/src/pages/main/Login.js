import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  loginUser,
  clearErrors,
  loadUser,
} from '../../redux/actions/authActions';

const Login = (props) => {
  const [User, setUser] = useState({
    email: '',
    password: '',
  });

  const { auth, loginUser, loadUser, clearErrors } = props;
  const { isAuth, error } = auth;

  const onChange = (e) => setUser({ ...User, [e.target.name]: e.target.value });

  const clearForm = () => setUser({ ...User, phone: '', password: '' });

  const onSubmit = (e) => {
    clearForm();
    loginUser(User);
    e.preventDefault();
  };

  useEffect(() => {
    loadUser();
    if (isAuth && !error) {
      props.history.goBack();
    }
    if (error) {
      clearErrors();
    }

    // eslint-disable-next-line
  }, [isAuth, props.history]);

  return (
    <div className='auth'>
      <div className='auth__form'>
        <h1 className='title'>Welcome</h1>
        <p className='subtitle'>Enter your Email and password</p>
        <form onSubmit={onSubmit}>
          <div className='input-field'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='something@email.com (example)'
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
          <button className='btn primary'>Login</button>
          <Link to='/accounts/reset-password' className='link'>
            Forgot password
          </Link>
        </form>
      </div>
      <div className='auth__non-member'>
        <h2>Not a member yet? </h2>
        <Link to='/register' className='link'>
          REGISTER HERE
        </Link>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser, clearErrors, loadUser })(
  Login
);
