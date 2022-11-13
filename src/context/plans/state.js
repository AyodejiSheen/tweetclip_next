
import axios from "axios";
import { useReducer } from "react";
import { baseUrl } from "../../baseUrl";
import { GET_PLANS } from "./actions";
import PlanContext from "./context";
import planReducers from "./reducer";





const PlanState = (props) => {


    const initialState = {
        loadingplan: false,
        plans: null
    }


    //to call Uireducers with dispatch
    const [state, dispatch] = useReducer(planReducers, initialState);



    //Global functions go down here (with Auth API calls)
    const getPlans = async () => {
        await axios.get(`${baseUrl}/plan`)
            .then((response) => {
                console.log(response.data)
            }).catch((err) => {
                console.log(err)
            })
    }





    return (
        <PlanContext.Provider value={{
            loadingplan: state.loadingplan,
            plans: state.plans,
            getPlans,
        }}>

            {/* to make the fuctions and state availabe globally */}
            {props.children}

        </PlanContext.Provider>
    )


}


export default PlanState;