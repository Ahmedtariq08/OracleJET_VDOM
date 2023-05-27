import {LOADING, USER_INFO, USER_ROLES} from "../action-types/auth-action-types";


export const setUserInfo = (data:any) =>{
    return {
        type: USER_INFO,
        payload: data
    }
}


export const setUserRoles = (data:any) =>{
    return {
        type: USER_ROLES,
        payload: data
    }
}
