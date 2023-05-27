import { LOADING, MESSAGES, USERS, ATTRIBUTE_MAPPING} from "../action-types/admin-panel-action-types"
import { Message } from "../../utils/generic/Message";
import { User } from "../../objects/AdminPanel/User";
import { MappedAttribute } from "../../objects/AdminPanel/AttributeMapping";

export const setLoading = (data: boolean) =>{
    return {
        type: LOADING,
        payload: data
    }
}

export const setMessages = (messages: Message[]) =>{
    return {
        type: MESSAGES,
        payload: messages
    }
}

export const setUsers = (users: User[]) =>{
    return {
        type: USERS,
        payload: users
    }
}

export const setMapping = (entity: string, attributes: MappedAttribute[]) => {
    return {
        type: ATTRIBUTE_MAPPING,
        payload: {entity: entity, attributes: attributes}
    }
}