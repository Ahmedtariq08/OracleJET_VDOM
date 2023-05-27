import { LOADING, NEWS_LETTER_DATA } from "../action-types/newLetter-action-types";


// the actions will be dispatched here
export const setLoading = (data: boolean) => {
    return {
        type: LOADING,
        payload: data
    }
}

export const setNewsLetterTableData = (data: any) => {
    return {
        type: NEWS_LETTER_DATA,
        payload: data
    }
}