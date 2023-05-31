import { customElement, ExtendGlobalProps } from "ojs/ojvcomponent";
import { h, Component, ComponentChild } from "preact";
import authenticationService from "../../../service/AuthenticationService";
import { useState, useEffect } from "preact/hooks";
import AsyncLengthValidator from "ojs/ojasyncvalidator-length";
import { LoaderCircle } from "loader-circle/loader-circle";
import { InputTextBox } from "./InputTextBox";
import { ButtonComponent } from "../../common/button-component/button-component";
const AuthenticationService = new authenticationService();
import { PAGES } from "../../../navigation/Constants";
import { oj } from "@oracle/oraclejet/dist/types";

type Props = {
    appController: any;

};
/**
 *
 * @ojmetadata displayName "A user friendly, translatable name of the component"
 * @ojmetadata description "A translatable high-level description for the component"
 */
@customElement("login-view")
export class LoginView extends Component<ExtendGlobalProps<Props>> {


    render(props: Readonly<Props>): ComponentChild {
        const { appController } = props;

        return <LoginBlockView appController={appController}></LoginBlockView>;
    }
}

const LoginBlockView = (props: Props) => {
    const [messageArray, setMessageArray] = useState([]);
    const [userName, setUserName] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [showLoader, setShowLoader] = useState(false);
    let appController = props.appController;
    const pages = props.appController.navHandler.PAGES;
    useEffect(() => {
        checkSignedIn();
        appController.passedDataArray([]);
    }, []);
    const SSOSignIn = async () => {
        let response = await AuthenticationService.loginSSO();
        if (response.message) {
            setMessageArray([response.message]);
        }
    };
    const checkSignedIn = async () => {
        setShowLoader(true);
        let response = await AuthenticationService.isUserSignedIn(
            appController.userId()
        );
        if (response.data) {
            appController.redirectToPage(pages.DASHBOARD);
        } else {
            setShowLoader(false);
        }
    };
    const signIn = async () => {
        if (userName && password) {
            setShowLoader(true);
            let response = await AuthenticationService.loginUser(userName, password);
            if (response.data) {
                appropriateRedirection();
            }
            if (response.message) {
                setMessageArray([response.message]);
            }
            setShowLoader(false);
        }
        else
        setMessageArray([{severity:"error", summary:"Both User Name and Password are required !"}]);
    };
     //Click Sign in on enter
    const onEnter = (event: any) => {
        if (event.key === "Enter") {
            signIn();
        }
    };
   
    const onUsernameChanged = (event:any)=>{
        setUserName(event.detail.value);
    }
    const onPasswordChanged = (event: any) => {
        return setPassword(event.target.value)
    };
    const appropriateRedirection = () => {
        if (
            sessionStorage.getItem("redirectionPath")) {
            if (sessionStorage.getItem("redirectionPath") == PAGES.LOGIN) {
                appController.redirectToPage(PAGES.DASHBOARD);
                return;
            }
            let loginDataInfo = JSON.parse(
                sessionStorage.getItem("redirectionData") || ""
            );
            if (loginDataInfo.length == 0) {
                appController.redirectToPage(
                    sessionStorage.getItem("redirectionPath") || ""
                );
            } else {
                appController.redirectToPage(
                    sessionStorage.getItem("redirectionPath") || "",
                    loginDataInfo
                );
            }
            appController.count(0);
            appController.passedDataArray([]);
            sessionStorage.setItem("redirectionPath", null);
            sessionStorage.setItem("redirectionData", null);
        } else {
            appController.redirectToPage(PAGES.DASHBOARD);
        }
    };

    const getHeader = () => {
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
    const getFooter = () => {
        return (
            <footer class="oj-web-applayout-footer">
                <div class="foot">
                    <div class="Ologo">
                        <img class="logo" src="css/images/gosaas-logo.png" />
                    </div>
                </div>
                <div class="copyright" id="copyright">
                    Copyright(C) 2017, 2022, GoSaaS and/or its affiliates.
                </div>
            </footer>
        );
    }
    const divider=()=>{
        return(
            <div className="oj-flex oj-sm-flex-items-initial oj-sm-justify-content-center oj-md-padding-6x-top">
            <div className="object-divider  buttonWidth">
                <hr />
                <span className="or-text">or</span>
                <hr />
            </div>
        </div>
        );
    }
    const getButtonComponent=(buttonTitle,styleClass,chroming,ojAction)=>{
        return(
            <div className="oj-flex oj-sm-flex-items-initial oj-sm-justify-content-center">
            <div id="loginBtn" className="oj-flex-item oj-sm-padding-6x-top">
                <ButtonComponent buttonTitle={buttonTitle} styleClass={styleClass}  chroming={chroming} ojAction={ojAction}></ButtonComponent>

            </div>
        </div>
        );
    }
    const passwordValidator = [
        new AsyncLengthValidator({
            max: 32,
            countBy: "codeUnit",
            hint: {
                max: "Password can not be more than 32 characters.",
            },
            messageDetail: {
                tooLong: "Password can not be more than 32 characters.",
            },
        }),
    ];

    return (
        <body class="oj-web-applayout-body">
            <div class="oj-web-applayout-page">
                {getHeader()}
                <div className="oj-web-applayout-content">
                    <oj-messages class="oj-color-invert" messages={messageArray} position={{}}   display="notification"  displayOptions={{ category: "none" }}  ></oj-messages>
                         {getButtonComponent("Company Single Sign-on","buttonWidth ","callToAction",SSOSignIn)}
                        {divider()}
                        <InputTextBox padding='oj-md-padding-3x-top' inputId="loginInput" inputClass="oj-flex-item" value={userName} labelHint="username" required={true} autofocus={true} clearIcon="conditional" onrawValueChanged={onUsernameChanged}></InputTextBox>
                        <InputTextBox inputId="loginInput" inputClass="oj-flex-item" value={password} onKeyUp={onEnter} validators={passwordValidator} labelHint="Password" maskIcon="visible" onValueChanged={onPasswordChanged} required={true} ></InputTextBox>
                        {getButtonComponent("Sign in","buttonWidth ","outlined",signIn)}
                </div>
                {showLoader ? <LoaderCircle loaderText="  "></LoaderCircle> : null}
                {getFooter()}
            </div>
        </body>
    );
};
