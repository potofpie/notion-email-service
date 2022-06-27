import React from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { BrowserRouter } from "react-router-dom";
import { Amplify } from 'aws-amplify';
import { AuthProvider } from './context';
import './index.css'

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
const container  = document.getElementById('root')
render(
    <BrowserRouter>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </BrowserRouter>, 
    container
);



