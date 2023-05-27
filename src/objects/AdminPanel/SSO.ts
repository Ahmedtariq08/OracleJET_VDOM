export class SSO {
    public id: number;
    public clientId: string;
    public clientSecret: string;
    public tokenUri: string;
    public scope: string[];
    public authorizationUri: string;
    public redirectUri: string;
    public userInfoUri: string;
    public issuerUri: string;
    public jwkUri: string;
    public providerName: string ;
}

export const ScopeMapping = [{label: "Open Id", value: "openid"}, {label: "Profile", value: "profile"}, 
    {label: "Email", value: "email"}, {label: "Offline Access", value: "offline_access"}] 