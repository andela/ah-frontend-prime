import React from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import config from "../../src/config.json";

export const SocialAuth = props => (
  <div>
    <div className="face-book">
      <FacebookLogin
        appId={config.appId}
        fields="name,email,picture"
        callback={props.facebooksuccess}
        icon={
          <img
            src="https://img.icons8.com/color/96/000000/facebook.png"
            width="=40px"
            height="40px"
            alt="facebook"
          />
        }
        textButton="SIGN IN WITH FACEBOOK"
      />
    </div>
    <br />
    <div className="google">
      <GoogleLogin
        clientId={config.clientId}
        buttonText="SIGN IN WITH GOOGLE"
        onSuccess={props.googlesuccess}
        onFailure={props.googlefailure}
      />
    </div>
  </div>
);

export default SocialAuth;
