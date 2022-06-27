import {FC} from 'react';
import {
    Icon,
    Title,
    Description,
  } from '../styled'
import { FcGoogle } from 'react-icons/fc';
import { icon } from '../assets'
import { useAuth } from '../context';


export const Login:FC = () => {
  const { googleSignIn } = useAuth();
  return (
      <>
          <Icon style={{width: 75, }} src={icon} />
          <Title>Notion Email Service</Title>
          <Description>Simply design and send mass email champains without leaving Notion!</Description>
          <div className='w-full flex flex-row items-center justify-around'>
          <div 
            className="flex flex-row justify-center items-center bg-black m-3 hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={googleSignIn}
            >
            <FcGoogle className="mr-3" /> 
            <div>Continue with Google</div>
          </div>
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
  