import { GET_QUESTS, QUEST_ERROR } from '../actions/types';


const initialState = {
    quests: [],
    quest: null,
    loading: true,
    error:{}
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_QUESTS:
            return {
                ...state,
                quests: payload,
                loading: false
            };
        case QUEST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}