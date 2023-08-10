"use client";

import * as React from "react";
import { styled } from 'styled-components'

const StyledButton = styled.button`
  background-color: white;
  padding: 10px 20px
`

export const Button = () => {
  return <StyledButton onClick={() => alert("default")}>Default Button</StyledButton>;
};
