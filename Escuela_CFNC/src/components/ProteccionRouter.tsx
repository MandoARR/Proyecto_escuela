import { Navigate, Outlet } from "react-router-dom"
import { useLoginStore } from "../store/useLoginStore"

export function ProteccionRouter(){
    const {isLoggedIn} = useLoginStore()

    if(!isLoggedIn){
        return <Navigate to= "/"/>
    }

    return <Outlet></Outlet>
}
    
