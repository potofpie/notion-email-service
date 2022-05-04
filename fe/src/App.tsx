import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import icon from './arroba.png'
import styled from 'styled-components'


const Title = styled.div`
  font-weight: 500;
  font-size: 34px;
`
const Description = styled.div`
  font-weight: 200;
  width: 300px ;
  text-align: center;
  font-size: 12px;
`

const Email = styled.input`
  font-weight: 200;
  font-size: 14px;
`
const Icon = styled.img`
  width: 75px ;
`
const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`


function App() {
  return (
    <AppContainer>
      <Icon style={{width: 75, }} src={icon} />
      <Title>Notion Email Service</Title>
      <Description>Design and send emails marketing champains without leaving Notion</Description>
      <input className="shadow m-5 appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="Email" type="text" placeholder="Notion Account Email"/>
      <div style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
        <button className="bg-black m-3 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign In
        </button>
        <a className="inline-block align-baseline m-3 font-bold text-sm text-black hover:text-gray-700" href="#">
          Forgot Password?
        </a>
      </div>
    </AppContainer>
  )
}

export default App
