import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Profile from "../../components/Profile";
import Repositories from "../../components/Repositories";
import { ContainerHome } from "./style";

function HomeRender({ repositories, profile }) {
  return (
    <ContainerHome>
      <Header />
      <Banner />
      <Profile profile={profile} />
      <Repositories repositories={repositories} />
    </ContainerHome>
  );
}

HomeRender.propTypes = {
  repositories: PropTypes.array.isRequired,
  profile: PropTypes.object.isRequired,
};

export default HomeRender;
