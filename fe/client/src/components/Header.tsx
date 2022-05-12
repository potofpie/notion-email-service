import {FC} from 'react';
import {
    AppContainer,
    Icon,
    Title,
    Description
  } from '../styled'
  import { icon } from '../assets'


  export const Header:FC = () => {
    return (
        <div className='flex flex-row items-center justify-center w-full'>
            <Icon style={{width: 35, margin: 10}} src={icon} />
            <div className='text-2xl' >Notion Email Service</div>
        </div>                
  
    )
  }
  