export const GET_USERS_REPO = "gitSearch/GET_USERS_REPO";
export const GET_USERS_REPO_ERROR = "gitSearch/GET_USERS_REPO_ERROR";

export function getUsersRepo(username) {
  return async (dispatch, _, ClientService) => {
    try {
      let repositoryService = new ClientService.RespositoryService(username);
      let repos = await repositoryService.getUsersRepo();
      dispatch({ type: GET_USERS_REPO, payload: { repos } });
    } catch (e) {
      dispatch({ type: GET_USERS_REPO_ERROR, payload: e.message });
    }
  };
}
