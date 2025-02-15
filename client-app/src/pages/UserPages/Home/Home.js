import AboutIndexPos from "components/About-section/About-section";
import Header from "components/Header/header";
import PosFeatures from "components/Post-feature/post-feature";
import PosUSerRoles from "components/Whocanuse/whocanuse";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <AboutIndexPos />
      <PosFeatures />
      <PosUSerRoles />
    </div>
  );
};

export default Home;
