import { LOADING, MESSAGES, USERS, ATTRIBUTE_MAPPING } from "../action-types/admin-panel-action-types";
import { Message} from "../../utils/generic/Message";
import { User } from "../../objects/AdminPanel/User";
import { MappedAttribute } from "../../objects/AdminPanel/AttributeMapping";

const initState = () => {
    const state: { loading: boolean, messages: Message[], users: User[], attributeMappings: Map<string, MappedAttribute[]>} = {
        loading: false,
        messages: [],
        users: [],
        attributeMappings: new Map<string, MappedAttribute[]>()
    }
    return state;
};

const adminPanel_reducer = (state = initState(), action: any) => {
    let newState = { ...state };
    switch (action.type) {
        case LOADING:
            setData(newState, action.payload, 'loading');
            break;
        case MESSAGES:
            setData(newState, action.payload, 'messages');
            break;
        case USERS:
            setData(newState, action.payload, 'users');
            break;
        case ATTRIBUTE_MAPPING:
            const {entity, attributes} = action.payload;
            if (!newState.attributeMappings.has(entity)) {
                newState.attributeMappings.set(entity, attributes)
            }
            break;
        default:
            break;
    }
    return newState;
};

const setData = (state: any, payload: any, key: any) => {
    state[key] = payload;
};

export default adminPanel_reducer;