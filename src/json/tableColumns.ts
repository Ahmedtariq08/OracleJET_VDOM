import { tableTemplates } from "./templates";
export const userTemplates = tableTemplates.ADMIN_PANEL.USERS;
export const smelterBlockTemplates = tableTemplates.SMELTER_BLOCK;
const attributeTemplates = tableTemplates.ADMIN_PANEL.ATTRIBUTE_MAPPING;

export const tableColumnsData = {
    PENDING_APPROVALS: [
      { headerText: "Request ID", Id: "id", field: "id", resizable: "enabled", template: "id" },
      { headerText: "Declaration Type", Id: "declaration_type", field: "workflowName", resizable: "enabled" },
      { headerText: "Description", Id: "description", resizable: "enabled", field: "declarationDescription" },
      { headerText: "Supplier", Id: "supplier", resizable: "enabled", field: "supplier" },
      { headerText: "Created By", Id: "createdBy", resizable: "enabled", field: "createdBy" },
      { headerText: "Created Date", Id: "createdDate", resizable: "enabled", field: "createdDate" },
      { headerText: "Due Date", Id: "dueDate", resizable: "enabled", field: "dueDate" }
    ],
    SMELTER_REPORT: [
      { headerText: "Smelter Id", Id: "smelterId", field: "smelterId", resizable: "enabled", template: "id" },
      { headerText: "Smelter Name", Id: "smelterName", field: "smelterName", resizable: "enabled" },
      { headerText: "Metal", Id: "metal", resizable: "enabled", field: "metal" },
      { headerText: "Smelter Id Source", Id: "source", resizable: "enabled", field: "source" },
      { headerText: "Street", Id: "street", resizable: "enabled", field: "street" },
      { headerText: "City", Id: "city", resizable: "enabled", field: "city" },
      { headerText: "Smelter Country", Id: "country", resizable: "enabled", field: "country" }
  ],
  SMELTER_BLOCK: {
    LOOKUPS: [ { headerText: "Lookup", headerClassName: "oj-sm-only-hide", className: "oj-sm-only-hide", resizable: "disabled", template: smelterBlockTemplates.lookup } ],
    WHEREUSED: {
      MANUFACTURER_PART: [ { headerText: "Declaration ID", resizable: "enabled", Id: smelterBlockTemplates.bundleId, template: smelterBlockTemplates.bundleId },
      { headerText: "Manufacturer Part Number", resizable: "enabled", Id: smelterBlockTemplates.mpartNumber, template: smelterBlockTemplates.mpartNumber },
      { headerText: "Manufacturer Number", resizable: "enabled", Id: smelterBlockTemplates.manufacturerNumber, template: smelterBlockTemplates.manufacturerNumber },
      { headerText: "Status", resizable: "enabled", Id: smelterBlockTemplates.status, template: smelterBlockTemplates.status } ],
      COMPANY: [{ headerText: "Declaration ID", resizable: "enabled", Id: smelterBlockTemplates.bundleId, template: smelterBlockTemplates.bundleId },
      { headerText: "Company", resizable: "enabled", Id: smelterBlockTemplates.manufacturerName, template: smelterBlockTemplates.manufacturerName },
      { headerText: "Status", resizable: "enabled", Id: smelterBlockTemplates.status, template: smelterBlockTemplates.status }]
    }
  },
  ADMIN_PANEL: {
    USERS: 
       [{ headerText: "Name", Id: userTemplates.NAME, field: userTemplates.NAME, resizable: "enabled", template: userTemplates.NAME, sortable:"disabled"}, 
        { headerText: "Username", Id: userTemplates.USERNAME, field: userTemplates.USERNAME, resizable: "enabled", template: userTemplates.USERNAME, sortable:"disabled", className: "oj-read-only",},
        { headerText: "Email Address", Id: userTemplates.EMAIL, field: userTemplates.EMAIL, resizable: "enabled", template: userTemplates.EMAIL, sortable:"disabled"}, 
        { headerText: "Phone #", Id: userTemplates.PHONE, field: userTemplates.PHONE, resizable: "enabled", template: userTemplates.PHONE, sortable:"disabled"},
        { headerText: "Company", Id: userTemplates.COMPANY, field: userTemplates.COMPANY, resizable: "enabled", template: userTemplates.COMPANY, sortable:"disabled"},
        { headerText: "Business Title", Id: userTemplates.BUSINESS_TITLE, field: userTemplates.BUSINESS_TITLE, resizable: "enabled", template: userTemplates.BUSINESS_TITLE, sortable:"disabled"},
        { headerText: "Roles", Id: userTemplates.ROLES, field: userTemplates.ROLES, resizable: "enabled", template: userTemplates.ROLES, sortable:"disabled"},
        { headerText: "Active", Id: userTemplates.ACTIVE, field: userTemplates.ACTIVE, resizable: "enabled", template: userTemplates.ACTIVE, sortable:"disabled",width:"8%"}
      ],
    ATTRIBUTE_MAPPING:
      [{ headerText: "Attibute", Id: attributeTemplates.ATTRIBUTE, field: attributeTemplates.ATTRIBUTE, resizable: "enabled", template: attributeTemplates.ATTRIBUTE, sortable:"disabled", className: "oj-read-only"},
      { headerText: "Name", Id: attributeTemplates.NAME, field: attributeTemplates.NAME, resizable: "enabled", template: attributeTemplates.NAME, sortable:"disabled"},
      { headerText: "Read Only", Id: attributeTemplates.READONLY, field: attributeTemplates.READONLY, resizable: "enabled", template: attributeTemplates.READONLY, sortable:"disabled"},
      { headerText: "Required", Id: attributeTemplates.REQUIRED, field: attributeTemplates.REQUIRED, resizable: "enabled", template: attributeTemplates.REQUIRED, sortable:"disabled"},
      { headerText: "Type", Id: attributeTemplates.TYPE, field: attributeTemplates.TYPE, resizable: "enabled", template: attributeTemplates.TYPE, sortable:"disabled"},
      { headerText: "Possible Values", Id: attributeTemplates.POSSIBLE_VALUES, field: attributeTemplates.POSSIBLE_VALUES, resizable: "enabled", template: attributeTemplates.POSSIBLE_VALUES, sortable:"disabled"}
      ]
    },
  ATTACHMENTS: [
    { headerText: "File Name", Id: "fileName", template: "fileName", headerClassName: "oj-sm-only-hide", className: "oj-sm-only-hide", resizable: "enabled" },
    { headerText: "File Extension", Id: "fileExtension", template: "fileExtension", resizable: "enabled" },
    { headerText: "File Type", Id: "fileType", template: "fileType", resizable: "enabled" }
  ]
}