import React, { useState } from "react";

import {
  StyledInputGroup,
  LoginButton,
  AccountText,
 
} from "../styles/common";
import { PageWrapper, AuthWrapper, InLine, StyledPadBox, FormStyle } from "../styles/layout";

import { colors } from "../styles/constants"
import { Input, Title } from "../styles/common";
import { Link, useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form'

function Login({ users }) {
  const history = useHistory()
  const { register, handleSubmit } = useForm()
  const [showMessage, setShowMessage] = useState(false)
  
  const {
    textDarkShade,
    textDark,
    primary,
    backgroundFocus,
    backgroundLight,
  } = colors;

 const onFormSubmit = (data) => {
   users.map(user => {
     if(user.name === data.name && user.password === data.password) {
      history.push("/feed")
     } else 
    setShowMessage(true)
   })
 }


  return (
    <PageWrapper>
      <AuthWrapper>
        {showMessage && 'Login failed'}
        <StyledPadBox>
            <Title titlecolor={textDark}>The Sweet Doggo</Title>
           <FormStyle onSubmit={handleSubmit(onFormSubmit)}>
            <StyledInputGroup color={textDarkShade} label="User Name">
              <Input
            {...register("name", { required: true})}
                type="text"
                size=".7rem"           
                background={backgroundLight}
                backgroundFocus={backgroundFocus}
              />
              
            </StyledInputGroup>
            <StyledInputGroup color={textDarkShade} label="Password">
              <Input
              {...register("password", {required: true})}
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
