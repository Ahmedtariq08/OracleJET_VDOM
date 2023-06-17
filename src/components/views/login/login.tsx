import { LoaderCircle } from "../../common/loader-circle/loader-circle";
import AsyncLengthValidator from "ojs/ojasyncvalidator-length";
import { useEffect, useState } from "preact/hooks";
import { PAGES } from "../../../navigation/Constants";
import { Message } from  "../../../utils/generic/Message";
import authenticationService from "../../../service/auth/AuthenticationService";
import { ButtonComponent } from "../../common/button-component/button-component";
// import Store from "../../../redux/store";
// import { resetStore } from "../../../redux/actions/root";
import { clearUserPermissionsFromStorage } from "../../../service/auth/Permissions";
const AuthenticationService = new authenticationService();

const passwordValidator = [ new AsyncLengthValidator({ max: 32, countBy: "codeUnit",
hint: { max: "Password can not be more than 32 characters.", }, messageDetail:
{ tooLong: "Password can not be more than 32 characters.", }, }), ];
const MAX_LOGIN_ATTEMPTS = 3;

//TODO - Reset store on logout, Store methods
export const LoginView = (props: {redirectToPage: (page: string) => void}) => {
    const {redirectToPage} = props;
    const [messageArray, setMessageArray] = useState([]);
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showLoader, setShowLoader] = useState(false);
    const [loginAttempts, setLoginAttempts] = useState(0);

    useEffect(() => {
        checkSignedIn();
    }, []);

    const SSOSignIn = async () => {
        let response = await AuthenticationService.loginSSO();
        if (response.message) {
            setMessageArray([response.message]);
        }
    };

    const checkSignedIn = async () => {
        setShowLoader(true);
        let isSignedIn = await AuthenticationService.isUserSignedIn();
        if (isSignedIn) {
            redirectToPage(PAGES.DASHBOARD);
        } else {
            clearUserPermissionsFromStorage();
            // Store.dispatch(resetStore());
        }
        setShowLoader(false);
    };

    const signIn = async () => {
        if (userName && password) {
            setShowLoader(true);
            let response = await AuthenticationService.loginUser(userName, password);
            if (response.data) {
                redirectToPage(PAGES.DASHBOARD);
            }
            if (response.message) {
                setLoginAttempts((prevAttempts) => prevAttempts + 1);
                setMessageArray(loginAttempts == 2 ? [new Message("error", "You have reached the limit (3) for unsuccessful attempts of login")] :[response.message]);
            }
            setShowLoader(false);
        } else {
            setMessageArray([new Message("error", "Both User Name and Password are required !")]);
        }
    };

    const onEnter = (event: any) => {
        if (event.key === "Enter") {
            signIn();
        }
    };
   
    const SignInHeader = () => {
        return (
            <header class="oj-web-applayout-header">
                <div class="oj-web-applayout oj-flex-bar oj-sm-align-items-center oj-bg-neutral-170 oj-color-invert">
                    <div class="textContainer">
                        <div class="text">
                            <div class="head1">Sign In</div>
                            <div class="head2">Environment Governance & Compliance</div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
    const SignInFooter = () => {
        return (
            <footer class="oj-web-applayout-footer">
                <div class="foot">
                    <div class="Ologo"> <img class="logo" src="css/images/gosaas-logo.png" /> </div>
                </div>
                <div class="copyright" id="copyright"> Copyright(C) 2017, 2022, GoSaaS and/or its affiliates. </div>
            </footer>
        );
    }
    const Divider = () => {
        return (
            <div className="oj-flex oj-sm-flex-items-initial oj-sm-justify-content-center oj-md-padding-6x-top">
            <div className="object-divider  buttonWidth">
                    <hr /> <span className="or-text">or</span> <hr />
                </div>
            </div>
        );
    }

    const SignInButton = (props: {buttonTitle: string, chroming: any, ojAction: () => void, disabled: boolean }) => {
        const {buttonTitle, chroming, ojAction, disabled} = props;
        return(
            <div className="oj-flex oj-sm-flex-items-initial oj-sm-justify-content-center">
                <div id="loginBtn" className="oj-flex-item oj-sm-padding-6x-top">
                <ButtonComponent buttonTitle={buttonTitle} styleClass="buttonWidth" chroming={chroming} ojAction={ojAction} disabled={disabled}></ButtonComponent>

            </div>
        </div>
        );
    }

    const InputPassword = () => {
        const validationHandler = (value: "valid"|"pending"|"invalidHidden"|"invalidShown") => {
            if (value == "invalidShown") {
                setPassword("");
            }
        }
        return (<div class={`oj-flex oj-sm-flex-items-initial oj-sm-justify-content-center oj-md-padding-3x-top`}>
                    <oj-input-password id="loginInput" class="oj-flex-item " required={true}
                        spellcheck={false} validators={passwordValidator}
                        translations={{ required: { messageDetail: "Password is required." }, }}
                        onvalueChanged={(event) => setPassword(event.detail.value)}
                        onvalidChanged={(event) => validationHandler(event.detail.value)}
                        label-hint="Password" value={password} maskIcon="visible"
                        onKeyUp={onEnter} ></oj-input-password>
                </div>)
    }

    const InputUsername = () => {
        const validationHandler = (value: "valid"|"pending"|"invalidHidden"|"invalidShown") => {
            if (value == "invalidShown") {
                setUserName("");
            }
        }
        return (<div class={`oj-flex oj-sm-flex-items-initial oj-sm-justify-content-center oj-md-padding-3x-top`}>
                    <oj-input-text id="loginInput" class="oj-flex-item" spellcheck={false} value={userName}
                        label-hint="Username" onvalueChanged={(event) => setUserName(event.detail.value)}
                        onvalidChanged={(event) => validationHandler(event.detail.value)} clearIcon="conditional"
                        autofocus={true} required={true}
                        translations={{ required: { messageDetail: "Username is required." }, }} ></oj-input-text>
                </div>)
    }

    return (
        <body class="oj-web-applayout-body">
            <div class="oj-web-applayout-page">
                <SignInHeader />
                <div className="oj-web-applayout-content">
                    <oj-messages class="oj-color-invert" messages={messageArray} position={{}} display="notification" displayOptions={{ category: "none" }}  ></oj-messages>
                        <SignInButton buttonTitle="Company Single Sign-on" chroming="callToAction" ojAction={SSOSignIn} disabled={false} />
                        <Divider />
                        <InputUsername />
                        <InputPassword />
                        <SignInButton buttonTitle="Sign in" chroming="outlined" ojAction={signIn} disabled={loginAttempts >= MAX_LOGIN_ATTEMPTS}/>
                </div>
                {showLoader ? <LoaderCircle loaderText="  "></LoaderCircle> : null}
                <SignInFooter />
            </div>
        </body>
    );
};