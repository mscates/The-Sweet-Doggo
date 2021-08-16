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
import { colors } from '../../helpers'


const Form = () => {
  const { primary, textLight, textLightShade } = colors
  return (
    <div>
      <PadBox as="section" padding="lg">
        <Stack as="form" gutter="lg">
          <Title title="The Sweet Doggo" color={textLight}></Title>
          <StyledInputGroup color={textLightShade} label="User Name">
            <Input
              type="text"
              size=".7rem"
              border="1px solid hsl(0, 0%, 50%)"
            />
          </StyledInputGroup>
          <StyledInputGroup color={textLightShade} label="Password">
            <Input
              type="text"
              size=".7rem"
              border="1px solid hsl(0, 0%, 50%)"
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
  );
};

export default Form;
