import {LOADING, TABLE_DATA} from "../action-types/itemSearch-action-types";

// the actions will be dispatched here
export const setSearchType = (data:boolean) =>{
    return {
        type: LOADING,
        payload: data
    }
}

export const setTableData = (data:any) =>{
    return {
        type: TABLE_DATA,
        payload: data
    }
}