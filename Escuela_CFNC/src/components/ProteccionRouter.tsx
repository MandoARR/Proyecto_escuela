import { Navigate, Outlet } from "react-router-dom"

export function ProteccionRouter(){
    const user = false

    if(!user){
        return <Navigate to= "/"/>
    }

    return <Outlet></Outlet>
}
    
