import { Routes, Route, Link, } from "react-router-dom";
import { icon } from './assets'
import {
  AppContainer,
} from './styled'
import { ProductDisplay, Login, NotFound, Header } from './components'
import FadeIn from 'react-fade-in';


export const App = () => {
  return (
    <AppContainer>
      <Routes>
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
