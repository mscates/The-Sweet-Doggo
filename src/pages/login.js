import React from "react";

import {
  StyledInputGroup,
  LoginButton,
  AccountText,
 
} from "../styles/common";
import { PageWrapper, AuthWrapper, InLine, StyledPadBox, FormStyle } from "../styles/layout";

import { colors } from "../styles/constants"
import { Input, Title } from "../styles/common";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form'

function Login() {
  const { register, handleSubmit } = useForm()
  
  const {
    textDarkShade,
    textDark,
    primary,
    backgroundFocus,
    backgroundLight,
  } = colors;

 const onFormSubmit = (data) => {
   console.log(data)
 }


  return (
     
    <PageWrapper>
      <AuthWrapper>
        <StyledPadBox>
            <Title titlecolor={textDark}>The Sweet Doggo</Title>
           <FormStyle onSubmit={handleSubmit(onFormSubmit)}>
            <StyledInputGroup color={textDarkShade} label="User Name">
              <Input
            {...register("name")}
                type="text"
                size=".7rem"           
                background={backgroundLight}
                backgroundFocus={backgroundFocus}
              />
            </StyledInputGroup>
            <StyledInputGroup color={textDarkShade} label="Password">
              <Input
              {...register("password")}
                type="password"
                size=".7rem"
                background={backgroundLight}
                backgroundFocus={backgroundFocus}
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