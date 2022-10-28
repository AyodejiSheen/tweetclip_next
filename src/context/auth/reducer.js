import {
  //import all the actions for user context api
  //   LOGIN,
  SIGN_UP,
  // SIGN_OUT,
  // AUTH,
  // AUTH_ERROR,
  // EDIT_USER
} from "./actions";

//create the Auth reducer

const AuthReducers = (state, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default AuthReducers;
