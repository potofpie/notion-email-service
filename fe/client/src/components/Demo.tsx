import {FC} from 'react';
import { VeryCool } from '../assets'


  export const Demo:FC = () => {
    return (
        <>

            <div className='flex flex-1 text-center  rounded-md justify-center items-center flex-col w-90'>
                <img src={VeryCool}/>
            </div>
        </>                
  
    )
  }