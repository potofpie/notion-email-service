import { FC, useState, useContext, useEffect, createContext } from "react";
import { flushSync } from "react-dom";
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { CognitoUser } from '../types'
import { Loader } from '../components/Loader'


export const AuthContext = createContext<any>(undefined);
export const AuthProvider:FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();
  const [cognitoUser, setCognitoUser] = useState<CognitoUser>();
  const signOut = async ()=> {
    setLoading(true)
    await Auth.signOut();
    await getCurrentAuthenticatedUser();
    setLoading(false)
  }
  
  const googleSignIn = async () => { 
    await Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google
    }); 
  }

  const getCurrentAuthenticatedUser  = async () => {
    
    flushSync( async () => {
      let _cognitoUser = undefined;
      try{
        _cognitoUser = await Auth.currentAuthenticatedUser()
      } catch {
        console.log("User is not logged in!")
      }
      setLoading(true)
      setIsAuthenticated(undefined !== _cognitoUser)
      const filteredCognitoUser = { 
        email: _cognitoUser?.attributes?.email,
        email_verified: _cognitoUser?.attributes?.email_verified,
        sub: _cognitoUser?.attributes?.sub,
        username: _cognitoUser?.username
      }
      setCognitoUser(filteredCognitoUser)
      setLoading(false)
    });

  }

  useEffect(() => {
    getCurrentAuthenticatedUser()
  },[])

  return (
    <AuthContext.Provider value={{ 
        isAuthenticated,
        cognitoUser,
        googleSignIn,
        signOut
      }}>
        {console.log({loading})}
      {loading ?  <Loader/>: children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);