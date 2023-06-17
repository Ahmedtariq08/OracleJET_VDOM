export const APIs = {
  urls: {
    EGNCMain: {
      Item: {
        base: "/item/",
        extensions: {
          count: "count/",
          search: "advanceSearch/",
          getItem: "getItem",
          aml: "/aml",
          whereuse: "/whereuse",
          specifications: "/specifications"
        }
      },
      "Part Group": {
        base: "/partGroup/",
        extensions: {
          search: "/advanceSearch/",
          getAllPartGroups: "/",
          mpns: "/mpns",
          allMpns: "/allMpns",
          specifications: "/specifications",
          whereUsed: "/whereuse"
        }
      },
      Substance: {
        base: "/substance/",
        extensions: {
          search: "advanceSearch/",
          substances: "/substances",
          selectAndAddForGroup: "/selectAddForGroup",
          selectAndAddForSpec: "/selectAddForSpec",
          whereuse: "whereuse",
          override: "/overrideSubstanceGroup"
        }
      },
      "Substance Group": {
        base: "/substance",
        extensions: {
          search: "/advanceSearch/"
        }
      },
      Specification: {
        base: "/specification/",
        extensions: {
          search: "advanceSearch",
          children: "/children",
          substances: "/substances",
          exemptions: "/exemptions",
          overrideSpecification: "overrideSpecification",
          toggleActive: "/toggleActive"
        }
      },
      Exemption: {
        base: "/exemption/",
        extensions: {
          search: "/advanceSearch"
        }
      },
      Smelter: {
        base: "/smelter/",
        extensions: {
          search: "advanceSearch",
          lookups: "/lookups",
          status: "status",
          metal: "/metal",
          whereuse: "/whereuse"
        }
      },
      "Manufacturer Part": {
        base: "/manufacturer/",
        extensions: {
          search: "advanceSearch/",
          getMPNs: "getMpns",
          supplier: "supplier/",
          whereUsed: "whereUsed",
          getCompanies: "getCompanies",
          getByCriteria: "getByCriteria",
          getSpecifications: "specifications"
        }
      },
      Favourite: {
        base: "/favourite/"
      },
      Preference: {
        base: "/preference/",
        extensions: {
          default: "default",
          system: "system",
          getUserSearches: "getUserSearches",
          attributeMapping: "attributeMapping/",
          thresholdTolerance: "thresholdTolerance",
          companyName: "companyName",
          followUpDays: "followUpDays",
          unknownSubstanceSeverity: "UnknownSubstanceSeverity"
        }
      },
      Declaration: {
        base: "/declaration/",
        extensions: {
          search: "advanceSearch/",
          requestCompliance: "/requestCompliance",
          affectedObjects: "/affectedObjects",
          isEmptyDeclaration: "/isEmptyDeclaration",
          supplier: "/supplier",
          state: "/state",
          searchSelectAndAddMpn: "/mpns",
          searchSelectAndAddItems: "/items",
          searchSelectAndAddPartGroup: "/partGroup"
        }
      },
      Workflow: {
        base: "/workflows/",
        extensions: {
          template: "/template",
          stateTypes: "stateTypes",
          activities: "/activities",
          validationTypes: "validationTypes"
        }
      },
      Template: {
        base: "/template/",
        extensions: {
          download: "/download"
        }
      },
      Question: {
        base: "/questions/"
      },
      AffectedObject: {
        base: "/affectedObject/",
        extensions: {
          composition: {
            base: "/composition",
            extensions: {
              save: "/save",
              copy: "/copy"
            }
          },
          template: "/template",
          batchDelete: "batchDelete",
          validationIssues: "/validationIssues",
          export: "/export",
          toggleActive: "/toggleActive",
          advanceSearch: "/advanceSearch",
          copybos: "/copyBos"
        }
      },
      StateHistory: {
        base: "/stateHistory"
      },
      File: {
        base: "/file/",
        extensions: {
          bundle: "bundle/"
        }
      },
      Job: {
        base: "/jobs",
        extensions: {
          calculateCompliance: "/calculateCompliance/"
        }
      },
      Report: {
        base: "/report",
        extensions: {
          specSubstanceWhereUsed: "/specSubstanceWhereUsed",
          progress: "/progress"
        }
      }
    },
    Bom: {
      base: "/bom",
      extensions: {
        search: "/getBomWithAmls/",
        getItemDetail: "/getExtendedItemDetail/",
        getBomWithAmls: "/getBomWithAmls/",
        getExtendedBom: "/getExtendedBom",
        getBomSmelter: "/getBomSmelter/"
      }
    },
    Export: {
      base: "/report/export/",
      csvFormat: "?format=csv",
      extensions: {
        saveReport: "/",
        composition: {
          base: "composition/",
          extensions: {
            IPC: "IPC"
          }
        },
        manufacturer: {
          base: "manufacturer/",
          whereUsed: "whereUsed"
        },
        partGroupWhereUse: "/partGroupWhereUseExport"
      }
    },
    User: {
      base: "/users",
      extensions: {
        login: "/authenticate",
        resetPassword: "/reset/",
        logout: "/logout",
        getUsers: "/",
        registerUser: "/register/",
        updateUser: "/update",
        updateRoles: "/roles",
        updateStatus: "/status",
        userPermissions: "/permissions"
      }
    },
    Role: {
      base: "/roles",
      extensions: {
        getRoles: "/"
      }
    },
    Attachments: {
      base: "/attachments",
      extensions: {
        download: "/download",
        copyAllAttachmentsFrom: "/copyAllAttachmentsFrom",
        types: "/types",
        declaration: "/declaration"
      }
    },
    RecentlyVisited: {
      base: "/",
      extensions: {
        pages: "pages/lastVisitedPages"
      }
    },
    ThirdPartyAuth: {
      base:"/thirdPartyAuth",
      extensions: {
        sso: "/sso",
        cloud: "/cloud",
        authorize: "/authorize"
      },
    },
    Newsletter: {
      getBlogs: "/blog/search"
    }
  }
}