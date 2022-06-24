import { render } from 'react-dom'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import './index.css'

const container  = document.getElementById('root')
import AuthProvider, { AuthIsSignedIn, AuthIsNotSignedIn } from './contexts/authContext'





render(
    <BrowserRouter>
      <AuthProvider>
        <App/>
      </AuthProvider>
    </BrowserRouter>, 
    container
);