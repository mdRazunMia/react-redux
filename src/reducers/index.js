import changeTheNumber from './changeNumberReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    changeTheNumber: changeTheNumber
});

export default rootReducer;