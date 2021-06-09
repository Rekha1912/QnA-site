import axios from 'axios';
import { setAlert } from './alert';
import { GET_QUESTS, QUEST_ERROR, ADD_QUEST, ADD_ANS } from './types';

// Get quest
export const getQuests = (catName) => async dispatch => {
    try {
        const res = await axios.get('/api/quests?catname='+catName);
        dispatch({
            type: GET_QUESTS,
            payload: res.data
        });
    } catch (err) {
        dispatch ({
            type: QUEST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

// ADD quest
export const addQuests = FormData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.post('/api/quests/qpost', FormData, config);
        
        dispatch({
            type: ADD_QUEST,
            payload: res.data
        });
        dispatch(setAlert('Question Added', 'success'));
    } catch (err) {
        dispatch ({
            type: QUEST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// ADD ans
export const addAns = (questID, FormData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.post('/api/quests/ans/${questID}', FormData, config);
        
        dispatch({
            type: ADD_ANS,
            payload: res.data
        });
        dispatch(setAlert('Answer Added', 'success'));
    } catch (err) {
        dispatch ({
            type: QUEST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};