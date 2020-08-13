import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { AuthContext } from './AuthContext';

function Admin() {
  const {
    appUser,
    onAuthStateChange,
  } = useContext(AuthContext);

  const [idToken, setIdToken] = useState(null);

  const history = useHistory();

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

  if (appUser.email){
    onAuthStateChange(setIdToken);
  }

  if (idToken && appUser.email) {
    sendIDToken(idToken)
      .then(response => response.json())
      .then(data => {
        const { decodedToken } = data;

        if (!decodedToken.admin) {
          history.push('/');
        }
      })
      .catch(e => console.log(e))

    return (
      <div>Admin</div>
    )
  }
  else {
    return <div></div>
  }
}

export default Admin;
