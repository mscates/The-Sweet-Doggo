import React from "react";
import { Stack } from "../../styles/layout";
import { Title } from "../../styles/common"

function Form({ children, titlecolor }) {
  return (
      <Stack as="form" gutter="lg">
        <Title titlecolor={titlecolor}>The Sweet Doggo</Title>
        {children}
      </Stack>
   
  );
}

export default Form;
