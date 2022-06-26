import { Routes, Route } from "react-router-dom";
import {
  AppContainer,
} from './styled'
import { ProductDisplay, Login, NotFound, Header, Demo } from './components'
import FadeIn from 'react-fade-in';
import { Auth  } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";





export const App = () => {
  const login = async () => {
   const result = await Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Google
      }).then((data) => console.log(data))
    console.log(result)
      // console.log(await Auth.currentAuthenticatedUser())

  }

  const user = async () => {
    console.log(await Auth.currentAuthenticatedUser())
    console.log(await Auth.currentUserInfo())
  }

  const getToken = async ()=>{
    var data = await Auth.currentSession()
    console.log(await data.getIdToken().getJwtToken());
}
const logout = async ()=>{
  var data = await Auth.signOut()
  console.log(await data);
}


  return (
    <AppContainer>
                  <button style={{backgroundColor: 'black', color: 'white', padding: 10}} onClick={() => login() }> login </button>        
                  <button style={{backgroundColor: 'black', color: 'white', padding: 10}} onClick={() => user() }> user </button>        
                  <button style={{backgroundColor: 'black', color: 'white', padding: 10}} onClick={() => logout() }> logout </button>        



      {/* <Routes>
        <Route path="login" element={ <FadeIn>
            <AppContainer>
              <Login/>
            </AppContainer>
          </FadeIn>
        } />
        <Route path="subscribe" element={
            <FadeIn className='fade-in' childClassName="fade-in">
              <AppContainer>
                <Header/>
                <ProductDisplay/> 
              </AppContainer>
            </FadeIn>
        }/>
        <Route path="demo" element={
            <FadeIn className='fade-in' childClassName="fade-in">
              <AppContainer>  
                <Header/>
                <Demo />

              </AppContainer>
            </FadeIn>
        }/>
        <Route path="*" element={ 
            <FadeIn className='fade-in' childClassName="fade-in"> 
              <AppContainer>  
                <NotFound/> 
              </AppContainer> 
            </FadeIn>
          }/>
      </Routes> */}
    </AppContainer>
  )
}

export default App
