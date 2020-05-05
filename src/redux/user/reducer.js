import { Map } from "immutable";
import { GET_USERS } from "redux/user/actions";

const initState = new Map({
  token: "secret key get from .env",
});

export function userReducer(
  state = initState.merge({
    /* can set token */
  }),
  action
) {
  switch (action.type) {
    case GET_USERS:
      const { users } = action.payload;
      const { items } = users;
      return {
        ...state,
        users: items,
      };
    default:
      return state;
  }
}
