import {SideBar_Toggle,Filter_Case} from '../constant/ActionTypes';

export function setSideBarToggle(value) {

  return async (dispatch) => {
    dispatch({
      type: SideBar_Toggle,
      payload: value,
    });
  };
}
export function setFilterCase(value) {

  return async (dispatch) => {
    dispatch({
      type: Filter_Case,
      payload: value,
    });
  };
}
