import {SideBar_Toggle} from '../constant/ActionTypes';

const INITIAL_STATE = {
    open: false,
};




export const SideBarToggle = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SideBar_Toggle:
            return {
                ...state,
                open: action.payload,
            };

        default:
            return state;
    }
};
