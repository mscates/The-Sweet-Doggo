import React, { useState } from "react";

import { StyledInputGroup, LoginButton, AccountText } from "../styles/common";
import {
  PageWrapper,
  AuthWrapper,
  InLine,
  StyledPadBox,
  FormStyle,
} from "../styles/layout";

import { siteColors } from "../styles/constants";
import { Input, Title } from "../styles/common";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login({ users }) {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [showMessage, setShowMessage] = useState(false);
  const { gray9, primary, gray2, gray1, gray8 } = siteColors;

  const onFormSubmit = (data) => {
    users.map((user) => {
      if (user.name === data.name && user.password === data.password) {
        return history.push("/feed");
      }
      return setShowMessage(true);
    });
  };

  return (
    <PageWrapper>
      <AuthWrapper>
        {showMessage && "Login failed"}
        <StyledPadBox>
          <Title titlecolor={gray9}>The Sweet Doggo</Title>
          <FormStyle onSubmit={handleSubmit(onFormSubmit)}>
            <StyledInputGroup color={gray8} label="User Name">
              <Input
                {...register("name", { required: true })}
                type="text"
                size=".7rem"
                background={gray2}
                backgroundFocus={gray1}
              />
            </StyledInputGroup>
            <StyledInputGroup color={gray8} label="Password">
              <Input
                {...register("password", { required: true })}
                type="password"
                size=".7rem"
                background={gray2}
                backgroundFocus={gray1}
              />
            </StyledInputGroup>

            <LoginButton background={primary} color="white">
              Login
            </LoginButton>

            <InLine stretch={0}>
              <AccountText>Forgot Password?</AccountText>
              <Link to={`/accounts/signup`}>
                <AccountText>No Account? Sign Up</AccountText>
              </Link>
            </InLine>
          </FormStyle>
        </StyledPadBox>
      </AuthWrapper>
    </PageWrapper>
  );
}

export default Login;