import React, { createRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Login({ accountCreated }) {
  const emailInput = createRef();
  const passwordInput = createRef();

  return (
    <Wrapper>
      <StyledForm>
        <input type="email" ref={emailInput} required />
        <input type="password" ref={passwordInput} required />
        <button>{accountCreated ? 'Sign In' : 'Create Account'}</button>
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

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export default Login;
