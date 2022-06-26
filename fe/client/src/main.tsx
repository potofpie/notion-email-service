import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { Amplify, Auth  } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";


// import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

// import AuthProvider from 'aws-cognito-react-ui';

import './index.css'
const container  = document.getElementById('root')

const UserPoolId = import.meta.env.VITE_USER_POOL_ID
const ClientId = import.meta.env.VITE_USER_POOL_CLIENT_ID
const Region = import.meta.env.VITE_REGION;

Amplify.configure(
    {  
        userPoolId: UserPoolId,
        userPoolWebClientId: ClientId,
        Auth: {
            region: Region,
            oauth: {
                domain: "notion-email-service-dev.auth.us-east-1.amazoncognito.com",
                scope: [
                    "email",
                    "openid",
                    "aws.cognito.signin.user.admin"
                ],
                redirectSignIn: "http://localhost:3000/",
                redirectSignOut: "http://localhost:3000/",
                responseType: 'code'
            },
        }
    });

render(
    <BrowserRouter>
        
            <App/>
    </BrowserRouter>, 
    container
);