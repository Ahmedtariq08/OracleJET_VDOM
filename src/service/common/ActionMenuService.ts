import { Message } from "../../utils/generic/Message";

class Action {
    id: number;
    uri: string;
    httpMethod: string;
    body: string;
    entity: string;
    actionName: string;
    actionDescription: string;
}

export default class ActionService {

    public performAction = async (action: Action) => {
        if (action.httpMethod == "GET") {
            window.open(action.uri, '_blank');
        } else {
            await fetch(action.uri, 
                {credentials: "include", method: action.httpMethod, headers: {'Content-Type': 'application/json'}, 
                body: (action.body) ? JSON.stringify(action.body) : undefined });
        }
    }
    
}
 
