import React from "react";
import { Center } from '../helpers'

const Title = ({ title, color }) => {
  return (
    <Center>
      <h1 style={{ color }}>{title}</h1>
    </Center>
  );
};

export default Title;
