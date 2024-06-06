import { Link, useLocation } from "react-router-dom";
import { IEstudiantes } from "../../store/IEstudiantes";
import { putStudents } from "../../services/studets-services";
import { useState } from "react";
import { Form_agregar } from "./Form_agregar";

export function Form_modificar() {

    const location = useLocation();
    const { alumno }: { alumno: IEstudiantes } = location.state;
    const [banner, setBanner] = useState<boolean>(false)

    const handleUpdateuuid = () => {
        console.log(alumno.uuid)
        alumno.uuid = crypto.randomUUID() //XD 
        console.log(alumno.uuid)
        putStudents(alumno)
    }

    const handleForm = () => {
        console.log(alumno.nombre)
        console.log(alumno.apellido)
        setBanner(true)
    }

    const handleSubmit = () => {
        console.log(alumno.nombre)
        console.log(alumno.apellido)
        putStudents(alumno)
    }

    return (
        <>
            <div>
                <h1>
                    {alumno.id}{' '}
                    {alumno.nombre}
                    {' ' + alumno.apellido + ' '}
                    <button
                        onClick={() => handleForm()}>
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
            {banner === true ? <form onSubmit={handleSubmit}>
                <Form_agregar />
            </form> : null} 
        </>
    )
}