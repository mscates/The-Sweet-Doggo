import React, { useState } from "react";
import { LandingSplit, Cover, Hidden, PadBox, InLine } from "../styles/layout";

import {
  StyledInputGroup,
  LoginButton,
  AccountText,
} from "../styles/common";
import { colors } from '../styles/constants'
import { landingStyle, FormStyle } from '../styles/layout'
import { Input, Title } from "../styles/common";
import { Link, useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form'


const Landing = ({users}) => {
  const history = useHistory()
const { register, handleSubmit } = useForm()
const [showMessage, setShowMessage] = useState(false)

 const onFormSubmit = (data) => {
   console.log(data, users)
    users.map(user => {
     if(user.name === data.name && user.password === data.password) {
      history.push("/feed")
     } else 
    setShowMessage(true)
   })
 }

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
          {showMessage && 'Username or password are incorrect'}
          <PadBox as="section" padding="lg">
            <Title titlecolor={textLight}>The Sweet Doggo</Title>
             <FormStyle onSubmit={handleSubmit(onFormSubmit)}>
              <StyledInputGroup color={textLightShade} label="User Name">
                <Input
                {...register("name", { required: true })}
                  type="text"
                  size=".7rem"
                  backgroundFocus={backgroundFocus}
                />
              </StyledInputGroup>
              <StyledInputGroup color={textLightShade} label="Password">
                <Input
                {...register("password", { required: true })}
                  type="password"
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
            </FormStyle>
          </PadBox>
        </Cover>
      </LandingSplit>
    </>
  );
};

export default Landing;