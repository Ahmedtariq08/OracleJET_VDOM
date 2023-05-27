import { LOADING, SMELTER_DATA, SMELTER_LOOKUPS, MESSAGES, SELECTED_LOOKUP, METALS, STATUSES} from "../action-types/smelter-block-action-types"
import { Smelter } from "../../objects/Smelter"
import { Message } from "../../utils/generic/Message"

export const setLoading = (data: boolean) =>{
    return {
        type: LOADING,
        payload: data
    }
}

export const setSmelterData = (data: Smelter) =>{
    return {
        type: SMELTER_DATA,
        payload: data
    }
}

export const setSmelterLookups = (lookups: string[]) =>{
    return {
        type: SMELTER_LOOKUPS,
        payload: lookups
    }
}

export const setMessages = (messages: Message[]) =>{
    return {
        type: MESSAGES,
        payload: messages
    }
}

export const setSelectedLookup = (lookup: string) =>{
    return {
        type: SELECTED_LOOKUP,
        payload: lookup
    }
}

export const setMetals = (metals: any[]) =>{
    return {
        type: METALS,
        payload: metals
    }
}

export const setStatuses = (statuses: any[]) =>{
    return {
        type: STATUSES,
        payload: statuses
    }
} 