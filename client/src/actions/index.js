import axios from 'axios';

export const FETCH_COMPAIGNS = 'fetch_compaigns';

const  ROOT_URL = 'http://127.0.0.1:5000';

export function fetchCompaigns() {
  const request = axios.get(`${ROOT_URL}/compaigns`)

  return {
    type: FETCH_COMPAIGNS,
    payload: request
  };
}