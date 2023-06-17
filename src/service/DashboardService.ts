import RestUtil from "../utils/rest/RestUtil";
import { Config, APIs, Constants } from "../json/JsonHandler";
import { generateHref, PAGES, navData} from "../navigation/NavigationHandler";
import { getUserId, getRoles, isAdmin, isManager, isSupplier } from "./auth/Permissions";
import { roleToPageMapping } from "../navigation/Constants";

const RestUtils = new RestUtil();
const baseUrl = APIs.urls.EGNCMain;
const URLS = {
    ITEMS: Config.EGNC_backend + baseUrl.Item.base + baseUrl.Item.extensions.search,
    MPNS: Config.EGNC_backend + baseUrl["Manufacturer Part"].base + baseUrl["Manufacturer Part"].extensions.search,
    PART_GROUP: Config.EGNC_backend + baseUrl["Part Group"].base + baseUrl["Part Group"].extensions.search,
    PENDING_APPROVALS: Config.EGNC_backend + baseUrl.Declaration.base + `?state=${Constants.WORKFLOWSTATES.OPEN_TO_MANAGER}`,
    PENDING_REQUESTS: Config.EGNC_backend + baseUrl.Declaration.base + `?state=${Constants.WORKFLOWSTATES.OPEN_TO_SUPPLIER}`
}

export type DashboardCardRow = {
    label: string, 
    count: number,
    superscript?: boolean,
    class: string,
    visibility: boolean,
    link: string
}
export type ConveyorBeltCard = {
    order: number,
    icon: string, 
    label: string,
    link: string 
}
export class DashboardService {

    public arePermissionsSet = () : boolean => {
        return ![null, undefined].includes(getUserId());
    }

    public getConveyorBeltCards = () : ConveyorBeltCard[] => {
        const roles = getRoles();
        let allPages: string[] = [];
        roles.forEach(role => {
            allPages = allPages.concat(roleToPageMapping.get(role));    //get all possible pages
        });
        const uniquePages = [...new Set(allPages)]; //generate unique pages
        let cards: ConveyorBeltCard[] = [];
        navData.forEach(data => {
            if (uniquePages.includes(data.path)) {   //create cards from navData
                const detail = data.detail;
                cards.push({order: data.order, icon: detail.iconClass, label: detail.label, link: generateHref(data.path)})
            }
        });
        cards.sort((a, b) => a.order - b.order);
        return cards;
    }
    

    public getObjectsNeedingDeclarationCards = async () : Promise<DashboardCardRow[]> => {
        if (isManager()) {
            let cards: DashboardCardRow[] = [];
            const todaysDate = new Date();
            const sevenDaysAgo = new Date();
            const userId = getUserId();
            sevenDaysAgo.setDate(todaysDate.getDate() - 6);
            const data = { page: 0, size: 100, userId, affectedObjectId: ["", "null"] };
            const [itemVisible, mpnVisible, partGroupVisible] = Object.values(Config.OBJECT_card);
            const [startDate, endDate] = [sevenDaysAgo, todaysDate].map(d => d.toISOString().split('T')[0]);
            const dataWithCreationDate = { ...data, creationDate: [[startDate, endDate], "between"] };
            const dataWithInsertionDate = { ...data, insertionDate: [[startDate, endDate], "between"] };
    
            const [items, mpns, partGroups] = await Promise.all([this.generatePostCall(URLS.ITEMS, dataWithInsertionDate), 
                this.generatePostCall(URLS.MPNS, dataWithInsertionDate), this.generatePostCall(URLS.PART_GROUP, dataWithCreationDate)]);
            const mpnCount = mpnVisible ? (await mpns.json()).result.length : 0;
            const itemCount = itemVisible ? (await items.json()).result.length : 0;
            const partGroupCount = partGroupVisible ? (await partGroups.json()).result.length : 0;
            
            cards.push({label: "Items", count: itemCount, superscript: itemCount == 100, class: "oj-text-color-danger", visibility: itemVisible, link: generateHref(PAGES.ITEM_SEARCH, undefined, undefined, {fetchNewlyAddedAffectedObject: "Item"}) })
            cards.push({label: "Manufacturer Parts", count: mpnCount, superscript: mpnCount == 100, class: "oj-text-color-secondary", visibility: mpnVisible, link: generateHref(PAGES.ITEM_SEARCH, undefined, undefined, {fetchNewlyAddedAffectedObject: "Manufacturer Part"}) })
            cards.push({label: "Part Groups", count: partGroupCount, superscript: partGroupCount == 100, class: "oj-text-color-warning", visibility: partGroupVisible, link: generateHref(PAGES.ITEM_SEARCH, undefined, undefined, {fetchNewlyAddedAffectedObject: "Part Group"}) })
            return cards.filter(card => card.visibility);
        } 
        return undefined;
    }

    public getPendingDataCards = async () : Promise<DashboardCardRow[]> => {
        let cards: DashboardCardRow[] = undefined;
        if (isManager() || isAdmin()) {
            const [approvals, requests] = await Promise.all([this.loadPendingApprovalsCount(), this.loadPendingRequestsCount()]);
            cards = [...approvals, ...requests];
        } else if (isSupplier()) {
            cards = await this.loadPendingRequestsCount();
        }
        return cards;
    }

    private generatePostCall = (url: string, body: Object): Promise<Response> => {
        return fetch(url, { credentials: "include", method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)})
    }

    private loadPendingRequestsCount = async () => {
        let pendingReqCards: DashboardCardRow[] = [];
        const isCardVisible = Config.THINGS_card.pendingReq; 
        if (isCardVisible) {
          var response = await RestUtils.get(URLS.PENDING_REQUESTS);
          pendingReqCards.push({label: "Pending Requests", count: response.length, class: "oj-text-color-danger", link: generateHref(PAGES.PENDING_REQUESTS), visibility: isCardVisible});
        }
        return pendingReqCards;
    }

    private loadPendingApprovalsCount = async () => {
        let pendingReqCards: DashboardCardRow[] = [];
        const isCardVisible = Config.THINGS_card.pendingApprovals; 
        if (isCardVisible) {
          var response = await RestUtils.get(URLS.PENDING_APPROVALS);
          pendingReqCards.push({label: "Pending Approvals", count: response.length, class: "oj-text-color-success", link: generateHref(PAGES.PENDING_APPROVALS), visibility: isCardVisible});
        }
        return pendingReqCards;
    }

}