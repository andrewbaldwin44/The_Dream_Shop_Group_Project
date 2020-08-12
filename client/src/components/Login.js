import React, { useContext, createRef } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as GoogleIcon } from  '../assets/google-icon.svg';
import TextField from '@material-ui/core/TextField';

import { AuthContext } from './AuthContext';

function Login({ accountCreated }) {
  const {
    appUser,
    createUserWithEmail,
    signInWithEmail,
    signInWithGoogle,
    handleSignOut,
  } = useContext(AuthContext);

  const history = useHistory();

  const emailInput = createRef();
  const passwordInput = createRef();

  const submitForm = async event => {
    event.preventDefault();

    if (accountCreated) {
      signInWithEmail(emailInput.current.value, passwordInput.current.value)
        .then(() => history.push('/'))
        .catch(error => console.log(error));
    }
    else {
      createUserWithEmail(emailInput.current.value, passwordInput.current.value)
        .then(() => history.push('/login'))
        .catch(error => console.log(error));
    }
  }

  const googleLogin = async () => {
    await signInWithGoogle()
    history.push('/');
  }

  return (
    <Wrapper>
      <GoogleButton
        onClick={googleLogin}
      >
        <StyledGoogleIcon />
        {accountCreated ? 'Login With Google' : 'Sign Up With Google'}
      </GoogleButton>
      <StyledForm onSubmit={submitForm}>
        <TextField
          type="email"
          label="Email"
          ref={emailInput}
          variant="outlined"
          required
        />
        <TextField
          type="password"
          label="Password"
          ref={passwordInput}
          variant="outlined"
          required
        />
        <button type="submit">{accountCreated ? 'Sign In' : 'Create Account'}</button>
      </StyledForm>
      {accountCreated ? (
          <NewAccountContainer>
            <span>{'New to Dream Store? '}</span>
            <StyledLink to='/signup'>Create an Account</StyledLink>
          </NewAccountContainer>
        ) : (
          <NewAccountContainer>
            <span>Already Have an Account?</span>
            <StyledLink to='/login'>Sign In</StyledLink>
          </NewAccountContainer>
        )
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
`;

const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 6px;
  padding: 0 15px;
  margin-bottom: 35px;
  height: 60px;
  width: 245px;
  font-family: 'Inter', sans-serif;
`;

const StyledGoogleIcon = styled(GoogleIcon)`
  height: 38px;
  width: 38px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid black;
  border-radius: 6px;
  padding: 0 16px;
  margin-bottom: 50px;
  height: 40%;
  width: 400px;
`;

const NewAccountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 6px;
  height: 65px;
  width: 355px;
`;

const StyledLink = styled(Link)`
  color: #0366d6;
  text-decoration: underline;
  padding-left: 10px;
`;

export default Login;
