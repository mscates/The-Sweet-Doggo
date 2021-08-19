import React from "react";
import Title from "../../components/Title";
import {
  Stack,
  PadBox,
  StyledInputGroup,
  InLine,
  LoginButton,
  AccountText,
  colors,
  AuthWrapper,
  PageWrapper
} from "../../helpers";
import { Input } from "../../common";
import { Link } from "react-router-dom";

function Form() {
  const { textDark, textDarkShade, primary } = colors;
  return (
    <PageWrapper>
      <AuthWrapper>
        <PadBox
          style={{
            background: "white",
            borderRadius: "5px",
            boxShadow:
              "0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
          }}
          as="section"
          padding="lg"
        >
          <Stack as="form" gutter="lg">
            <Title title="The Sweet Doggo" color={textDark}></Title>
            <StyledInputGroup color={textDarkShade} label="User Name">
              <Input
                type="text"
                size=".7rem"
                border="1px solid hsl(0, 0%, 50%)"
                background="hsl(0, 0%, 80%)"
                backgroundFocus="hsl(0, 0%, 60%)"
              />
            </StyledInputGroup>
            <StyledInputGroup color={textDarkShade} label="Password">
              <Input
                type="text"
                size=".7rem"
                border="1px solid hsl(0, 0%, 50%)"
                background="hsl(0, 0%, 80%)"
                backgroundFocus="hsl(0, 0%, 60%)"
              />
            </StyledInputGroup>
            <LoginButton background={primary} color="white">
              Sign In
            </LoginButton>
            <InLine stretch={0}>
              <AccountText>Forgot Password?</AccountText>
              <Link to="/accounts/signup">
                <AccountText>No account? Sign Up</AccountText>
              </Link>
            </InLine>
          </Stack>
        </PadBox>
      </AuthWrapper>
    </PageWrapper>
  );
}

export default Form;
