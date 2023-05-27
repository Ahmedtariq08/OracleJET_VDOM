import { LOADING, SMELTER_REPORT_DATA} from "../action-types/smelter-report-action-types"

// set initial state of your redux store and use it to mount the component
const initState = () => {
    return {
        loading: false,
        smelterReportData: null
    };
};

const smelterReport_reducer = (state = initState(), action: any) => {
    let newState = { ...state };

    switch (action.type) {
        case LOADING:
            setData(newState, action.payload, 'loading');
            break;
        case SMELTER_REPORT_DATA:
            setData(newState, action.payload, 'smelterReportData');
            break;
        default:
            break;
    }

    return newState;
};

const setData = (state: any, payload: any, key: any) => {
    state[key] = payload;
};

export default smelterReport_reducer;