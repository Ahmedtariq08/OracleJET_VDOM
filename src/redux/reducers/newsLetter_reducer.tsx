import { LOADING, NEWS_LETTER_DATA} from "../action-types/newLetter-action-types";

// set initial state of your redux store and use it to mount the component
const initState = () => {
    return {
        loading: false,
        newsLetterData: null
    };
};

const itemSearch_reducer = (state = initState(), action: any) => {
    let newState = { ...state };

    switch (action.type) {
        case LOADING:
            setData(newState, action.payload, 'loading');
            break;
        case NEWS_LETTER_DATA:
            setData(newState, action.payload, 'newsLetterData');
            break;
        default:
            break;
    }

    return newState;
};

const setData = (state: any, payload: any, key: any) => {
    state[key] = payload;
};

export default itemSearch_reducer;