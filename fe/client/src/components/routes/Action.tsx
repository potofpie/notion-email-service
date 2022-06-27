import { FC, useEffect } from "react";
import {Navigate} from "react-router-dom";
export const Action:FC<{action: Function, then: string}> = ({action, then}) => {
    useEffect(() => {
        action();
      },[])
    return (<Navigate to={then} />)
}
