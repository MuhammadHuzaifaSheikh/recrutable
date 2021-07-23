import {SideBar_Toggle} from '../constant/ActionTypes';
export function setSideBarToggle(value) {

  return async (dispatch) => {
    dispatch({
      type: SideBar_Toggle,
      payload: value,
    });
  };
}
