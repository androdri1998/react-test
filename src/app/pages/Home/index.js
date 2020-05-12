import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getRepositories,
  getProfile,
} from "../../store/reducers/repositories.reducer";
import HomeRender from "./HomeRender";

function Home({ match }) {
  const dispatch = useDispatch();
  const respositoriesReducer = useSelector(
    (state) => state.repositoriesReducer.repositories
  );
  const profileReducer = useSelector(
    (state) => state.repositoriesReducer.profile
  );
  const [username] = useState(match.params.username || "camunda");

  useEffect(() => {
    const fetchRepos = async () => {
      const repos = await getRepositories(username);
      dispatch(repos);
    };

    const fetchProfile = async () => {
      const user = await getProfile(username);
      dispatch(user);
    };

    fetchRepos();
    fetchProfile();
  }, [username, dispatch]);

  return (
    <HomeRender
      repositories={respositoriesReducer || []}
      profile={profileReducer || {}}
    />
  );
}

export default withRouter(Home);
