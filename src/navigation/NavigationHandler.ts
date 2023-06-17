import { getHref, getPageParamsFromLink, generateHref } from "./LinkGenerator";
import { PAGES, SLOTS, navData, settings, REPORTS, ENTITIES } from "./Constants";
import { processBreadCrumbs, removeBreadCrumb, samePageClicked } from "./BreadCrumbs";

export { PAGES, SLOTS, navData, settings, REPORTS, ENTITIES, generateHref, getPageParamsFromLink, processBreadCrumbs, removeBreadCrumb, samePageClicked }

export const getHrefFromDOM = (event) => {
  event.preventDefault();
  const href  = event.target.href || event.currentTarget.href;
  return href;
};

/**
 * @test Currently used for testing purposes only
 */
type Redirect =
| {page: "LOGIN" }
| {page: "DASHBOARD" }
| {page: "PRODUCT_MANAGEMENT"; params: {fetchNewlyAffectedObejcts?: "Item" | "Mpn" | "PartGroup"}}
| {page: "ITEM_BLOCK"; params: {itemId: number, itemNumber: string}}
| {page: "MPN_BLOCK"; params: {mpnNumber: number, mpartName: string}};

/**
 * @method redirectToPage - Takes dynamic arguements on the basis of page configuration
 *         Can be very useful for routing purposes across application using Core router
 */
const redirectToPage = <Page extends Redirect['page']>(
  ...args: Extract<Redirect, {page: Page}> extends {params: infer TParams}
? [page: Page, params: TParams]
: [page: Page]) => {
    //implement redirection here
    // console.log("redirection to :");
    // console.log(args[0]);
    // console.log(args[1]);
};

// redirectToPage("PRODUCT_MANAGEMENT", {fetchNewlyAffectedObejcts: "Item"});
// redirectToPage("PRODUCT_MANAGEMENT", {});
// redirectToPage("ITEM_BLOCK", {itemId: 34, itemNumber: "test1"});