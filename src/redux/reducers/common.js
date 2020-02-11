import { TOGGLE_LOADING } from '../constants/consts';

const initialState = {
    isLoading: true
};

function commonReducer(state = initialState, action) {
    if(action.type === TOGGLE_LOADING){
        return Object.assign({}, state, {
            isLoading : action.payload
        });
    }
    return state;
};

export default commonReducer;