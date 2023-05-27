// import RestUtil from "../../utils/rest/RestUtil";
// import Store from "../../redux/store";
// import { setLoading, setPendingApprovalTableData, setPendingRequestTableData } from "../../redux/actions/pendingApprovals";
// import { Constants } from "../../json/JsonHandler";
// const { API_CALL_TYPE_PENDING } = Constants;
// export default class PendingDataService {
//     private RestUtils: RestUtil;
//     constructor() {
//         this.RestUtils = new RestUtil();
//     }

//     public getPendingData = async function (url, dateFormatter, dateTimeToDate, type) {
//         Store.dispatch(setLoading(true));
//         let apiResponse = await this.RestUtils.get(url);
//         Store.dispatch(setLoading(false));
//         if (apiResponse && apiResponse.length) {
//             for (let res_i = 0; res_i < apiResponse.length; res_i++) {
//                 if (apiResponse[res_i].dueDate !== null) {
//                     apiResponse[res_i].dueDate = dateFormatter(apiResponse[res_i].dueDate);
//                 }
//                 if (apiResponse[res_i].createdDate !== null) {
//                     apiResponse[res_i].createdDate = dateTimeToDate(apiResponse[res_i].createdDate);
//                     apiResponse[res_i].createdDate = dateFormatter(apiResponse[res_i].createdDate);
//                 }
//             }
//             if (type == API_CALL_TYPE_PENDING['PENDING_APPROVALS']) {
//                 Store.dispatch(setPendingApprovalTableData(apiResponse))
//             } else if (API_CALL_TYPE_PENDING['PENDING_REQUESTS']) {
//                 Store.dispatch(setPendingRequestTableData(apiResponse))
//             }

//         } else {

//         }

//         return apiResponse;

//     }

//     public withdrawPendingRequest = async function (url, data, cb) {
//         let apiResponse = await this.RestUtils.put(url, data);
         
//         if (apiResponse.length == 0) {
//             cb(true)
//         } else {
//             cb(false)
//         }
//     }


// }