export default class StateHistory {

	private comments: string;
	private modifyBy: string;
	private modifyDate: string;
	private workflowStateName: number;
	
	public getComments = (): string => {
		return this.comments;
	}
	public setComments = (value: string) => {
        this.comments = value;
    }
	public getModifyBy = (): string => {
		return this.modifyBy;
	}
	public setModifyBy = (value: string) => {
        this.modifyBy = value;
    }
	public getModifyDate = (): string => {
		return this.modifyDate;
	}
	public setModifyDate = (value: string) => {
        this.modifyDate = value;
    }
	public getWorkflowStateName = (): number => {
		return this.workflowStateName;
	}
	public setWorkflowStateName = (value: number) => {
        this.workflowStateName = value;
    }

    constructor(comments: string, modifyBy: string, modifyDate: string, workflowStateName: number) {
        this.comments = comments;
        this.modifyBy = modifyBy;
        this.modifyDate = modifyDate;
        this.workflowStateName = workflowStateName;
    }

}