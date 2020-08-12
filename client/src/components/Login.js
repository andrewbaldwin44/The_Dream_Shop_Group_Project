import React, { useContext, createRef } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import { AuthContext } from './AuthContext';

function Login({ accountCreated }) {
  const {
    appUser,
    createUserWithEmail,
    signInWithEmail,
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

  return (
    <Wrapper>
      <StyledForm onSubmit={submitForm}>
        <input type="email" ref={emailInput} required />
        <input type="password" ref={passwordInput} required />
        <button type="submit">{accountCreated ? 'Sign In' : 'Create Account'}</button>
      </StyledForm>
      {accountCreated && (
          <Link to='/signup'>
            Create Account
          </Link>
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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export default Login;
