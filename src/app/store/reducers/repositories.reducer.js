import { githubApi } from "../../utils/api";

const repositoriesActions = {
  GET_REPOSITORIES: "@user/GET_REPOSITORIES",
  GET_PROFILE: "@user/GET_PROFILE",
};

const INITIAL_STATE = {
  repositories: null,
  profile: null,
};

export const repositoriesReducer = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case repositoriesActions.GET_REPOSITORIES:
      return {
        ...state,
        repositories: payload,
      };
    case repositoriesActions.GET_PROFILE:
      return {
        ...state,
        profile: payload,
      };
    default:
      return state;
  }
};

export const getRepositories = async (username) => {
  const response = await githubApi.get(`/users/${username}/repos`);
  return {
    type: repositoriesActions.GET_REPOSITORIES,
    payload: response.data,
  };
};

export const getProfile = async (username) => {
  const response = await githubApi.get(`/users/${username}`);
  return {
    type: repositoriesActions.GET_PROFILE,
    payload: response.data,
  };
};
