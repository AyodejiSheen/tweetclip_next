import {
    //import all the actions for ui context api
    SET_ALERT,
    REMOVE_ALERT,
    SWITCH_THEME

} from './actions'




//create the Auth reducer

const UiReducers = (state, action) => {

    switch (action.type) {

        case SET_ALERT:
            let res = action.payload
            return {
                ...state,
                alert: { ...alert, showAlert: true, msg: res.msg, type: res.type },
            }

        case REMOVE_ALERT:
            return {
                ...state,
                alert: { ...alert, showAlert: false, msg: null, type: null },
            }

        case SWITCH_THEME:
            return {
                ...state,
                isDark: !state.isDark
            }



        default:
            return state;

    }


}



export default UiReducers;