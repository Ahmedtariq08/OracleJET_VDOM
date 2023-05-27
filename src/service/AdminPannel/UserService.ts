import RestUtil from "../../utils/rest/RestUtil";
import { Config, APIs} from "../../json/JsonHandler";
import { Response } from "../../utils/generic/Response";
import { User, NewUser } from "../../objects/AdminPanel/User";
import { Message } from "../../utils/generic/Message";

export default class UserService {

    private userAPIs = APIs.urls.User;
    private roleAPIs = APIs.urls.Role;

    public getAllUsers = async () => {
        let result = new Response();
        let users: User[] = [];
        let url = Config.AUTH_backend + this.userAPIs.base + this.userAPIs.extensions.getUsers;
        let response = await RestUtil.get(url);
        if (response.error) {
            result.error = response.error
            result.message = new Message("error", "Could not fetch users");
        } else {
            response.forEach(user => {
                let roles = user['roles'];
                user['roles'] = roles.map(element => {return element.name});
                users.push(user);
            });
            result.data = response as User[];
        }
        return result;
    }

    public getUserRoles = async () => {
        let url = Config.AUTH_backend + this.roleAPIs.base + this.roleAPIs.extensions.getRoles;
        let response = await RestUtil.get(url);
        let roles= Array.isArray(response) ? response.map(element => {return {label: element.name, value: element.name}}) : [];
        return roles;
    }

    public createUser = async (newUser: NewUser) =>{
        let result = new Response();
        let url = Config.AUTH_backend + this.userAPIs.base + this.userAPIs.extensions.registerUser;
        let data = {...newUser, active: newUser.active?.toString(), provider: "EGNC"};
        let response = await RestUtil.post(url, data);
        if (response.error) {
            result.error = response.error
            result.message = new Message("error", "Error in creating user.", response.error);
        } else {
            result.data = response;
            result.message = new Message("confirmation", "User created successfully.");
        }
        return result;
    }

    public updateUser = async (user: NewUser) =>{
        let result = new Response();
        let url = Config.AUTH_backend + this.userAPIs.base + this.userAPIs.extensions.updateUser;
        let response = await RestUtil.post(url, user);
        if (response.error) {
            result.error = response.error;
            result.message = new Message("error", "Error in updating user.", response.error);
        } else {
            result.data = response;
            result.message = new Message("confirmation", "User updated successfully.");
        }
        return result;

    }

    public resetPassword = async (userId) => {
        let result = new Response();
        let url = Config.AUTH_backend + this.userAPIs.base + this.userAPIs.extensions.resetPassword + userId;
        let response = await RestUtil.post(url);
        result.message = (response == userId) ? new Message("confirmation", "Password reset successful.") : new Message("error", "Password reset failed.");
        return result;
    }
}