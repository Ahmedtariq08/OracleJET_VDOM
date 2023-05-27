import { LOADING, SMELTER_DATA, SMELTER_LOOKUPS, MESSAGES, SELECTED_LOOKUP, METALS, STATUSES } from "../action-types/smelter-block-action-types";
import { Smelter } from "../../objects/Smelter";
import { Message} from "../../utils/generic/Message";

const initState = () => {
    const smetlerState: { loading: boolean, smelterData: Smelter, smelterLookups: string[], 
        messages: Message[], selectedLookup: string, metals: any[], statuses: []} = {
        loading: false,
        smelterData: null,
        smelterLookups: [],
        messages: [],
        selectedLookup: null,
        metals: [],
        statuses: []
    }
    return smetlerState;
};

const smelterBlock_reducer = (state = initState(), action: any) => {
    let newState = { ...state };
    switch (action.type) {
        case LOADING:
            setData(newState, action.payload, 'loading');
            break;
        case SMELTER_DATA:
            setData(newState, action.payload, 'smelterData');
            break;
        case SMELTER_LOOKUPS:
            setData(newState, action.payload, 'smelterLookups');
            break;
        case MESSAGES:
            setData(newState, action.payload, 'messages');
            break;
        case SELECTED_LOOKUP:
        setData(newState, action.payload, 'selectedLookup');
            break;
        case METALS:
            setData(newState, action.payload, 'metals');
            break;
        case STATUSES:
            setData(newState, action.payload, 'statuses');
            break;
        default:
            break;
    }
    return newState;
};

const setData = (state: any, payload: any, key: any) => {
    state[key] = payload;
};

export default smelterBlock_reducer;