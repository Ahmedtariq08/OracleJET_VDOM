import { LOADING, USER_INFO, USER_ROLES } from "../action-types/auth-action-types";

// set initial state of your redux store and use it to mount the component
const initState = () => {
    return {
        loading: false,
        userInfo: null,
        userRoles: null
    };
};

const itemSearch_reducer = (state = initState(), action: any) => {
    let newState = { ...state };

    switch (action.type) {
        case LOADING:
            setData(newState, action.payload, 'loading');
            break;
        case USER_INFO:
            setData(newState, action.payload, 'userInfo');
            break;
        case USER_ROLES:
            setData(newState, action.payload, 'userRoles');
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