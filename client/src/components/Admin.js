import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import { AuthContext } from './AuthContext';

function Admin() {
  const {
    appUser,
    idToken,
  } = useContext(AuthContext);

  const [status, setStatus] = useState('loading');

  const sendIDToken = idToken => {
    return fetch('/admin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idToken
      }),
    })
  }

  useEffect(() => {
    if (idToken) {
      sendIDToken(idToken)
        .then(response => response.json())
        .then(data => {
          const { decodedToken } = data;

          if (!decodedToken.admin) {
            setStatus('unauthorized');
          }
          else {
            setStatus('idle');
          }
        })
        .catch(e => setStatus('unauthorized'));
    }
  }, [idToken]);

  if (status === 'loading') {
    return (
      <div>loading...</div>
    )
  }
  else if (status === 'idle') {
    return (
      <div>Admin</div>
    )
  }
  else {
    return (
      <Redirect from='/admin' to="/" />
    )
  }
}

export default Admin;
