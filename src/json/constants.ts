export const Constants = {
  COMPLIANT: "Compliant",
  NONCOMPLIANT: "Non-Compliant",
  MISSINGINFO: "Missing Information",
  NOTAPPLICABLE: "Not applicable",
  EXEMPT: "Exempt",
  DECLARATION: "Declaration",
  SUBPART: "Subpart",
  MATERIAL: "Material",
  SUBSTANCE: "Substance",
  SUBSTANCEGROUP: "Substance Group",
  MPN: "manufacturerPN",
  UPDATEBUNDLEINFO: "UpdateBundleInfo",
  ADDAFFECTEDOBJECTS: "addAffectedObjects",
  UPDATEDECLARATIONSCOPE: "UpdateDeclarationScope",
  PartLevel: "Part Level",
  HomogenousMaterialLevel: "Homogeneous Material Level",
  IPC1752ADeclaration: "IPC 1752A Declaration",
  SAVECMRTCOMPOSITION: "saveCmrtComposition",
  SAVEHOMOGENEOUSCOMPOSITION: "saveHomogeneousComposition",
  CMRT_DECLARATION: "CMRT",
  ACTIVEARCHIVEAFFECTEDOBJECTS: "activeArchiveAffectedObjects",
  ROLES: {
    ADMIN: "ROLE_Admin",
    COMPLIANCE_MANAGER: "ROLE_Compliance Manager",
    SUPPLIER: "ROLE_Supplier",
    TITLE_BLOCK_VIEWER: "ROLE_Title Block Viewer",
    REPORT_VIEWER: "ROLE_Report Viewer"
  },
  WORKFLOWSTATES: {
    DRAFT: "Draft",
    OPEN_TO_SUPPLIER: "Open to Supplier",
    OPEN_TO_MANAGER: "Open to Manager",
    DECLARED: "Declared"
  },
  CASNUMBEROPTIONS: [
    {
      label: "-",
      value: "-"
    },
    {
      label: "N/A",
      value: "N/A"
    },
    {
      label: "Not in List",
      value: "Not in List"
    },
    {
      label: "No CAS Reference",
      value: "No CAS Reference"
    },
    {
      label: "Proprietary Data",
      value: "Proprietary Data"
    }
  ],
  ATTRIBUTE1: "attribute1",
  ATTRIBUTE2: "attribute2",
  ATTRIBUTE3: "attribute3",
  ATTRIBUTE4: "attribute4",
  ATTRIBUTE5: "attribute5",
  ATTRIBUTE6: "attribute6",
  VALIDCASNUMBERS: [
    "-",
    "N/A",
    "Not in List",
    "No CAS Reference",
    "Proprietary Data"
  ],
  COMPONENT_MODE: {
    BUTTON: "button",
    OPTION: "option",
    FIELD: "field"
  },
  ENTITIES: {
    ITEM: "Item",
    SUBSTANCE: "Substance",
    SUBSTANCE_GROUP: "Substance Group",
    SPECIFICATION: "Specification",
    PART_GROUP: "Part Group",
    EXEMPTION: "Exemption",
    SMELTER: "Smelter",
    MANUFACTURER_PART: "Manufacturer Part",
    DECLARATION: "Declaration"
  },
  GREETINGS: {
    GOOD_MORNING: "Good Morning",
    GOOD_NOON: "Good Afternoon",
    GOOD_EVENING: "Good Evening",
    GOOD_NIGHT: "Good Night",
    GOOD_DAY: "Good Day"
  },
  API_CALL_TYPE_PENDING: {
    PENDING_REQUESTS: "PENDING_REQUESTS",
    PENDING_APPROVALS: "PENDING_APPROVALS"
  },
  DECLARATION_SCOPE_NAME: "Declaration Scope",
  DECLARATION_SCOPE:{
    PRODUCT:"Product (or List of Products)",
    COMPANY:"Company",
    NOT_APPLICABLE:"Declare \"Not Applicable\"",
    CERTIFICATE_OF_COMPLIANCE: "Certificate of Compliance"
  },
  CATEGORY:{
    PRODUCT:"Product",
    PART_GROUP:"Part Group",
    COMPANY:"Company"
  },
  MESSAGE_NODATA: "No data to display.",
  MESSAGE_FETCHINGDATA: "Fetching data",
  MESSAGE_SEARCHDATA: "Search to fetch data",
  TYPES: { TEXT: "TEXT", LIST: "LIST", DATE: "DATE", NUMBER: "NUMBER", DESC: "DESC", COMPLIANCE: "COMPLIANCE" },
  MAPPED_ATTRIBUTE_IDS: ["attribute1", "attribute2", "attribute3", "attribute4", "attribute5", "attribute6"],
  DECSCOPE_ATTRID: "attribute6"
}