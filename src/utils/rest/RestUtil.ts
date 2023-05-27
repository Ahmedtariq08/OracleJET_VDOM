export default class RestUtil {
    public static get = async (url: string) => {
        const response = await fetch(url, {credentials: "include", method: 'GET',});
        const data = await response.json();
        return data;
    }
    
    public static getTextResponse = async (url: string) => {

        const response = await fetch(url, {credentials: "include", method: 'GET',});
        const data = await response.text();
        return data;
    }

    public static post = async (url: string, body?: Object) => {

        const response = await fetch(url, {credentials: "include", method: 'POST', headers: {'Content-Type': 'application/json'}, body: (body) ? JSON.stringify(body) : undefined });
        const data = await response.json();
        return data;
    }
    //REVIEW -   This should be changed to a generic function
    public static postWithAuthHeader = async (url: string, body?: Object, authHeader?: Object) => {
        let headers: Record<string,any> = { 'Content-Type': 'application/json' };
        if (authHeader) {
            headers['NewsLetter-Auth'] = JSON.stringify(authHeader);
        }
        const response = await fetch(url, {credentials: "include", method: 'POST', headers, body: (body) ? JSON.stringify(body) : undefined });
        const data = await response.json();
        return data;
    }

    public static put = async (url: string, body?: Object) => {

        const response = await fetch(url, {credentials: "include", method: 'PUT', headers: {'Content-Type': 'application/json'}, body: (body) ? JSON.stringify(body) : undefined });
        const data = await response.json();
        return data;
    }

    public static putWithTextResponse = async (url: string, body?: Object) => {

        const response = await fetch(url, {credentials: "include", method: 'PUT', headers: {'Content-Type': 'application/json'}, body: (body) ? JSON.stringify(body) : undefined });
        const data = await response.text();
        return data;
    }

    public static delete = async (url: string) => {

        const response = await fetch(url, {credentials: "include", method: 'DELETE' });
        const data = await response.json();
        return data;
    }

    public static postWithTextResponse = async (url: string, body?: Object) => {

        const response = await fetch(url, {credentials: "include", method: 'POST', headers: {'Content-Type': 'application/json'}, body: (body) ? JSON.stringify(body) : undefined });
        const data = await response.text();
        return data;
    }

    public static deleteWithTextResponse = async (url: string, body?: Object) => {

        const response = await fetch(url, {credentials: "include", method: 'DELETE', headers: {'Content-Type': 'application/json'}, body: (body) ? JSON.stringify(body) : undefined });
        const data = await response.text();
        return data;
    }
}