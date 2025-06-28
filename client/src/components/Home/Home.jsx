import React from "react";
import LinkPaste from "../homeComponents/LinkPaste";
import FeaturesSection from "../homeComponents/FeatureSection";

const Home = () => {
  return (
    <>
      <div className="min-h-screen">
        <LinkPaste/>
        <FeaturesSection/>
      </div>
    </>
  );
};

export default Home;
