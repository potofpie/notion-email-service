import { useContext } from "react";
import {AuthContext} from './contexts/authContext'
import { Routes, Route } from "react-router-dom";
import {
  AppContainer,
} from './styled'
import { ProductDisplay, Login, NotFound, Header, Demo } from './components'
import FadeIn from 'react-fade-in';



export const App = () => {
  const authContext = useContext(AuthContext)

  return (
    <AppContainer>
      <Routes>
        <Route path="login" element={ <FadeIn>

            {console.log(authContext.signUpWithEmail("rec3college@gmail.com", "rec3college@gmail.com", "Testing-123"))}
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
      </Routes>
    </AppContainer>
  )
}

export default App
