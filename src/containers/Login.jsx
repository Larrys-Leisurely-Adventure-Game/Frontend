import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { LoginForm, GameTitle } from '../components';
import { AuthCardContainer, BottomMessage } from '../styles/AuthCard';

const Login = ({ history }) => {
  return (
    <AuthCardContainer>
      <GameTitle />
      <LoginForm history={history} />
      <BottomMessage>
        Dont have an account?
        <Link to="/register"> Sign up</Link>
      </BottomMessage>
    </AuthCardContainer>
  );
};

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default Login;
