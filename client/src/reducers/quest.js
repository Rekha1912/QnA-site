import { GET_QUESTS, QUEST_ERROR, ADD_QUEST, ADD_ANS } from '../actions/types';


const initialState = {
    quests: [],
    quest: null,
    auth: null,
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
        case ADD_QUEST:
            return {
                ...state,
                quests: [payload,...state.quests],
                loading: false
            };
        case QUEST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case ADD_ANS:
            return {
                ...state,
                quest: { ...state.quest, answers: payload },
                loading: false
            };
        default:
            return state;
    }
}