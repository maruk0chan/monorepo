"use client";

import * as React from "react";
import styled, { ThemeProvider } from 'styled-components'

const StyledButton = styled.button`
  background-color: ${props => props.theme.backgroundColor};
  padding: ${props => props.theme.padding};
  color: ${props => props.theme.color};
  border-radius: ${props => props.theme.borderRadius};
  `

export const Button = ({ theme }) => {
  return <ThemeProvider theme={theme}>
    <StyledButton onClick={() => alert("default")}>Default Button</StyledButton></ThemeProvider>;
};
