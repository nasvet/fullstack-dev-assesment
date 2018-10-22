import _ from 'lodash';
import { FETCH_CAMPAIGNS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CAMPAIGNS:
      return _.mapKeys(action.payload.data.campaigns, 'id');
    default:
      return state;
  }
}