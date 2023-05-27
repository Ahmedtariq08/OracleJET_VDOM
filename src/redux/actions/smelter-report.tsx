import { LOADING, SMELTER_REPORT_DATA} from "../action-types/smelter-report-action-types"

// the actions will be dispatched here
export const setLoading = (data: boolean) =>{
    return {
        type: LOADING,
        payload: data
    }
}

export const setSmelterReportTableData = (data: any) =>{
    return {
        type: SMELTER_REPORT_DATA,
        payload: data
    }
}