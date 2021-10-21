import React from "react";
import { LandingSplit, Cover, Hidden, PadBox, InLine } from "../styles/layout";
import Form from "../components/shared/Form";
import {
  StyledInputGroup,
  LoginButton,
  AccountText,
} from "../styles/common";
import { colors } from '../styles/constants'
import { landingStyle } from '../styles/layout'
import { Input } from "../styles/common";
import { Link } from "react-router-dom";

const Landing = () => {
  const {
    backgroundDark,
    primary,
    textLight,
    textLightShade,
    backgroundFocus,
  } = colors;
  return (
    <>
      <LandingSplit fraction="4/2" style={{ height: "100vh" }}>
        <Hidden style={{ width: "100%", height: "100%", objectFit: "cover" }}>
          <img aria-label="dog sitting on bed" style={landingStyle} />
        </Hidden>
        <Cover style={{ backgroundColor: backgroundDark }}>
          <PadBox as="section" padding="lg">
            <Form titlecolor={textLight}>
              <StyledInputGroup color={textLightShade} label="User Name">
                <Input
                  type="text"
                  size=".7rem"
                  backgroundFocus={backgroundFocus}
                />
              </StyledInputGroup>
              <StyledInputGroup color={textLightShade} label="Password">
                <Input
                  type="text"
                  size=".7rem"
                  backgroundFocus={backgroundFocus}
                />
              </StyledInputGroup>
              <LoginButton background={primary} color="white">
                Login
              </LoginButton>
              <InLine stretch={0}>
                <AccountText color={textLight}>Forgot Password?</AccountText>
                <Link to={`/accounts/signup`}>
                  <AccountText color={textLight}>
                    No Account? Sign Up
                  </AccountText>
                </Link>
              </InLine>
            </Form>
          </PadBox>
        </Cover>
      </LandingSplit>
    </>
  );
};

export default Landing;
