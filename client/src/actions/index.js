import axios from 'axios';

export const FETCH_CAMPAIGNS = 'fetch_campaigns';

const  ROOT_URL = 'http://127.0.0.1:5000';

export function fetchCampaigns() {
  const request = axios.get(`${ROOT_URL}/campaigns`)

  return {
    type: FETCH_CAMPAIGNS,
    payload: request
  };
}