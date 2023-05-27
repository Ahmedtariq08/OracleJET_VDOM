export class NewUser {
    public username: string;
    public email: string;
    public roles: Roles[] | string[];
    public name?: string;
    public company?: string;
    public phone?: string;
    public businessTitle?: string;
    public active?: boolean;

    //Initialize with empty string for create user popup
    constructor () { this.username = ""; this.email = ""; this.roles = []; this.name = ""; 
        this.company = ""; this.phone = ""; this.businessTitle = ""; this.active = false; }
}
export class User extends NewUser{
    public  id: number;
    public  provider: string;
    public  isApplication: boolean;
    public  createdBy: number;
    public  createdDate?: string;
    public  lastModifiedBy: number;
    public  lastModifiedDate?: string;

    constructor(jsonObject: Object) {
        super();
        for (let prop in jsonObject) {
            this[prop] = jsonObject[prop];
        }
    }
}

class Roles {
    public  id: number;
    public  name: string;
    public  description: any;
}