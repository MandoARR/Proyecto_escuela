import { useLocation } from "react-router-dom";
import { Clases_estudiante } from "../components/Clases/Clases_estudiante";
import { IEstudiantes } from "../store/IEstudiantes";

export function Estudiante_interfaz() {

    const location = useLocation();
    const { alumno }: { alumno: IEstudiantes } = location.state;

    return (
        <>
            <div>
                <h1>
                    Nombre: {alumno.nombre}
                    {' ' + alumno.apellido + ' '}
                    - {alumno.id}
                </h1>

                <h3>{alumno.uuid}</h3>
                <Clases_estudiante />
            </div>
        </>
    )
}