
import { useReducer } from "react";
import { GET_PLANS } from "./actions";
import PlanContext from "./context";
import planReducers from "./reducer";





const PlanState = (props) => {


    const initialState = {
        loadingplan: false,
        plans:null
    }


    //to call Uireducers with dispatch
    const [state, dispatch] = useReducer(planReducers, initialState);



    //Global functions go down here (with Auth API calls)






    return (
        <PlanContext.Provider value={{
            loadingplan: state.loadingplan,
            plans:state.plans,

        }}>

            {/* to make the fuctions and state availabe globally */}
            {props.children}

        </PlanContext.Provider>
    )


}


export default PlanState;