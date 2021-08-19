import React from "react";
import Title from "../Title";
import {
  Stack,
  PadBox,
  StyledInputGroup,
  InLine,
  LoginButton,
  AccountText,
} from "../../helpers";
import { Input } from "../../common";
import { Link } from "react-router-dom";
import { colors } from "../../helpers";

const LandingForm = () => {
  const { primary, textLight, textLightShade } = colors;
  return (
    <PadBox as="section" padding="lg">
      <Stack as="form" gutter="lg">
        <Title title="The Sweet Doggo" color={textLight}></Title>
        <StyledInputGroup color={textLightShade} label="User Name">
          <Input type="text" size=".7rem" background="hsl(0, 0%, 16%)" />
        </StyledInputGroup>
        <StyledInputGroup color={textLightShade} label="Password">
          <Input type="text" size=".7rem" background="hsl(0, 0%, 16%)" />
        </StyledInputGroup>
        <LoginButton background={primary} color="white">
          Sign In
        </LoginButton>
        <InLine stretch={0}>
          <AccountText color="white">Forgot Password?</AccountText>
          <Link to="/accounts/signup">
            <AccountText color="white">No account? Sign Up</AccountText>
          </Link>
        </InLine>
      </Stack>
    </PadBox>
  );
};

export default LandingForm;
