import { LOADING, PENDING_APPROVAL_DATA , PENDING_REQUEST_DATA} from "../action-types/pending-approvals-action-types";

// the actions will be dispatched here
export const setLoading = (data: boolean) => {
    return {
        type: LOADING,
        payload: data
    }
}

export const setPendingApprovalTableData = (data: any) => {
    return {
        type: PENDING_APPROVAL_DATA,
        payload: data
    }
}

export const setPendingRequestTableData = (data: any) => {
    return {
        type: PENDING_REQUEST_DATA,
        payload: data
    }
}