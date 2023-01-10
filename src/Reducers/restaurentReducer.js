import {R_SUCCESS,R_FAIL} from '../constants/restaurentConstant';

export const restaurentListReducer=(state={restaurentList:[]},action)=>{
    switch(action.type){
        case R_SUCCESS:
            return {restaurentList:action.payload}

            case R_FAIL:
                return {restaurentList:action.error}

                default:
                    return state
    }
}