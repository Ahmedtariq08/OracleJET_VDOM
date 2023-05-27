// import SubstanceService from "./SubstanceService";
// import SpecificationService from "./SpecificationService";
// import SmelterService from "./SmelterService";
// import ExemptionService from "./ExemptionService";
// import DeclarationService from "../Declaration/DeclarationService";
// import SavedSearchService from "../SavedSearchService";
// import WorkflowService from "../WorkflowService";
// import AuthenticationService from "../AuthenticationService";

// export default class ProductManagementService {
//     private SubstanceService: SubstanceService;
//     private SpecificationService: SpecificationService;
//     private SmelterService: SmelterService;
//     private ExemptionService: ExemptionService;
//     private DeclarationService: DeclarationService;
//     private SavedSearchService: SavedSearchService;
//     private WorkflowService: WorkflowService;
//     private AuthenticationService: AuthenticationService;

//     constructor() {
//         this.SubstanceService = new SubstanceService();
//         this.SpecificationService = new SpecificationService();
//         this.SmelterService = new SmelterService();
//         this.ExemptionService = new ExemptionService();
//         this.DeclarationService = new DeclarationService();
//         this.SavedSearchService = new SavedSearchService();
//         this.WorkflowService = new WorkflowService();
//         this.AuthenticationService = new AuthenticationService();
//     }

//     public createSubstance = async (data) => { 
//         return this.SubstanceService.createSubstance(data);
//     }
//     public createSpecification =  async (data) => {
//         return this.SpecificationService.createSpecification(data);
//     }
//     public createSmelter = async (data) => {
//         return this.SmelterService.createSmelter(data);
//     }
//     public createExemption = async (data) => {
//         return this.ExemptionService.createExemption(data);
//     }
//     public deleteExemption = async (deleteKey, userId) => {
//         return this.ExemptionService.deleteExemption(deleteKey, userId);
//     }
//     public createDeclaration = async (data) => {
//         return this.DeclarationService.createDeclaration(data);
//     }
//     public deleteDeclaration = async (deleteId, userId) => {
//         return this.DeclarationService.deleteDeclaration(deleteId, userId);
//     }
//     public saveSearch = async (data) => {
//         return this.SavedSearchService.saveSearch(data);
//     }
//     public getAllSavedSearches = async (userId, entity) => {
//         return this.SavedSearchService.getAllSavedSearches(userId, entity);
//     }
//     public deleteSavedSearch = async (deleteId) => {
//         return this.SavedSearchService.deleteSavedSearch(deleteId);
//     }
//     public setAsSystemSearch = async (search_id, tag: "set" | "unset", userId, entity) => {
//         return this.SavedSearchService.setAsSystemSearch(search_id, tag, userId, entity);
//     }
//     public setSearchAsDefault = async (search_id, tag: "set" | "unset", userId, entity) => {
//         return this.SavedSearchService.setSearchAsDefault(search_id, tag, userId, entity);
//     }
//     public updateSavedSearchName = async (updateId, searchName) => {
//         return this.SavedSearchService.updateSavedSearchName(updateId, searchName);
//     }
//     public getAllSpecifications =  async () => {
//         return this.SpecificationService.getAllSpecifications();
//     }
//     public getValidationTypes =  async () => {
//         return this.WorkflowService.getValidationTypes();
//     }
//     public getDeclarationTypes =  async (fetchEnabledOnly: boolean) => {
//         return this.WorkflowService.getDeclarationTypes(fetchEnabledOnly);
//     }
//     public getUsers =  async () => {
//         return this.AuthenticationService.getUsers();
//     }
//     public getWorkflowStates =  async () => {
//         return this.WorkflowService.getWorkflowStates();
//     }
//     public getMetals =  async () => {
//         return this.SmelterService.getMetals();
//     }
//     public getSmelterLookup =  async () => {
//         return this.SmelterService.getSmelterLookup();
//     }
// }