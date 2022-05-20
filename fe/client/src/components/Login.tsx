import {FC} from 'react';
import {
    Icon,
    Title,
    Description,
  } from '../styled'
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineApple } from 'react-icons/ai';
import { icon } from '../assets'


const SSO_GOOGLE_LINK = import.meta.env.VITE_SSO_GOOGLE_LINK
  export const Login:FC = () => {
    return (
        <>
            <Icon style={{width: 75, }} src={icon} />
            <Title>Notion Email Service</Title>
            <Description>Simply design and send mass email champains without leaving Notion!</Description>
            {/* <input className="shadow m-5 appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="Email" type="text" placeholder="Notion Account Email"/> */}
            <div className='w-full flex flex-row items-center justify-around'>
              {console.log( )}
            <a href={`${SSO_GOOGLE_LINK}`}>
              <div className="flex flex-row justify-center items-center bg-black m-3 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <FcGoogle className="mr-3" /> 
                <div>Sign In</div>
              </div>
            </a>
            {/* <a href="https://api.notion.com/v1/oauth/authorize?client_id=2d8f7261-aa06-46d4-8c5b-8e89a69db552&response_type=code">
              <div className="flex flex-row justify-center items-center bg-black m-3 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <FcGoogle className="mr-3" /> 
                <div>Sign In</div>
              </div>
            </a> */}
              {/* <div className="flex flex-row justify-center items-center bg-black m-3 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <AiOutlineApple className="mr-3" /> 
                <div>Sign In</div>
              </div> */}
            </div>
            <a className="inline-block align-baseline m-3 font-bold text-sm text-black hover:text-gray-700" href="/demo">
                Want to see a quick demo?
            </a>
        </>                
  
    )
  }
  