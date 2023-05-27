// import { Smelter } from "../../objects/Smelter";
// import { Question } from "../../objects/Question";
// import RestUtil from "../../utils/rest/RestUtil";
// import SmelterService from "../Categories/SmelterService";
// import QuestionService from "../QuestionService";
// import AffectedObjectService from "./AffectedObjectService";
// import { Message, Severity } from "../../utils/generic/Message";
// import ArrayDataProvider = require('ojs/ojarraydataprovider');

// export default class CMRTAffectedObjectService {

//     constructor() { }
// 	questions: any[] = [];
//     restUtil = new RestUtil();
// 	smelterService = new SmelterService();
// 	questionService = new QuestionService();
// 	dependencyMap: Map<number, any[]> = new Map();
// 	SMELTERNOTLISTED: string = "Smelter not listed";
// 	affectedObjectService = new AffectedObjectService();

// 	public getComposition = async (affectedObjectId : number) => {

// 		let response = await this.affectedObjectService.getComposition(affectedObjectId);
// 		this.questions = await this.questionService.getQuestions(response.wfid);
// 		return response;
//     };

// 	public parseComposition = (response: any) => {
// 		let answersMap = new Map();
// 		let smelters: Smelter[] = [];
// 		response.dependencyMap = new Map();
// 		let questionsWithAnswers: Question[] = []; 
// 		let answersList = response.compositionList?.questionList;
// 		answersList && answersList.forEach(answer => answersMap.set(answer.questionId, answer));
		
// 		//need to handle answers
// 		this.questions.forEach(question => {
// 			let possibleAnswers = [];
// 			let children: Question[];
// 			if (question.subQuestions) {
// 				children = [];
// 				question.subQuestions.forEach(subQuestion => {
// 					possibleAnswers = this.setQuestionsData(subQuestion);
// 					let answer = answersMap.get(subQuestion.questionStructureId);
// 				  	children.push(new Question(null, answer?.providedAnswer, answer?.comment, subQuestion.question, false, subQuestion.dependentOn, null, possibleAnswers.length > 0 ? new ArrayDataProvider(possibleAnswers, { keyAttributes: "value"}) : null, subQuestion.parentQuesionId, false, subQuestion.questionStructureId));
// 				});
// 			}
// 			possibleAnswers = this.setQuestionsData(question);
// 			questionsWithAnswers.push(new Question(null, null, null, question.question, false, question.dependentOn, children, possibleAnswers.length > 0 ? new ArrayDataProvider(possibleAnswers, { keyAttributes: "value"}) : null, question.parentQuesionId, false, question.questionStructureId));
// 		});
// 		!response.compositionList && (response.compositionList = {});
// 		response.compositionList.smelterList?.forEach(smelter => {
// 			if (smelter.smelterId)
// 				smelters.push(new Smelter(smelter.smelterId, smelter.metal, null, smelter.smelterName, smelter.country, smelter.source, smelter.city, smelter.street));
// 			else 
// 				smelters.push(new Smelter(smelter.smelterId, smelter.metal, smelter.smelterName, [this.SMELTERNOTLISTED], smelter.country, smelter.source, smelter.city, smelter.street));
// 		});
// 		response.compositionList.questionsWithAnswers = questionsWithAnswers;
// 		response.compositionList.smelterList = smelters;
// 		response.dependencyMap = this.dependencyMap;
// 		this.setInitialStatus(response);
// 		return response;
// 	};

// 	public setQuestionsData = (question : any) => {
// 		let possibleAnswers = [];
// 		question.possibleAnswers && question.possibleAnswers.forEach(key => possibleAnswers.push({ id: key, value: key }));

// 		// maintaining the dependency mapping
// 		let dependents = question.dependentOn;
// 		if (dependents) {
// 			dependents.forEach(dependentOn => {
// 				let returnDependents = dependents.filter(dep => dep.id != dependentOn.id);
// 				this.dependencyMap.has(dependentOn.id) ? 
// 				this.dependencyMap.get(dependentOn.id).push({ questionStructureId: question.questionStructureId, answer: dependentOn.answer, dependents: returnDependents }) :
// 				this.dependencyMap.set(dependentOn.id, [{ questionStructureId: question.questionStructureId, answer: dependentOn.answer, dependents: returnDependents }]);
// 			});
// 		}
// 		return possibleAnswers;
// 	}

// 	public disableQuestionRows = (rowData : Question, questionList : Question[]) => {
// 		let self = this;
//         if (this.dependencyMap.has(rowData.getQuestionStructureId())) {
// 			this.dependencyMap.get(rowData.getQuestionStructureId()).forEach(function(dependent) {
// 				let counter = 0;
// 				let node = self.findQuestion(dependent.questionStructureId, questionList);
// 				if (dependent.answer != rowData.getAnswer() || rowData.getDisableQuestion()) {
// 					self.setMandatoryandDisabledQuestions(node, false, true);
// 					let dependents = dependent.dependents;
// 					if (dependents.length > 0) {
// 						dependents.forEach(dep => {
// 							let depNode = self.findQuestion(dep.id, questionList);
// 							if (depNode.getDisableQuestion() || depNode.getAnswer() != dep.answer)
// 								counter++;
// 						});
// 						counter != dependents.length && self.setMandatoryandDisabledQuestions(node, true, false);
// 					}
// 				}
// 				else {
// 					self.setMandatoryandDisabledQuestions(node, true, false);
// 				}
// 				self.disableQuestionRows(node, questionList);
// 			});
//         }
//     }

// 	public setInitialStatus = (response : any) => {
// 		let questionList = response.compositionList.questionsWithAnswers;
// 		questionList.forEach(ques => {
// 			ques.getChildren()?.forEach(subQues => {
// 				this.disableQuestionRows(subQues, questionList);
// 			});
// 		});
//     }

// 	public findQuestion = (id: number, questionList : Question[]) => {
//         for (let i = 0; i < questionList.length; i++) {
// 			if (questionList[i].getQuestionStructureId() == id)
// 				return questionList[i];
// 			else {
// 				let children = questionList[i].getChildren();
// 				if (children) {
// 					for (let j = 0; j < children.length; j++) {
// 						if (children[j].getQuestionStructureId() == id) {
// 							return children[j];
// 						}
// 					}
// 				}
// 			}
// 		}
//     }

// 	public setMandatoryandDisabledQuestions = (node: Question, mandatory : boolean, disabled : boolean) => {
// 		node.setMandatory(mandatory);
// 		node.setDisableQuestion(disabled);
// 	}

// 	public checkIfSmelterExistsAlready = function (smelterId: string, smelterList: Smelter[]) {
//         for (let smel_i = 0; smel_i < smelterList.length; smel_i++) {
//           if (smelterList[smel_i].smelterId == smelterId) {
//             return true;
//           }
//         }
//         return false;
//     };

//     public applySmelters = function (isAddAll: boolean, searchArray: any, allSelectedRows: string[], smelterList: Smelter[]) {
// 		if (isAddAll) {
// 			searchArray.forEach(arr => {
// 			  if (!this.checkIfSmelterExistsAlready(arr.smelterId, smelterList))
// 				smelterList.push(new Smelter(arr.smelterId, arr.metal, arr.smelterName, arr.lookup, arr.country, arr.source, arr.city, arr.street));
// 			});
// 		  }
// 		  else {
// 			searchArray.forEach(arr => {
// 				if (allSelectedRows.includes(arr.smelterId)) {
// 					if (!this.checkIfSmelterExistsAlready(arr.smelterId, smelterList)) {
// 						smelterList.push(new Smelter(arr.smelterId, arr.metal, null, arr.smelterName, arr.country, arr.source, arr.city, arr.street));
// 					}
// 				}
// 			});
// 		}
//     };

// 	public createSmelter = async (smelterList: Smelter[], smelterName: string, metal: string, city: string, street: string, country: string) => {
// 		let smelter = new Smelter('', metal, smelterName, [this.SMELTERNOTLISTED], country, null, city, street);
// 		// let response = await this.smelterService.createSmelter(smelter);
// 		// if (!this.checkIfSmelterExistsAlready(response.smelterId, smelterList))
// 			// return new Smelter(response.smelterId, response.metal, response.smelterName, this.SMELTERNOTLISTED, response.country, response.source, response.city, response.street);
// 		// else 
// 		// 	return { message: new Message("error", "This smelter already exists.") };
// 		return smelter;
//     };

// 	public getSmelterById = async (smelterList: Smelter[], smelterId: string) => {
// 		let smelterExists = await this.smelterService.getSmelterById(smelterId);
// 		let id = smelterExists.smelterId;
// 		if (id) {
// 			if (!this.checkIfSmelterExistsAlready(id, smelterList))
// 				return new Smelter(id, smelterExists.metal, smelterExists.lookups?.[0], [smelterExists.smelterName], smelterExists.country, smelterExists.source, smelterExists.city, smelterExists.street);
// 			else 
// 				return { message: new Message("info", "Smelter with id " + smelterId + " already exists.") };
// 		}
// 		else
// 			return { message: new Message("error", "There is no smelter with id " + smelterId + ". Try creating a new one.") };
//     };

// 	public getMetalAndLookupCombination = async (metal: number, lookup: string) => {
// 		let smelter = (await this.smelterService.advanceSearch(0, 1, null, null, [metal], [lookup, "equal"]))[0];
// 		if (smelter)
// 			return new Smelter(smelter.smelterId, smelter.metal, null, [lookup], smelter.country, smelter.source, smelter.city, smelter.street);
// 		else 
// 			return { message: new Message("error", "No such combination exists.") };
//     };

// 	public exportAffectedObject = async (affectedObjectId: number) => {
// 		await this.affectedObjectService.exportAffectedObject(affectedObjectId);
//     }

// 	public saveComposition = async (smelterList: Smelter[], questionList: Question[], cmrtVersion: string, affectedOjectId: number) => {

// 		let smelters = [];
// 		let questions = [];
//         let cmrtComposition = new Object();

//         smelterList.forEach(smelter => {
//             let data = new Object();
//             data['city'] = smelter.city;
//             data['metal'] = smelter.metal;
//             data['source'] = smelter.source;
//             data['street'] = smelter.street;
//             data['country'] = smelter.country;
//             data['smelterId'] = smelter.smelterId;
//             data['smelterName'] = smelter.smelterId ? smelter.lookups : smelter.smelterName;
//             smelters.push(data);
//         });

// 		questionList.forEach(ques => {
// 			ques.getChildren().forEach(subQues => {
// 				// if (!subQues.getDisableQuestion() && subQues.getAnswer()) {
// 				if (subQues.getAnswer()) {
// 					let data = new Object();
// 					data['comment'] = subQues.getComments();
// 					data['providedAnswer'] = subQues.getAnswer();
// 					data['questionId'] = subQues.getQuestionStructureId();
// 					questions.push(data);	
// 				}
// 			});
//         });

//         cmrtComposition['smelterList'] = smelters;
//         cmrtComposition['questionList'] = questions;
//         cmrtComposition['cmrtVersion'] = cmrtVersion;
        
//         let response = await this.affectedObjectService.saveComposition(affectedOjectId, { cmrtComposition: cmrtComposition }, true);
//         return response;
//     }

// }