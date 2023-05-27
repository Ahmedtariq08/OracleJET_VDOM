import { Icons } from "../json/JsonHandler";

export type redirection = {page: string, params?: {}};
type pageSetting = {id? : string | string[], number?: string | string[], name?: string | string[], displayName: string, displayParams:string[]}

export const PAGES = {
    LOGIN: "login",
    RESET_PASSWORD: "reset-password",
    DASHBOARD: "dashboard",
    ITEM_SEARCH: "item-search",
    PENDING_REQUESTS : "pending-requests",
    PENDING_APPROVALS : "pending-approvals",
    ITEM_BLOCK: "item-block",
    SUBSTANCE_BLOCK: "substance-block",
    SUBSTANCEGROUP_BLOCK: "substanceGroup-block",
    SPECIFICATION_BLOCK: "specification-block",
    PARTGROUP_BLOCK: "partGroup-block",
    EXEMPTION_BLOCK: "exemption-block",
    SMELTER_BLOCK: "smelter-block",
    MANUFACTURER_BLOCK: "mpart-block",
    DECLARATION_BLOCK: "declaration-block",
    AML_REPORT: "aml-report",
    BOM_REPORT: "bom-report",
    FMD_REPORT: "fmd-report",
    SMELTER_REPORT:"smelter-report",
    CLASSD: "class-d",
    CLASSC: "class-c",
    CMRT_BLOCK: "cmrt-block",
    // USERS: "users",   //TODO - Remove Users
    COPYBOS: "copy-bos",
    ADMIN_PANEL: "admin-panel"
}

export const navData = [
    { path: "", redirect: PAGES.LOGIN },
    { path: PAGES.LOGIN, detail: {}},
    { path: PAGES.RESET_PASSWORD, detail: {} },
    { path: PAGES.DASHBOARD, detail: {} },
    { path: PAGES.ITEM_SEARCH, detail: { label: "Product Management", iconClass: Icons.icons.ProductManagement }, order: 1 },
    { path: PAGES.PENDING_REQUESTS, detail: { label: "Pending Requests", iconClass: Icons.icons.pendingRequests }, order: 2 },
    { path: PAGES.PENDING_APPROVALS, detail: { label: "Pending Approvals", iconClass: Icons.icons.pendingApprovals }, order: 3 },
    // DO NOT CHANGE THE ABOVE ROWS
    // ==============================

    // { path: "searches", detail: { label: "Searches", iconClass: "oj-ux-ico-search" } },
    // { path: "jobs", detail: { label: "Jobs", iconClass: "oj-ux-ico-translation-job" } },
    { path: PAGES.ITEM_BLOCK, detail: {} },
    { path: PAGES.SUBSTANCE_BLOCK, detail: {} },
    { path: PAGES.SUBSTANCEGROUP_BLOCK, detail: {} },
    { path: PAGES.SPECIFICATION_BLOCK, detail: {} },
    { path: PAGES.PARTGROUP_BLOCK, detail: {} },
    { path: PAGES.EXEMPTION_BLOCK, detail: {} },
    { path: PAGES.SMELTER_BLOCK, detail: {} },
    { path: PAGES.MANUFACTURER_BLOCK + "/{manufacturerPN}/{manufacturerNumber}", detail: {} },
    { path: PAGES.DECLARATION_BLOCK + "/{id}", detail: {} },
    { path: PAGES.AML_REPORT + "/{itemId}", detail: {} },
    { path: PAGES.BOM_REPORT + "/{itemId}", detail: {} },
    { path: PAGES.FMD_REPORT + "/{itemId}", detail: {} },
    { path: PAGES.SMELTER_REPORT + "/{itemId}", detail: {} },
    { path: PAGES.CMRT_BLOCK + "/{declarationId}", detail: {} },
    { path: PAGES.CLASSD + "/{declarationId}/{manufacturerNumber}", detail: {} },
    { path: PAGES.CLASSC + "/{declarationId}/{manufacturerNumber}", detail: {} },
    { path: PAGES.COPYBOS + "/{itemId}/{itemNumber}", detail: {} },

    
    // ==============================
    // DO NOT CHANGE THE LAST ROW
    // { path: PAGES.USERS, detail: { label: "Users", iconClass: Icons.icons.users }, order: 4 },
    { path: PAGES.ADMIN_PANEL, detail: { label: "Admin Panel", iconClass: Icons.icons.adminPanel }, order: 4 },
];

export const settings: Map<string, pageSetting> = new Map([
    [PAGES.LOGIN, { displayName: "Login", displayParams: [] }],
    [PAGES.RESET_PASSWORD, { displayName: "Reset Password", displayParams: [] }],
    [PAGES.ADMIN_PANEL, { displayName: "Admin Panel", displayParams: [] }],
    // [PAGES.USERS, { displayName: "Users", displayParams: [] }],
    [PAGES.DASHBOARD, { displayName: "Dashboard ", displayParams: [] }],
    [PAGES.ITEM_SEARCH, { displayName: "Product Management", displayParams: [] }],
    [PAGES.PENDING_REQUESTS, { displayName: "Pending Requests", displayParams: [] }],
    [PAGES.PENDING_APPROVALS, { displayName: "Pending Approvals", displayParams: [] }],
    [PAGES.DECLARATION_BLOCK, { id: "declarationId", displayName: "Declaration : ", displayParams: [ "id" ] }],
    [PAGES.AML_REPORT, { id: "itemId", number: "itemNumber", displayName: "AML Report: ", displayParams: [ "number" ] }],
    [PAGES.BOM_REPORT, { id: "itemId", number: "itemNumber", displayName: "BOM Report: ", displayParams: [ "number" ] }],
    [PAGES.FMD_REPORT, { id: "itemId", number: "itemNumber", displayName: "FMD Report: ", displayParams: [ "number" ] }],
    [PAGES.SMELTER_REPORT, { id: "itemId", number: "itemNumber", displayName: "Smelter Report: ", displayParams: [ "number" ] }],
    [PAGES.ITEM_BLOCK, { id: "itemId", number: "itemNumber", displayName: "Item : ", displayParams: [ "number" ] }],
    [PAGES.SUBSTANCE_BLOCK, { id: "substanceId", number: "substanceName", displayName: "Substance : ", displayParams: [ "number" ] }],
    [PAGES.PARTGROUP_BLOCK, { id: "partGroupId", number: "partGroupName", displayName: "Part Group : ", displayParams: [ "number" ] }],
    [PAGES.EXEMPTION_BLOCK, { id: "exemptionId", number: "exemptionNumber", displayName: "Exemption : ", displayParams: [ "number" ] }],
    [PAGES.SUBSTANCEGROUP_BLOCK, { id: "substanceId", number: "substanceName", displayName: "Substance Group : ", displayParams: [ "number" ] }],
    [PAGES.SPECIFICATION_BLOCK, { id: "specificationId", number: "specificationName", displayName: "Specification : ", displayParams: [ "number" ] }],
    [PAGES.MANUFACTURER_BLOCK, { id: "manufacturerPartNumber", number: "manufacturerNumber", displayName: "Manufacturer Part : ", displayParams: [ "id" ] }],
    [PAGES.SMELTER_BLOCK, { id: "smelterId", number: "smelterName", displayName: "Smelter : ", displayParams: [ "id" ] }],
    [PAGES.CMRT_BLOCK, { id: "declarationId", displayName: "CMRT Block : ", displayParams: [ "id" ] }],
    [PAGES.CLASSD, { id: "declarationId", number: ["manufacturerPartNumber", "partGroup", "itemNumber"], name: "specification", displayName: "Affected Object : ", displayParams: [ "number", "name" ] }],
    [PAGES.CLASSC, { id: "declarationId", number: ["manufacturerPartNumber", "partGroup", "itemNumber"], name: "specification", displayName: "Affected Object : ", displayParams: [ "number", "name" ] }],
    [PAGES.COPYBOS, { id: ["itemId", "partGroupId", "manufacturerPartNumber"], number: ["manufacturerNumber", "partGroup", "itemNumber"], displayName: "Copy BOS : ", displayParams: [ "number"] }],
]);

export const SLOTS = {
    DESCRIPTION: "desc",
    AML: "aml",
    SPECIFICATION: "specification",
    WHEREUSED: "whereused",
    BOM: "bom",
    ITEM: "item",
    DECLARATION: "declaration",
    MPN: "mpn",
    SUBSTANCE: "Substance",
    EXEMPTION: "Exemption",
    PARTGROUP: "part group",
    ATTACHMENT: "attachment",
    AFFECTEDOBJECTS: "Affected Objects",
    WORKFLOWHISTORY: "Workflow History",
    CHILDSPECIFICATION: "Child Specification",
    LOOKUP: "lookup",
    ADMIN_PANEL: {
        USERS: "users",
        ATTRIBUTE_MAPPING: "attributeMapping",
        SSO: "sso",
        CONFIG: "config"
    }
}
export const REPORTS: any = {
    AML: {id: "amlReport", label: "AML Report"},
    BOM: {id: "bomReport", label: "BOM Report"},
    FMD: {id: "fmdReport", label: "Full Material Compliance Report"},
    SMELTER: {id: "smelterReport", label: "Smelter Report"},
}
export const ENTITIES: any = {
    ITEM: {value: "item", label: "Item", icon: Icons.icons.itemWithoutBom},
    DECLARATION: {value: "declaration", label: "Declaration", icon: Icons.icons.declaration},
    SUBSTANCE: {value: "substance", label: "Substance", icon: Icons.icons.substance},
    SUBSTANCEGROUP: {value: "substance group", label: "Substance Group"},
    MANUFACTURER: {value: "manufacturer", label: "Manufacturer Part"},
    EXEMPTION: {value: "exemption", label: "Exemption"},
    PARTGROUP: {value: "part group", label: "Part Group"},
    SPECIFICATION: {value: "specification", label: "Specification"},
    SMELTER: {value: "smelter", label: "Smelter"},
    COMPANY: {value: "company", label: "Company"},
    AFFECTED_OBJECT: {value: "affectedObject", label: "Affected Object", icon: Icons.blockIcons.affectedObjects},
}