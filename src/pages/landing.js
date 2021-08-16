import React from "react";
import { LandingSplit, Cover, Hidden } from "../helpers";
import { Link } from "react-router-dom";
import Form from "../components/shared/Form";
import { colors, landingStyle } from '../helpers'

const Landing = () => {
  const { backgroundDark } = colors
  return (
    <>
      <LandingSplit fraction="4/2" style={{ height: "100vh" }}>
        <Hidden
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          aria-label="dog sitting on bed"
        >
          <img style={landingStyle} />
        </Hidden>
        <Cover style={{ backgroundColor: backgroundDark }}>
          <Form />
        </Cover>
      </LandingSplit>
    </>
  );
};

export default Landing;
