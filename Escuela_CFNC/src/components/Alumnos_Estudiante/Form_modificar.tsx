import { Link, useLocation } from "react-router-dom";
import { IEstudiantes } from "../../store/IEstudiantes";

export function Form_modificar() {

    const location = useLocation();
    const { alumno }: { alumno: IEstudiantes } = location.state;

    const handleUpdateuuid = () => {
        alumno.uuid = crypto.randomUUID() //XD 
    }

    return (
        <>
            <h1>
                Nombre: {alumno.nombre}
                {' ' + alumno.apellido + ' '}
                <button>Update</button>

                {alumno.id}
                <button>Update</button>
            </h1>
            <h3>
                {alumno.uuid}
                <button
                    onClick={() => handleUpdateuuid()}>
                    Update
                </button>
            </h3>
            <Link to={'/admin/alumnos'}>Atras</Link>
        </>
    )
}