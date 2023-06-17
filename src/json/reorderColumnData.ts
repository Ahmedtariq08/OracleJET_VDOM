export const reorderColumnData = {
    Item: {
      FavType: "item",
      dataProvider: "self.itemPartDataProvider",
      keyAttribute: [
        "itemId"
      ],
      Name: "itemNumber",
      isAdditionalAttributesMapped: false,
      AllColumns: [
        {
          Id: "itemNumber",
          Name: "Item Number",
          Object: "Item"
        },
        {
          Id: "itemClass",
          Name: "Item Class",
          Object: "Item"
        },
        {
          Id: "itemDes",
          Name: "Item Description",
          Object: "Item"
        },
        {
          Id: "lifeCyclePhase",
          Name: "Item Lifecycle Phase",
          Object: "Item"
        },
        {
          Id: "excludeFrom",
          Name: "Exclude From",
          Object: "Item"
        },
        {
          Id: "insertionDate",
          Name: "Insertion Date",
          Object: "Item"
        },
        {
          Id: "organizationCode",
          Name: "Organization Code",
          Object: "Item"
        },
        {
          Id: "organizationId",
          Name: "Organization Id",
          Object: "Item"
        },
        {
          Id: "massMg",
          Name: "Item Mass (mg)",
          Object: "Item"
        },
        {
          Id: "revisionCode",
          Name: "Last Sync Revision",
          Object: "Item"
        },
        {
          Name: "Specifications",
          Id: "specificationName",
          Object: "Item"
        },
        {
          Name: "Final Compliance",
          Id: "compliance",
          Object: "Item"
        },
        {
          Name: "Calculated Compliance",
          Id: "calculatedCompliance",
          Object: "Item"
        },
        {
          Name: "Declared Compliance",
          Id: "declaredCompliance",
          Object: "Item"
        },
        {
          Name: "Status",
          Id: "status",
          Object: "Item"
        },
        {
          Name: "Effective Till",
          Id: "effectiveTill",
          Object: "Item"
        }
      ],
      addedColumns: [
        {
          Id: "itemNumber",
          Name: "Item Number",
          Object: "Item"
        },
        {
          Id: "itemClass",
          Name: "Item Class",
          Object: "Item"
        },
        {
          Id: "itemDes",
          Name: "Item Description",
          Object: "Item"
        },
        {
          Id: "lifeCyclePhase",
          Name: "Item Lifecycle Phase",
          Object: "Item"
        },
        {
          Name: "Status",
          Id: "status",
          Object: "Item"
        },
        {
          Name: "Specifications",
          Id: "specificationName",
          Object: "Item"
        }
      ],
      columnsToBeAdded: [
        {
          Id: "excludeFrom",
          Name: "Exclude From",
          Object: "Item"
        },
        {
          Id: "insertionDate",
          Name: "Insertion Date",
          Object: "Item"
        },
        {
          Id: "organizationCode",
          Name: "Organization Code",
          Object: "Item"
        },
        {
          Id: "organizationId",
          Name: "Organization Id",
          Object: "Item"
        },
        {
          Id: "massMg",
          Name: "Item Mass (mg)",
          Object: "Item"
        },
        {
          Id: "revisionCode",
          Name: "Last Sync Revision",
          Object: "Item"
        },
        {
          Name: "Final Compliance",
          Id: "compliance",
          Object: "Item"
        },
        {
          Name: "Calculated Compliance",
          Id: "calculatedCompliance",
          Object: "Item"
        },
        {
          Name: "Declared Compliance",
          Id: "declaredCompliance",
          Object: "Item"
        },
        {
          Name: "Effective Till",
          Id: "effectiveTill",
          Object: "Item"
        }
      ]
    },
    "Part Group": {
      isAdditionalAttributesMapped: false,
      FavType: "part group",
      dataProvider: "self.partGroupDataProvider",
      keyAttribute: [
        "id"
      ],
      Name: "partGroupName",
      AllColumns: [
        {
          Id: "partGroupName",
          Name: "Part Group Name",
          Object: "Part Group"
        },
        {
          Name: "Type",
          Id: "type",
          Object: "Part Group"
        },
        {
          Name: "Description",
          Id: "description",
          Object: "Part Group"
        },
        {
          Name: "Specifications",
          Id: "specificationName",
          Object: "Part Group"
        },
        {
          Name: "Status",
          Id: "status",
          Object: "Part Group"
        },
        {
          Name: "Calculated Compliance",
          Id: "calculatedCompliance",
          Object: "Part Group"
        },
        {
          Name: "Declared Compliance",
          Id: "declaredCompliance",
          Object: "Part Group"
        },
        {
          Name: "Status",
          Id: "status",
          Object: "Part Group"
        },
        {
          Name: "Effective Till",
          Id: "effectiveTill",
          Object: "Part Group"
        },
        {
          Name: "Insertion Date",
          Id: "creationDate",
          Object: "Part Group"
        }
      ],
      addedColumns: [
        {
          Id: "partGroupName",
          Name: "Part Group Name",
          Object: "Part Group"
        },
        {
          Name: "Type",
          Id: "type",
          Object: "Part Group"
        },
        {
          Name: "Description",
          Id: "description",
          Object: "Part Group"
        },
        {
          Name: "Status",
          Id: "status",
          Object: "Part Group"
        },
        {
          Name: "Specifications",
          Id: "specificationName",
          Object: "Part Group"
        }
      ],
      columnsToBeAdded: [
        {
          Name: "Calculated Compliance",
          Id: "calculatedCompliance",
          Object: "Part Group"
        },
        {
          Name: "Declared Compliance",
          Id: "declaredCompliance",
          Object: "Part Group"
        },
        {
          Name: "Effective Till",
          Id: "effectiveTill",
          Object: "Part Group"
        },
        {
          Name: "Insertion Date",
          Id: "creationDate",
          Object: "Part Group"
        }
      ]
    },
    Substance: {
      isAdditionalAttributesMapped: false,
      FavType: "substance",
      dataProvider: "self.substanceDataProvider",
      keyAttribute: [
        "substanceId"
      ],
      Name: "substanceName",
      AllColumns: [
        {
          Id: "substanceName",
          Name: "Substance Name",
          Object: "Substance"
        },
        {
          Id: "substanceDes",
          Name: "Description",
          Object: "Substance"
        },
        {
          Id: "casNumber",
          Name: "CAS Number",
          Object: "Substance"
        },
        {
          Id: "groupName",
          Name: "Substance Group",
          Object: "Substance"
        }
      ],
      addedColumns: [
        {
          Id: "substanceName",
          Name: "Substance Name",
          Object: "Substance"
        },
        {
          Id: "substanceDes",
          Name: "Description",
          Object: "Substance"
        },
        {
          Id: "casNumber",
          Name: "CAS Number",
          Object: "Substance"
        },
        {
          Id: "groupName",
          Name: "Substance Group",
          Object: "Substance"
        }
      ],
      columnsToBeAdded: []
    },
    "Substance Group": {
      isAdditionalAttributesMapped: false,
      FavType: "substanceGroup",
      dataProvider: "self.substanceGroupDataProvider",
      keyAttribute: [
        "substanceId"
      ],
      Name: "substanceName",
      AllColumns: [
        {
          Id: "substanceName",
          Name: "Substance Group Name"
        },
        {
          Id: "substanceDes",
          Name: "Description"
        }
      ],
      addedColumns: [
        {
          Id: "substanceName",
          Name: "Substance Group Name"
        },
        {
          Id: "substanceDes",
          Name: "Description"
        }
      ],
      columnsToBeAdded: []
    },
    Specification: {
      isAdditionalAttributesMapped: false,
      FavType: "specification",
      dataProvider: "self.specificationDataProvider",
      keyAttribute: [
        "specificationId"
      ],
      Name: "specificationName",
      AllColumns: [
        {
          Name: "Specification Name",
          Id: "specificationName",
          Object: "Specification"
        },
        {
          Name: "Description",
          Id: "description",
          Object: "Specification"
        },
        {
          Name: "Validation Type",
          Id: "validationType",
          Object: "Specification"
        },
        {
          Name: "Comply By Date",
          Id: "complyByDate",
          Object: "Specification"
        },
        {
          Name: "Effective From",
          Id: "effectiveFrom",
          Object: "Specification"
        },
        {
          Name: "Effective Till",
          Id: "effectiveTill",
          Object: "Specification"
        }
      ],
      addedColumns: [
        {
          Name: "Specification Name",
          Id: "specificationName",
          Object: "Specification"
        },
        {
          Name: "Description",
          Id: "description",
          Object: "Specification"
        }
      ],
      columnsToBeAdded: [
        {
          Name: "Validation Type",
          Id: "validationType",
          Object: "Specification"
        },
        {
          Name: "Comply By Date",
          Id: "complyByDate",
          Object: "Specification"
        },
        {
          Name: "Effective From",
          Id: "effectiveFrom",
          Object: "Specification"
        },
        {
          Name: "Effective Till",
          Id: "effectiveTill",
          Object: "Specification"
        }
      ]
    },
    Exemption: {
      isAdditionalAttributesMapped: false,
      FavType: "exemption",
      dataProvider: "self.exemptionDataProvider",
      keyAttribute: [
        "id"
      ],
      Name: "exemptionNumber",
      AllColumns: [
        {
          Name: "Number",
          Id: "exemptionNumber",
          Object: "Exemption"
        },
        {
          Name: "Description",
          Id: "exemptionDescription",
          Object: "Exemption"
        },
        {
          Name: "Expiration Date",
          Id: "expirationDate",
          Object: "Exemption"
        }
      ],
      addedColumns: [
        {
          Name: "Number",
          Id: "exemptionNumber",
          Object: "Exemption"
        },
        {
          Name: "Description",
          Id: "exemptionDescription",
          Object: "Exemption"
        }
      ],
      columnsToBeAdded: [
        {
          Name: "Expiration Date",
          Id: "expirationDate",
          Object: "Exemption"
        }
      ]
    },
    Smelter: {
      isAdditionalAttributesMapped: false,
      FavType: "smelter",
      dataProvider: "self.smelterDataProvider",
      keyAttribute: [
        "smelterId"
      ],
      Name: "smelterName",
      AllColumns: [
        {
          Name: "Smelter Id",
          Id: "smelterId",
          Object: "Smelter"
        },
        {
          Name: "Smelter Name",
          Id: "smelterName",
          Object: "Smelter"
        },
        {
          Name: "Metal",
          Id: "metal",
          Object: "Smelter"
        },
        {
          Name: "Country",
          Id: "country",
          Object: "Smelter"
        },
        {
          Name: "Source",
          Id: "source",
          Object: "Smelter"
        },
        {
          Name: "Street",
          Id: "street",
          Object: "Smelter"
        },
        {
          Name: "City",
          Id: "city",
          Object: "Smelter"
        },
        {
          Name: "State",
          Id: "state",
          Object: "Smelter"
        },
        {
          Name: "Status",
          Id: "status",
          Object: "Smelter"
        }
      ],
      addedColumns: [
        {
          Name: "Smelter Id",
          Id: "smelterId",
          Object: "Smelter"
        },
        {
          Name: "Smelter Name",
          Id: "smelterName",
          Object: "Smelter"
        },
        {
          Name: "Metal",
          Id: "metal",
          Object: "Smelter"
        },
        {
          Name: "Country",
          Id: "country",
          Object: "Smelter"
        }
      ],
      columnsToBeAdded: [
        {
          Name: "Source",
          Id: "source",
          Object: "Smelter"
        },
        {
          Name: "Street",
          Id: "street",
          Object: "Smelter"
        },
        {
          Name: "City",
          Id: "city",
          Object: "Smelter"
        },
        {
          Name: "State",
          Id: "state",
          Object: "Smelter"
        },
        {
          Name: "Status",
          Id: "status",
          Object: "Smelter"
        }
      ]
    },
    "Manufacturer Part": {
      isAdditionalAttributesMapped: false,
      FavType: "manufacturer",
      dataProvider: "self.manufacturerPartDataProvider",
      keyAttribute: [
        "manufacturerPartNumber",
        "manufacturerNumber"
      ],
      Name: "manufacturerPartNumber",
      AllColumns: [
        {
          Name: "Manufacturer Part Number",
          Id: "manufacturerPartNumber",
          Object: "Manufacturer Part"
        },
        {
          Name: "Manufacturer Number",
          Id: "manufacturerNumber",
          Object: "Manufacturer Part"
        },
        {
          Name: "Manufacturer Name",
          Id: "manufacturerName",
          Object: "Manufacturer Part"
        },
        {
          Name: "Supplier",
          Id: "supplier",
          Object: "Manufacturer Part"
        },
        {
          Name: "Manufacturer Description",
          Id: "manufacturerDes",
          Object: "Manufacturer Part"
        },
        {
          Name: "Manufacturer Lifecycle",
          Id: "manufacturerLifecycle",
          Object: "Manufacturer Part"
        },
        {
          Name: "Manufacturer Part Number",
          Id: "manufacturerPN",
          Object: "Manufacturer Part"
        },
        {
          Name: "Insertion Date",
          Id: "insertionDate",
          Object: "Manufacturer Part"
        },
        {
          Name: "Specifications",
          Id: "specificationName",
          Object: "Manufacturer Part"
        },
        {
          Name: "Calculated Compliance",
          Id: "calculatedCompliance",
          Object: "Manufacturer Part"
        },
        {
          Name: "Declared Compliance",
          Id: "declaredCompliance",
          Object: "Manufacturer Part"
        },
        {
          Name: "Status",
          Id: "status",
          Object: "Manufacturer Part"
        },
        {
          Name: "Effective Till",
          Id: "effectiveTill",
          Object: "Manufacturer Part"
        }
      ],
      addedColumns: [
        {
          Name: "Manufacturer Part Number",
          Id: "manufacturerPartNumber",
          Object: "Manufacturer Part"
        },
        {
          Name: "Manufacturer Name",
          Id: "manufacturerName",
          Object: "Manufacturer Part"
        },
        {
          Name: "Supplier",
          Id: "supplier",
          Object: "Manufacturer Part"
        },
        {
          Name: "Status",
          Id: "status",
          Object: "Item"
        },
        {
          Name: "Specifications",
          Id: "specificationName",
          Object: "Item"
        }
      ],
      columnsToBeAdded: [
        {
          Name: "Manufacturer Number",
          Id: "manufacturerNumber",
          Object: "Manufacturer Part"
        },
        {
          Name: "Manufacturer Description",
          Id: "manufacturerDes",
          Object: "Manufacturer Part"
        },
        {
          Name: "Manufacturer Lifecycle",
          Id: "manufacturerLifecycle",
          Object: "Manufacturer Part"
        },
        {
          Name: "Insertion Date",
          Id: "insertionDate",
          Object: "Manufacturer Part"
        },
        {
          Name: "Calculated Compliance",
          Id: "calculatedCompliance",
          Object: "Manufacturer Part"
        },
        {
          Name: "Declared Compliance",
          Id: "declaredCompliance",
          Object: "Manufacturer Part"
        },
        {
          Name: "Effective Till",
          Id: "effectiveTill",
          Object: "Manufacturer Part"
        }
      ]
    },
    "Pending Request": {
      AllColumns: [
        {
          Name: "Request ID",
          Id: "id",
          Object: "Pending Request"
        },
        {
          Name: "Declaration Type",
          Id: "declaration_type",
          Object: "Pending Request"
        },
        {
          Name: "Requested By",
          Id: "requested_by",
          Object: "Pending Request"
        },
        {
          Name: "Requested Date",
          Id: "insertion_date",
          Object: "Pending Request"
        },
        {
          Name: "Supplier",
          Id: "supplier",
          Object: "Pending Request"
        }
      ]
    },
    Composition: {
      isAdditionalAttributesMapped: false,
      AllColumns: [
        {
          Name: "Substance",
          Id: "substance",
          Object: "Composition"
        },
        {
          Name: "CAS Number",
          Id: "casNumber",
          Object: "Composition"
        },
        {
          Name: "Declared Mass",
          Id: "declaredMass",
          Object: "Composition"
        },
        {
          Name: "Result Mass",
          Id: "resultMass",
          Object: "Composition",
          className: "oj-read-only"
        },
        {
          Name: "Conversion Factor",
          Id: "conversionFactor",
          Object: "Composition"
        },
        {
          Name: "Calculated Mass",
          Id: "calculatedMass",
          Object: "Composition",
          className: "oj-read-only"
        },
        {
          Name: "Percentage",
          Id: "percentage",
          Object: "Composition",
          className: "oj-read-only"
        },
        {
          Name: "Declared PPM",
          Id: "declaredPPM",
          Object: "Composition"
        },
        {
          Name: "Calculated PPM",
          Id: "calculatedPPM",
          Object: "Composition",
          className: "oj-read-only"
        },
        {
          Name: "Threshold PPM",
          Id: "thresholdPPM",
          Object: "Composition",
          className: "oj-read-only"
        },
        {
          Name: "Exemptions",
          Id: "exemptions",
          Object: "Composition"
        },
        {
          Name: "Exemption Expiration Date",
          Id: "exemptionExpirationDate",
          Object: "Composition",
          className: "oj-read-only"
        },
        {
          Name: "Calculated Compliance",
          Id: "calculatedCompliance",
          Object: "Composition",
          className: "oj-read-only"
        },
        {
          Name: "Declared Compliance",
          Id: "declaredCompliance",
          Object: "Composition"
        },
        {
          Name: "Specification",
          Id: "specification",
          Object: "Composition",
          className: "oj-read-only"
        }
      ],
      addedColumns: [
        {
          Name: "Declared Mass",
          Id: "declaredMass",
          Object: "Composition"
        },
        {
          Name: "Result Mass",
          Id: "resultMass",
          Object: "Composition",
          className: "oj-read-only"
        },
        {
          Name: "Conversion Factor",
          Id: "conversionFactor",
          Object: "Composition"
        },
        {
          Name: "Calculated Mass",
          Id: "calculatedMass",
          Object: "Composition",
          className: "oj-read-only"
        },
        {
          Name: "Percentage",
          Id: "percentage",
          Object: "Composition",
          className: "oj-read-only"
        },
        {
          Name: "Declared PPM",
          Id: "declaredPPM",
          Object: "Composition"
        },
        {
          Name: "Calculated PPM",
          Id: "calculatedPPM",
          Object: "Composition",
          className: "oj-read-only"
        },
        {
          Name: "Threshold PPM",
          Id: "thresholdPPM",
          Object: "Composition",
          className: "oj-read-only"
        },
        {
          Name: "Exemptions",
          Id: "exemptions",
          Object: "Composition"
        },
        {
          Name: "Exemption Expiration Date",
          Id: "exemptionExpirationDate",
          Object: "Composition",
          className: "oj-read-only"
        },
        {
          Name: "Calculated Compliance",
          Id: "calculatedCompliance",
          Object: "Composition",
          className: "oj-read-only"
        },
        {
          Name: "Declared Compliance",
          Id: "declaredCompliance",
          Object: "Composition"
        },
        {
          Name: "Specification",
          Id: "specification",
          Object: "Composition",
          className: "oj-read-only"
        }
      ],
      columnsToBeAdded: []
    },
    Declaration: {
      isAdditionalAttributesMapped: false,
      FavType: "declaration",
      keyAttribute: [
        "id"
      ],
      dataProvider: "self.pendingRequestDataProvider",
      Name: "id",
      AllColumns: [
        {
          Name: "Declaration ID",
          Id: "id",
          Object: "Declaration"
        },
        {
          Name: "Declaration Type",
          Id: "workflowName",
          Object: "Declaration"
        },
        {
          Name: "Supplier",
          Id: "supplier",
          Object: "Declaration"
        },
        {
          Name: "Workflow State",
          Id: "declarationState",
          Object: "Declaration"
        },
        {
          Name: "Declaration Description",
          Id: "declarationDescription",
          Object: "Declaration"
        },
        {
          Name: "Due Date",
          Id: "dueDate",
          Object: "Declaration"
        },
        {
          Name: "Created By",
          Id: "createdBy",
          Object: "Declaration"
        },
        {
          Name: "Created Date",
          Id: "createdDate",
          Object: "Declaration"
        },
        {
          Name: "Respond By Date",
          Id: "respondByDate",
          Object: "Declaration"
        }
      ],
      addedColumns: [
        {
          Name: "Declaration ID",
          Id: "id",
          Object: "Declaration"
        },
        {
          Name: "Declaration Type",
          Id: "workflowName",
          Object: "Declaration"
        },
        {
          Name: "Supplier",
          Id: "supplier",
          Object: "Declaration"
        },
        {
          Name: "Workflow State",
          Id: "declarationState",
          Object: "Declaration"
        }
      ],
      columnsToBeAdded: [
        {
          Name: "Declaration Description",
          Id: "declarationDescription",
          Object: "Declaration"
        },
        {
          Name: "Due Date",
          Id: "dueDate",
          Object: "Declaration"
        },
        {
          Name: "Created By",
          Id: "createdBy",
          Object: "Declaration"
        },
        {
          Name: "Created Date",
          Id: "createdDate",
          Object: "Declaration"
        },
        {
          Name: "Respond By Date",
          Id: "respondByDate",
          Object: "Declaration"
        }
      ]
    },
    "BOM Report": {
      AllColumns: [],
      addedColumns: [],
      columnsToBeAdded: []
    }
  }