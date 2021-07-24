import {Filter_Case} from '../constant/ActionTypes';

const INITIAL_STATE = {
    type: 'all',
};




export const FilterCase = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Filter_Case:
            return {
                ...state,
                type: action.payload,
            };

        default:
            return state;
    }
};
