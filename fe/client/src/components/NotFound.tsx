import {FC} from 'react';
import { Link, } from "react-router-dom";
import {Header} from './Header'
import { NotFoundImageColor } from '../assets';

import {
  TransparentButton
} from '../styled'


  export const NotFound:FC = () => {
    return (
      <div className='h-full flex flex-1 flex-col justify-between ' >
        <Header/>
        <div className='flex flex-col flex-1 justify-center items-center'>
          <img className='h-1/3' src={NotFoundImageColor}/>
          <Link  style={{ margin: 20}} to={`login`}> <TransparentButton style={{fontSize: 24}}> back 🏠 </TransparentButton></Link>
        </div>
      </div>   
  
    )
  }
  