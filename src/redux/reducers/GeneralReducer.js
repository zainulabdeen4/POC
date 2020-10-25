import { REHYDRATE } from "redux-persist"
import {assets} from '../../assets/images'
import actionTypes from "../actionTypes"
import { LayoutAnimation } from "react-native"
let initialState = {
    loading: false,
    loadingKey: null,
    sessions: [{
        title:"This is how you love yourself",
        image:assets.image1,
        sessions:"4",
        time:"15 min"
    },
    {
        title:"Shame that isn't yours to carry",
        image:assets.image2,
        sessions:"1",
        time:"14 min"
    },
    {
        title:"Shame that isn't yours to carry",
        image:assets.image3,
        sessions:"4",
        time:"13 min"
    },
    {
        title:"This is how you love yourself",
        image:assets.image1,
        sessions:"5",
        time:"12 min"
    }],
}

export default GeneralReducer = (state = initialState, action) => {
    switch (action.type) {
        case REHYDRATE: {
            return state
        }
        case actionTypes.loaderOn: {
            return {
                ...state,
                loading: true
            }
        }
        case actionTypes.loaderOff: {
            return {
                ...state,
                loading: false
            }
        }
      
     
        default:
            return state;

    }
}
