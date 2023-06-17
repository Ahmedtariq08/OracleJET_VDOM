import {settings, redirection, PAGES, navData } from "./Constants";
import { getHref } from "./LinkGenerator";
import { areObjectsEqual } from "../utils/generic/Generic";

const sessionEntry = "BreadCrumbs"
const entrySeperator = " - "
const pathSeperator = "/"
class BreadCrumb {
    entry: string;
    link: string;
    redirection: redirection;
   
    constructor (redirection: redirection) {
        this.entry = getPageEntry(redirection);
        this.link = getHref(redirection.page, redirection.params);
        this.redirection = redirection;
    }
}

export const processBreadCrumbs = (pageToBeProcessed: redirection) => {
    if(pageToBeProcessed.page == PAGES.DASHBOARD){emptyBreadCrumbs();}
    let sessionBreadCrumbs: BreadCrumb[] = JSON.parse(sessionStorage.getItem(sessionEntry));
    let breadCrumbsArray: BreadCrumb[] = (sessionBreadCrumbs) ? sessionBreadCrumbs : [new BreadCrumb({page: PAGES.DASHBOARD})];
    if (isSideBarPage(pageToBeProcessed.page)){
        if (breadCrumbsArray.length > 1){breadCrumbsArray.splice(1);}
    }
    if (!isPagePresent(breadCrumbsArray, pageToBeProcessed) && pageToBeProcessed.page !== PAGES.LOGIN){
        breadCrumbsArray.push(new BreadCrumb(pageToBeProcessed));
    }
    sessionStorage.setItem(sessionEntry, JSON.stringify(breadCrumbsArray));
    return breadCrumbsArray;
}

//Removes particular breadcrumb and following entries
export const removeBreadCrumb = (pageToBeProcessed: redirection) => {
    let sessionBreadCrumbs: BreadCrumb[] = JSON.parse(sessionStorage.getItem(sessionEntry));
    const index = sessionBreadCrumbs.findIndex(breadCrumb => {
        return breadCrumb.redirection.page === pageToBeProcessed.page &&
            JSON.stringify(breadCrumb.redirection.params) === JSON.stringify(pageToBeProcessed.params)});
    let newBreadCrumbs = sessionBreadCrumbs.slice(0, index);
    sessionStorage.setItem(sessionEntry, JSON.stringify(newBreadCrumbs));
    return newBreadCrumbs;
}

//Return true if breadcrumb clicked is the current page
export const samePageClicked = (breadCrumb: BreadCrumb) : boolean => {
    let sessionBreadCrumbs: BreadCrumb[] = JSON.parse(sessionStorage.getItem(sessionEntry));
    return getPageIndex(sessionBreadCrumbs, breadCrumb.redirection) == (sessionBreadCrumbs.length - 1);
}

const emptyBreadCrumbs = () => {
    if (sessionStorage.getItem(sessionEntry)){
        sessionStorage.removeItem(sessionEntry);
    }
}

const isPagePresent = (breadCrumbsArray: BreadCrumb[], pageToBeProcessed: redirection) : boolean => {
    return getPageIndex(breadCrumbsArray, pageToBeProcessed) != -1;
}

const getPageIndex = (breadCrumbsArray: BreadCrumb[], pageToBeProcessed: redirection) : number => {
    let index: number = -1;
    for (let i = 0; i < breadCrumbsArray.length; i++){
        let breadCrumb = breadCrumbsArray[i];
        if (pageToBeProcessed.page === breadCrumb.redirection.page){
            let params = pageToBeProcessed.params;
            let breadCrumbParams = breadCrumb.redirection.params;
            if ( params && breadCrumbParams){
                if (areObjectsEqual(params, breadCrumbParams)){
                    index = i;
                    break;
                }
            } else if (params == undefined || breadCrumbParams == undefined){
                index = i;
                break;
            }
        }
    }
    return index;
}

const getPageEntry = (pageToBeProcessed: redirection) => {
    let pageSettings = settings.get(pageToBeProcessed.page);
    let entry = pageSettings.displayName;
    for (let i = 0; i < pageSettings.displayParams.length; i++){
        if (i > 0){entry = entry.concat(entrySeperator);}
        let param = pageSettings[pageSettings.displayParams[i]];
        let pageParams = pageToBeProcessed.params;
        if (Array.isArray(param)){
            param.forEach(p => {
                if (pageParams[p]){
                    entry = entry.concat(pageParams[p]);
                }
            })
        } else {entry = entry.concat(pageToBeProcessed.params[param]);}
    }
    return entry;
}

//If page has order property
const isSideBarPage = (page: string) => {
    for (let i = 0; i < navData.length; i++){
        let currentData = navData[i];
        if (currentData.order){
            let path = currentData.path.split(pathSeperator)[0];
            if (path === page){
                return true;
            }
        }
    }
    return false;
}