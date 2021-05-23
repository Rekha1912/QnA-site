import axios from 'axios';
import { setAlert } from './alert';
import { GET_QUESTS, QUEST_ERROR } from './types';

// Get quest
export const getQuests = () => async dispatch => {
    try {
        const res = await axios.get('/api/quests');
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