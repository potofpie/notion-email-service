
import styled from 'styled-components'

export const Title = styled.div`
  font-weight: 500;
  font-size: 34px;
`
export const Description = styled.div`
  font-weight: 200;
  width: 300px ;
  text-align: center;
  font-size: 12px;
`

export const Email = styled.input`
  font-weight: 200;
  font-size: 14px;
`
export const Icon = styled.img`
  width: 75px ;
`
export const AppContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const SolidButton  = styled.button.attrs(props => ({
  className: "bg-black m-3 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
}))``

export const TransparentButton  = styled.a.attrs(props => ({
  className: "align-baseline m-3 font-bold text-sm text-black hover:text-gray-700" 
}))``

export const ProductDisplayContainer  = styled.div.attrs(props => ({
  className: "flex flex-1 text-center  rounded-md justify-center items-center flex-col w-90"
}))``


export const Feature  = styled.li`
  &:before {
    content: "✅";
    margin-left: -20px; margin-right: 10px;
  }
`