import { Outlet } from "react-router-dom";
import { BarraAlumnos } from "./BarraAlumnos";

export function AlumnoLayout(){
    return (
        <div>
            <BarraAlumnos/>
            <Outlet />
        </div>
    );
}