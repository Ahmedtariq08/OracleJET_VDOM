import { LOADING, EXEMPTION_DATA} from "../action-types/exemption-block-action-types"
import { Exemption } from "../../objects/Exemption"


// the actions will be dispatched here
export const setLoading = (data: boolean) =>{
    return {
        type: LOADING,
        payload: data
    }
}

export const setExemptionData = (data: Exemption) =>{
    return {
        type: EXEMPTION_DATA,
        payload: data
    }
}