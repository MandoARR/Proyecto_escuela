import { Link, useLocation } from "react-router-dom";
import { IEstudiantes } from "../../store/IEstudiantes";

export function Form_modificar() {

    const location = useLocation();
    const { alumno }: { alumno: IEstudiantes } = location.state;

    return (
        <>
            <h1>
                Nombre: {alumno.nombre} 
                {' ' + alumno.apellido + ' '}
                - {alumno.id}
            </h1>

            <h3>{alumno.uuid}</h3>
            <Link to={'/admin/alumnos'}>Atras</Link>
        </>
    )
}