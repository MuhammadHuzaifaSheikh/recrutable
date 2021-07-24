import {SideBarToggle} from './SideBarToggle';
import {FilterCase} from './FilterCase';

import { combineReducers } from 'redux';

export default combineReducers({
    sideBarToggle: SideBarToggle,
    filterCase: FilterCase,
});