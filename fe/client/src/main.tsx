import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import './index.css'
const container  = document.getElementById('root')
render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, 
    container
);