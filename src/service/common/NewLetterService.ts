// import Store from "../../redux/store";
// import RestUtil from "../../utils/rest/RestUtil";
// import { Message } from "../../utils/generic/Message";
// import { Config, APIs } from "../../json/JsonHandler";
// import { DateTimeUtil } from "../../utils/generic/DateTimeUtil";
// import { setLoading, setNewsLetterTableData } from "../../redux/actions/newsLetter";

// export default class NewLetterService {
//     restUtil = new RestUtil();
//     dateTimeUtil = new DateTimeUtil();

//     public getBlogs = async function () {
//       let result = new Response();
//       const newsletterConfig = Config.NEWSLETTER;
//       const PRODUCT = newsletterConfig.PRODUCT;
//       const CLIENT_ID = newsletterConfig.CLIENT_ID;
//       const url = Config.NEWSLETTER_backend + APIs.urls.Newsletter.getBlogs;
//       const CLIENT_SECRET_ACCESS_KEY = newsletterConfig.CLIENT_SECRET_ACCESS_KEY;
//       const response = await this.restUtil.postWithAuthHeader(url, { product: PRODUCT }, { PRODUCT, CLIENT_ID, CLIENT_SECRET_ACCESS_KEY });

//       if (response.statusCode == 203) {
//         result['message'] = new Message("error", response.description);
//       }
//       else {
//         response.forEach(blog => blog.date = this.dateTimeUtil.dateFormatter(blog.date));
//         Store.dispatch(setLoading(true));
//         Store.dispatch(setNewsLetterTableData(response))
//         Store.dispatch(setLoading(false));  
//       }
//       return response;
//     }
// }
