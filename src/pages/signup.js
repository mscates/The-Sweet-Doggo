import React from "react";

import {
  StyledInputGroup,
  LoginButton,
  AccountText,
} from "../styles/common";
import { PageWrapper, AuthWrapper, InLine, StyledPadBox, FormStyle } from "../styles/layout";
import { colors } from '../styles/constants'
import { Input, Title } from "../styles/common";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form'


function Signup({ setUsers, users }) {
  const { register, handleSubmit, formState: { errors } } = useForm()

   const onFormSubmit = (data) => {
      setUsers([...users, {
        email: data.email,
        name: data.name,
        password: data.password
      }])

    }

  const { textDarkShade, textDark, primary, backgroundFocus, backgroundLight } =
    colors;
  return (
    <PageWrapper>
      <AuthWrapper>
        <StyledPadBox>
            <Title titlecolor={textDark}>The Sweet Doggo</Title>
           <FormStyle onSubmit={handleSubmit(onFormSubmit)}>
            <StyledInputGroup color={textDarkShade} label="Email">
              <Input
              {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i})}
                type="text"
                size=".7rem"
                background={backgroundLight}
                backgroundFocus={backgroundFocus}
              />
              {errors.email?.type === 'required' && "Email is required"}
              {errors.email?.type === 'pattern' && "Email is invalid"}
            </StyledInputGroup>
            <StyledInputGroup color={textDarkShade} label="User Name">
              <Input
              {...register("name", { required: true})}
                type="text"
                size=".7rem"
                background={backgroundLight}
                backgroundFocus={backgroundFocus}
              />
               {errors.username && "Username is required"}
            </StyledInputGroup>
            <StyledInputGroup color={textDarkShade} label="Password">
              <Input
              {...register("password", { required: true, minLength: {value: 8, message:"Password must be at least 8 characters"}})}
                type="password"
                size=".7rem"
                background={backgroundLight}
                backgroundFocus={backgroundFocus}
              />
              {errors.password && errors.password.message}
            </StyledInputGroup>
            <LoginButton background={primary} color="white">
              SignUp
            </LoginButton>
            <InLine>
              <Link to={`/accounts/login`}>
                <AccountText color={textDark}>
                  Have Account? Sign In
                </AccountText>
              </Link>
            </InLine>
          </FormStyle>
        </StyledPadBox>
      </AuthWrapper>
    </PageWrapper>
  );
}

export default Signup;