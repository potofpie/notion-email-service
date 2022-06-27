import { Routes, Navigate, Route, Outlet, useLocation } from "react-router-dom";
import {
  AppContainer,
} from './styled'
import { ProductDisplay, Login, NotFound, Header, Demo, Action } from './components'
import {FC} from 'react';
import FadeIn from 'react-fade-in';
// import { RequireAuth } from './components/routes/RequireAuth';
import { useAuth } from './context'
import {
  RequireAuth,
  ExcludeAuth
} from './components/routes'




const excludeAuthRoutes = <Route element={<ExcludeAuth />}>

    <Route path="login" element={ 
      <FadeIn>
        <AppContainer>
          <Login/>
        </AppContainer>
      </FadeIn>
    } />

  </Route>;

const requireAuthRoutes = <Route element={<RequireAuth />}>

    <Route path="subscribe" element={
      <FadeIn className='fade-in' childClassName="fade-in">
        <AppContainer>
          <Header/>
          <ProductDisplay/> 
        </AppContainer>
      </FadeIn>
    }/>

  </Route>;



export const App:FC = () => {
  const { signOut } = useAuth();
  return (
    <AppContainer>
      <Routes>
        {excludeAuthRoutes}
        {requireAuthRoutes}
        <Route path="/demo" element={
            <FadeIn className='fade-in' childClassName="fade-in">
              <AppContainer>  
                <Header/>
                <Demo />
              </AppContainer>
            </FadeIn>
        }/>
        <Route element={<RequireAuth />}>
          <Route path="*" element={ 
              <FadeIn className='fade-in' childClassName="fade-in"> 
                <AppContainer>  
                  <NotFound/> 
                </AppContainer> 
              </FadeIn>
            }/>
        </Route>
        <Route path="logout" element={<Action action={signOut} then={'login'}/>}>
        </Route>

      </Routes>
    </AppContainer>
  )
}

