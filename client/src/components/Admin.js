import React, { useContext } from "react";
import styled from "styled-components";

import { AuthContext } from './AuthContext';

function Admin() {
  const {
    appUser,
  } = useContext(AuthContext);

  console.log(appUser);

  return (
    <div>Admin</div>
  )
}

export default Admin;
