import React from "react";
import Form from "../components/shared/Form";
import {
  StyledInputGroup,
  LoginButton,
  AccountText,
} from "../styles/common";
import { PageWrapper, AuthWrapper, InLine, StyledPadBox } from "../styles/layout";
import { colors } from '../styles/constants'
import { Input } from "../styles/common";
import { Link } from "react-router-dom";

function Signup() {
  const { textDarkShade, textDark, primary, backgroundFocus, backgroundLight } =
    colors;
  return (
    <PageWrapper>
      <AuthWrapper>
        <StyledPadBox>
          <Form titlecolor={textDark}>
            <StyledInputGroup color={textDarkShade} label="Email">
              <Input
                type="text"
                size=".7rem"
                background={backgroundLight}
                backgroundFocus={backgroundFocus}
              />
            </StyledInputGroup>
            <StyledInputGroup color={textDarkShade} label="Full Name">
              <Input
                type="text"
                size=".7rem"
                background={backgroundLight}
                backgroundFocus={backgroundFocus}
              />
            </StyledInputGroup>
            <StyledInputGroup color={textDarkShade} label="User Name">
              <Input
                type="text"
                size=".7rem"
                background={backgroundLight}
                backgroundFocus={backgroundFocus}
              />
            </StyledInputGroup>
            <StyledInputGroup color={textDarkShade} label="Password">
              <Input
                type="text"
                size=".7rem"
                
                background={backgroundLight}
                backgroundFocus={backgroundFocus}
              />
            </StyledInputGroup>
            <LoginButton background={primary} color="white">
              Login
            </LoginButton>
            <InLine>
              <Link to={`/accounts/login`}>
                <AccountText color={textDark}>
                  Have Account? Sign In
                </AccountText>
              </Link>
            </InLine>
          </Form>
        </StyledPadBox>
      </AuthWrapper>
    </PageWrapper>
  );
}

export default Signup;
