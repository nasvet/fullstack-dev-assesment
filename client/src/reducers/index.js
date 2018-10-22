import { combineReducers } from 'redux';
import CampaignsReducer from './reducer_campaigns';

const rootReducer = combineReducers({
  campaigns: CampaignsReducer
});

export default rootReducer;