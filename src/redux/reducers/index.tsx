import { combineReducers } from 'redux';
import itemSearch_reducer from "./itemSearch_reducer";
import auth_reducer from "./auth_reducer";
import pendingApprovals_reducer from "./pendingApprovals_reducer";
import exemptionBlock_reducer from './exemptionBlock_reducer';
import newsLetter_reducer from "./newsLetter_reducer";
import smelterReport_reducer from './smelterReport_reducer';
import smelterBlock_reducer from './smelterBlock_reducer';
import adminPanel_reducer from './adminPanel_reducer';

// import all your reducers here to combine them
const reducer = combineReducers({
    itemSearch_reducer,
    auth_reducer,
    pendingApprovals_reducer,
    exemptionBlock_reducer,
    smelterReport_reducer,
    smelterBlock_reducer,
    adminPanel_reducer,
    newsLetter_reducer
});

export default reducer;