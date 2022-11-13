import {
    //import all the actions for user context api

    SIGN_UP,
    RESET_PASSWORD,
    SIGNIN_SUCCESS,
    USER_LOADED_SUCCESS
    // AUTH,
    // AUTH_ERROR,
    // EDIT_USER

} from './actions'




//create the Auth reducer

const AuthReducers = (state, action) => {

    switch (action.type) {

        case SIGN_UP:
            return {
                ...state,
                user: { email: action.payload.email }
            }

        case RESET_PASSWORD:
            return {
                ...state,
                user: { email: action.payload }
            }

        case SIGNIN_SUCCESS:
            sessionStorage.setItem('ctoken', action.payload)
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
            }

        case USER_LOADED_SUCCESS:
            return{
                ...state,
                isAuthenticated: true,
            }




        default:
            return state;
    }


}



export default AuthReducers;