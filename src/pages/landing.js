import React from "react";
import { LandingSplit, Cover, Hidden } from "../helpers";
import LandingForm from "../components/shared/LandingForm";
import { colors, landingStyle } from '../helpers'

const Landing = () => {
  const { backgroundDark } = colors
  return (
    <>
      <LandingSplit fraction="4/2" style={{ height: "100vh" }}>
        <Hidden
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <img aria-label="dog sitting on bed" style={landingStyle} />
        </Hidden>
        <Cover style={{ backgroundColor: backgroundDark }}>
          <LandingForm />
        </Cover>
      </LandingSplit>
    </>
  );
};

export default Landing;
