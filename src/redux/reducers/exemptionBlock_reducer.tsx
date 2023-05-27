import { LOADING, EXEMPTION_DATA } from "../action-types/exemption-block-action-types";

// set initial state of your redux store and use it to mount the component
const initState = () => {
    return {
        loading: false,
        exemptionData: null
    };
};

const exemptionBlock_reducer = (state = initState(), action: any) => {
    let newState = { ...state };
    switch (action.type) {
        case LOADING:
            setData(newState, action.payload, 'loading');
            break;
        case EXEMPTION_DATA:
            setData(newState, action.payload, 'exemptionData');
            break;
        default:
            break;
    }
    return newState;
};

const setData = (state: any, payload: any, key: any) => {
    state[key] = payload;
};

export default exemptionBlock_reducer;