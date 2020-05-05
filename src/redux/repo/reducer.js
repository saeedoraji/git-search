import { Map } from "immutable";
import { GET_USERS_REPO } from "redux/repo/actions";

const initState = new Map({
  token: "secret key get from .env",
});

export function repoReducer(
  state = initState.merge({
    /* can set token */
  }),
  action
) {
  switch (action.type) {
    case GET_USERS_REPO:
      const { repos } = action.payload;
      return {
        ...state,
        repos,
      };
    default:
      return state;
  }
}
