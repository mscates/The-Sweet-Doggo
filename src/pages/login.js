import React from "react";
import Title from "../components/Title";
import {
  Stack,
  PadBox,
  StyledInputGroup,
  InLine,
  LoginButton,
  AccountText,
} from "../helpers";
import { Input } from "../common";
import { Link } from "react-router-dom";
import { colors } from "../helpers";

function Login() {
  const { backgroundLight, textDark, textDarkShade, primary } = colors;
  return (
    <div
      style={{
        backgroundColor: backgroundLight,
        height: "100vh",
        display: "grid",
      }}
    >
      <div style={{ maxWidth: "500px", width: "100%", margin: "auto" }}>
        <PadBox as="section" padding="lg">
          <Stack as="form" gutter="lg">
            <Title title="The Sweet Doggo" color={textDark}></Title>
            <StyledInputGroup color={textDarkShade} label="User Name">
              <Input
                type="text"
                size=".7rem"
                border="1px solid hsl(0, 0%, 50%)"
                background="white"
              />
            </StyledInputGroup>
            <StyledInputGroup color={textDarkShade} label="Password">
              <Input
                type="text"
                size=".7rem"
                border="1px solid hsl(0, 0%, 50%)"
                background="white"
              />
            </StyledInputGroup>
            <LoginButton background={primary}>Sign In</LoginButton>
            <InLine stretch={0}>
              <AccountText>Forgot Password?</AccountText>
              <Link to="/accounts/signup">
                <AccountText>No account? Sign Up</AccountText>
              </Link>
            </InLine>
          </Stack>
        </PadBox>
      </div>
    </div>
  );
}

export default Login;
