import {
    //import all the actions for ui context api
    SET_ALERT,
    REMOVE_ALERT

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



        default:
            return state;

    }


}



export default UiReducers;