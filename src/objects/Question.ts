export class Question {

	private error: string;
	private answer: string;
	private comments: string;
	private question: string;
	private mandatory: boolean;
	private dependentOn: any[];
	private children: Question[];
	private possibleAnswers: any;
	private parentQuestionId: number;
	private disableQuestion: boolean;
	private questionStructureId: number;
	
	constructor(
		error: string,
		answer: string,
        comments: string,
		question: string,
		mandatory: boolean,
		dependentOn: any[],
		children: Question[],
		possibleAnswers: any,
		parentQuestionId: number,
		disableQuestion: boolean,
		questionStructureId: number
    ) {

		this.error = error;
		this.answer = answer;
		this.comments = comments;
        this.children = children;
        this.question = question;
        this.mandatory = mandatory;
        this.dependentOn = dependentOn;
        this.possibleAnswers = possibleAnswers;
        this.disableQuestion = disableQuestion;
        this.parentQuestionId = parentQuestionId;
        this.questionStructureId = questionStructureId;
    }

	public getError = (): string => {
		return this.error;
	}
	public setError = (value: string) => {
        this.error = value;
    }
	public getAnswer = (): string => {
		return this.answer;
	}
	public setAnswer = (value: string) => {
        this.answer = value;
    }
	public getComments = (): string => {
		return this.comments;
	}
	public setComments = (value: string) => {
        this.comments = value;
    }
	public getQuestion = (): string => {
		return this.question;
	}
	public setQuestion = (value: string) => {
        this.question = value;
    }
	public getMandatory = (): boolean => {
		return this.mandatory;
	}
	public setMandatory = (value: boolean) => {
        this.mandatory = value;
    }
	public getDependentOn = (): any[] => {
		return this.dependentOn;
	}
	public setDependentOn = (value: any[]) => {
        this.dependentOn = value;
    }
	public getChildren = (): Question[] => {
		return this.children;
	}
	public setChildren = (value: Question[]) => {
        this.children = value;
    }
	public getPossibleAnswers = (): any => {
		return this.possibleAnswers;
	}
	public setPossibleAnswers = (value: any) => {
        this.possibleAnswers = value;
    }
	public getParentQuestionId = (): number => {
		return this.parentQuestionId;
	}
	public setParentQuestionId = (value: number) => {
        this.parentQuestionId = value;
    }
	public getDisableQuestion = (): boolean => {
		return this.disableQuestion;
	}
	public setDisableQuestion = (value: boolean) => {
        this.disableQuestion = value;
    }
	public getQuestionStructureId = (): number => {
		return this.questionStructureId;
	}
	public setQuestionStructureId = (value: number) => {
        this.questionStructureId = value;
    }

}