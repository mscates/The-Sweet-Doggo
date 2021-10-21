import React from "react";
import Form from "../components/shared/Form";
import {
  StyledInputGroup,
  LoginButton,
  AccountText,
 
} from "../styles/common";
import { PageWrapper, AuthWrapper, InLine, StyledPadBox } from "../styles/layout";
import { colors } from "../styles/constants"
import { Input } from "../styles/common";
import { Link } from "react-router-dom";

function Login() {
  const {
    textDarkShade,
    textDark,
    primary,
    backgroundFocus,
    backgroundLight,
  } = colors;
  return (
    <PageWrapper>
      <AuthWrapper>
        <StyledPadBox>
          <Form titlecolor={textDark}>
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
            {/* separate component */}
            <InLine stretch={0}>
              <AccountText>Forgot Password?</AccountText>
              <Link to={`/accounts/signup`}>
                <AccountText>No Account? Sign Up</AccountText>
              </Link>
            </InLine>
            {/* separate component */}
          </Form>
        </StyledPadBox>
      </AuthWrapper>
    </PageWrapper>
  );
}

export default Login;
