export const GET_USERS = "gitSearch/GET_USERS";
export const GET_USERS_ERROR = "gitSearch/GET_USERS_ERROR";

export function getUsers(value) {
  return async (dispatch, _, ClientService) => {
    try {
      let userService = new ClientService.UserService(value);
      let users = await userService.getUsers();
      dispatch({ type: GET_USERS, payload: { users } });
    } catch (e) {
      dispatch({ type: GET_USERS_ERROR, payload: e.message });
    }
  };
}
