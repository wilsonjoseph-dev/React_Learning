import Alert from "./Alert";
import { useState } from "react"
interface Props{
    children:string;
    color?:'primary'|'secondary' | 'danger';
    onClick:()=>void;
}

const Button = ({children,onClick,color}:Props) => {

    const[alertVisible,setAlertVisibility] = useState(false)
  return (
    <>
    {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>My Alert</Alert>}
    <button onClick={()=>setAlertVisibility(true)} className={'btn btn-'+color}>{children}</button>
        
    </>
  )
}

export default Button