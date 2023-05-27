import { getHref, getPageParamsFromLink, generateHref } from "./LinkGenerator";
import { PAGES, SLOTS, navData, settings, REPORTS, ENTITIES } from "./Constants";
import { processBreadCrumbs, removeBreadCrumb, samePageClicked } from "./BreadCrumbs";

export { PAGES, SLOTS, navData, settings, REPORTS, ENTITIES, generateHref, getPageParamsFromLink, processBreadCrumbs, removeBreadCrumb, samePageClicked }

// // Following functions are navigation replacements for refactoring pages that require appController for redirection
// //export const redirectToLink = (link: string) => { window.location.href = link }

// TODO - Remove this function when tested with Smelter report and Pending blocks 
export const redirectWithHref = ({ target, currentTarget }) => {
  const { href } = target || currentTarget;
  if (href) { 
      window.location.assign(href);
  }
};
export const getHrefFromDOM = (event) => {
  event.preventDefault();
  const { href } = event.target || event.currentTarget;
  return href;
};
