"use client";

import * as React from "react";
import styled, { ThemeProvider } from 'styled-components'

const StyledButton = styled.button`
  background-color: white;
  padding: ${props => props.theme.padding};
  color: ${props => props.theme.color};
  `

export const Button = ({theme}) => {
  return <ThemeProvider theme={theme}>
    <StyledButton onClick={() => alert("default")}>Default Button</StyledButton></ThemeProvider>;
};
