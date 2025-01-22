// import { useContext } from "react";
// import { CandidateContext } from "./Provider/CandidateContext"
import { Navigate } from "react-router-dom";


const Protected = ({children}:any)=>{

    // const data = useContext(CandidateContext);
    
    //     if (!data){
    //         return <div>error data is undefined</div>  
    //       }
    
    //     const {isLogin}=data

        const isAuth=localStorage.getItem("token")

    return isAuth ? children : <Navigate to="/login"/>
}

export default Protected