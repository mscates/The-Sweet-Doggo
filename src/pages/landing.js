import React, { useState } from "react";
import { LandingSplit, Cover, Hidden, PadBox, InLine } from "../styles/layout";

import { StyledInputGroup, LoginButton, AccountText } from "../styles/common";
import { siteColors } from "../styles/constants";
import { landingStyle, FormStyle } from "../styles/layout";
import { Input, Title } from "../styles/common";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const Landing = ({ users }) => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [showMessage, setShowMessage] = useState(false);

  const onFormSubmit = (data) => {
    console.log(data, users);
    users.map((user) => {
      if (user.name === data.name && user.password === data.password) {
        return history.push("/feed");
      }
      return setShowMessage(true);
    });
  };

  const { gray10, gray2, gray1, gray0, primary } = siteColors;
  return (
    <>
      <LandingSplit fraction="4/2" style={{ height: "100vh" }}>
        <Hidden style={{ width: "100%", height: "100%", objectFit: "cover" }}>
          <img aria-label="dog sitting on bed" style={landingStyle} />
        </Hidden>
        <Cover style={{ backgroundColor: gray10 }}>
          {showMessage && "Username or password are incorrect"}
          <PadBox as="section" padding="lg">
            <Title titlecolor={gray0}>The Sweet Doggo</Title>
            <FormStyle onSubmit={handleSubmit(onFormSubmit)}>
              <StyledInputGroup color={gray1} label="User Name">
                <Input
                  {...register("name", { required: true })}
                  type="text"
                  size=".7rem"
                  backgroundFocus={gray2}
                />
              </StyledInputGroup>
              <StyledInputGroup color={gray1} label="Password">
                <Input
                  {...register("password", { required: true })}
                  type="password"
                  size=".7rem"
                  backgroundFocus={gray2}
                />
              </StyledInputGroup>

              <LoginButton background={primary} color="white">
                Login
              </LoginButton>

              <InLine stretch={0}>
                <AccountText color={gray0}>Forgot Password?</AccountText>
                <Link to={`/accounts/signup`}>
                  <AccountText color={gray0}>No Account? Sign Up</AccountText>
                </Link>
              </InLine>
            </FormStyle>
          </PadBox>
        </Cover>
      </LandingSplit>
    </>
  );
};

export default Landing;