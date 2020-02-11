import { TOGGLE_LOADING } from '../constants/consts';

export function toggleLoading(payload) {    
    return { type: TOGGLE_LOADING, payload };
};