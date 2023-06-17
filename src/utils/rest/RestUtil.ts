export default class RestUtil {

    constructor() {}

    public get = async (url: string) => {

        const response = await fetch(url, {credentials: "include", method: 'GET',});
        const data = await response.json();
        return data;
    }
    
    public getTextResponse = async (url: string) => {

        const response = await fetch(url, {credentials: "include", method: 'GET',});
        const data = await response.text();
        return data;
    }

    public post = async (url: string, body?: Object) => {

        const response = await fetch(url, {credentials: "include", method: 'POST', headers: {'Content-Type': 'application/json'}, body: (body) ? JSON.stringify(body) : undefined });
        const data = await response.json();
        return data;
    }

    public postWithAuthHeader = async (url: string, body?: Object, authHeader?: Object) => {
        let headers = { 'Content-Type': 'application/json' };
        if (authHeader)
            headers['NewsLetter-Auth'] = JSON.stringify(authHeader);
        const response = await fetch(url, {credentials: "include", method: 'POST', headers, body: (body) ? JSON.stringify(body) : undefined });
        const data = await response.json();
        return data;
    }

    public put = async (url: string, body?: Object) => {

        const response = await fetch(url, {credentials: "include", method: 'PUT', headers: {'Content-Type': 'application/json'}, body: (body) ? JSON.stringify(body) : undefined });
        const data = await response.json();
        return data;
    }

    public putWithTextResponse = async (url: string, body?: Object) => {

        const response = await fetch(url, {credentials: "include", method: 'PUT', headers: {'Content-Type': 'application/json'}, body: (body) ? JSON.stringify(body) : undefined });
        const data = await response.text();
        return data;
    }

    public delete = async (url: string) => {

        const response = await fetch(url, {credentials: "include", method: 'DELETE' });
        const data = await response.json();
        return data;
    }

    public postWithTextResponse = async (url: string, body?: Object) => {

        const response = await fetch(url, {credentials: "include", method: 'POST', headers: {'Content-Type': 'application/json'}, body: (body) ? JSON.stringify(body) : undefined });
        const data = await response.text();
        return data;
    }

    public deleteWithTextResponse = async (url: string, body?: Object) => {

        const response = await fetch(url, {credentials: "include", method: 'DELETE', headers: {'Content-Type': 'application/json'}, body: (body) ? JSON.stringify(body) : undefined });
        const data = await response.text();
        return data;
    }
}