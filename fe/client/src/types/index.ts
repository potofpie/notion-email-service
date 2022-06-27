
export interface AuthUserContextProps {
    isAuthenticated: boolean
    cognitoUser: CognitoUser | undefined
    googleSignIn: Function
    signOut: Function
  }




export interface CognitoUser {
  email: string
  email_verified: string
  sub: string
  username: string
}


export interface User {
    email: string
    username: string
  }

export interface UserContextProps {
    user: User | undefined
    setUser: Function 
  }
