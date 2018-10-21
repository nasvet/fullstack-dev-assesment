import _ from 'lodash';
import { FETCH_COMPAIGNS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_COMPAIGNS:
      return _.mapKeys(action.payload.data.compaigns, 'id');
    default:
      return state;
  }
}