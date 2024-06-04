import { Link, useLocation } from "react-router-dom";
import { IEstudiantes } from "../../store/IEstudiantes";
import { putStudents } from "../../services/studets-services";
import { useState } from "react";
import { Form_agregar } from "./Form_agregar";

export function Form_modificar() {

    const location = useLocation();
    const { alumno }: { alumno: IEstudiantes } = location.state;
    const [banner, setBanner] = useState(Boolean)

    const handleUpdateuuid = () => {
        console.log(alumno.uuid)
        alumno.uuid = crypto.randomUUID() //XD 
        console.log(alumno.uuid)
        putStudents(alumno)
    }

    const handleUpdateNombre = () => {
        console.log(banner)
        setBanner(true)  
    }

    return (
        <>
            <div>
                <h1>
                    {alumno.id}{' '}
                    {alumno.nombre}
                    {' ' + alumno.apellido + ' '}
                    <button
                        onClick={() => handleUpdateNombre()}>
                        Update
                    </button>
                </h1>

                <p>
                    {alumno.uuid + ' '}
                    <button
                        onClick={() => handleUpdateuuid()}>
                        Update
                    </button>
                </p>
                <Link to={'/admin/alumnos'}>Atras</Link>
            </div>
            {banner === true ? <Form_agregar /> : null}
        </>
    )
}