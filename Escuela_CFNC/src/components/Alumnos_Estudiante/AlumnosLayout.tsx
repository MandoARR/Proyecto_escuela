import { Outlet } from "react-router-dom";
import { BarraAlumnos } from "./BarraAlumnos";

export function AlumnosLayout(){
    return (
        <div>
            <BarraAlumnos/>
            <Outlet />
        </div>
    );
}