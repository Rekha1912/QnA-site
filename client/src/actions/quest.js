import axios from 'axios';
import { setAlert } from './alert';
import { GET_QUESTS, QUEST_ERROR, ADD_QUEST } from './types';

// Get quest
export const getQuests = () => async dispatch => {
    try {
        const res = await axios.get('/api/quests?catname=USA');
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
        const res = await axios.post('/api/quests', FormData, config);
        
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