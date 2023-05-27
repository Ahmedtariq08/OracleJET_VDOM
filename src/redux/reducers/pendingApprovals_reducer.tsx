import { LOADING, PENDING_APPROVAL_DATA, PENDING_REQUEST_DATA } from "../action-types/pending-approvals-action-types";

// set initial state of your redux store and use it to mount the component
const initState = () => {
    return {
        loading: false,
        pendingApprovalsData: null,
        pendingRequestsData: null
    };
};

const pendingApprovals_reducer = (state = initState(), action: any) => {
    let newState = { ...state };

    switch (action.type) {
        case LOADING:
            setData(newState, action.payload, 'loading');
            break;
        case PENDING_APPROVAL_DATA:
            setData(newState, action.payload, 'pendingApprovalsData');
            break;
        case PENDING_REQUEST_DATA:
            setData(newState, action.payload, 'pendingRequestsData');
            break;
        default:
            break;
    }

    return newState;
};

const setData = (state: any, payload: any, key: any) => {
    state[key] = payload;
};

export default pendingApprovals_reducer;