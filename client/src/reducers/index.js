import { combineReducers } from 'redux';
import CompaignsReducer from './reducer_compaigns';

const rootReducer = combineReducers({
  compaigns: CompaignsReducer
});

export default rootReducer;