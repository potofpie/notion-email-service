import { FC } from "react";
import {
  ProductDisplayContainer, 
  SolidButton,
  Feature
} from '../styled'
import {  Link } from "react-router-dom";



interface ProjectProps {
  icon: string;
  title: string;
  price: number;
  description: string;
  features: string[];
}



const Product:FC<ProjectProps> = ({ icon, title, description, features, price, children}) => (
  <div className="flex flex-col  border justify-center items-center border-gray-100 p-9 lg:p-11 shadow-lg relative">
  <div className="flex flex-row justify-between	 ">
    <h2 className=" font-extrabold text-lg leading-relaxed">{icon}</h2>


    <h2 className="ml-4 mr-4  font-extrabold text-lg leading-relaxed">{title}</h2>
    <h2 className=" font-extrabold text-lg leading-relaxed">${price}</h2>

  </div>
    <ul className="w-2/3">
      {
        features.map( (f: string) => 
          <Feature  className="p-3">{f}</Feature>
        )
      }
    </ul>
  <form 
    action="http://localhost:5000/create-checkout-session" 
    method="POST"
  >
    <SolidButton type="submit">
      subscribe
    </SolidButton>
  </form>
    {children}
  </div>
);

export const ProductDisplay:FC = () => (
    <ProductDisplayContainer>
      <Product 
        icon='✉️' 
        title='Premium Subscription' 
        price={5} 
        description="You have 100 emails left in your free trial ✉️" 
        features={[
          'Unlimited emails',
          'Feature requests',
          'Implimentation Support',
        ]} 
      >
        <Link to={'/'}>
          <a className="m-3 font-bold text-sm text-black hover:text-gray-700">
            continue with free setting
          </a>
        </Link>
      </Product>
    </ProductDisplayContainer>
);
