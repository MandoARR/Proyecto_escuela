import { Link, useLocation } from "react-router-dom";
import { IEstudiantes } from "../../store/IEstudiantes";
import { putStudents } from "../../services/studets-services";
import { FormEvent, useState } from "react";
import { Form_agregar } from "./Form_agregar";
import { Button } from "@mui/material";

export function AlumnosModificar() {

    const location = useLocation();
    const { alumno }: { alumno: IEstudiantes } = location.state;
    const [showNew, setShowNew] = useState<boolean>(false)
    const [selectedAlumno, setSelectedAlumno] = useState<IEstudiantes>(alumno)

    const handleUpdateUUID = () => {
        console.log(selectedAlumno.uuid)
        const updateAlumno = { ...selectedAlumno, uuid: crypto.randomUUID(), }

        setSelectedAlumno(updateAlumno)
        console.log(selectedAlumno.uuid)

        putStudents(updateAlumno)
    }

    const handleForm = () => {
        setShowNew(true)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const nombre = formData.get("nombre")
        const apellido = formData.get("apellido")

        const bodyData = {
            id: selectedAlumno.id,
            nombre: nombre,
            apellido: apellido,
            uuid: selectedAlumno.uuid,
        }
        console.log(selectedAlumno.nombre)
        console.log(selectedAlumno.apellido)
        
        setSelectedAlumno(bodyData)
        putStudents(bodyData)
        setShowNew(false)
    }

    return (
        <>
            <div className="divAlumnoMod">
                <div>
                    <h1>
                        {selectedAlumno.id}{' - '}
                        {selectedAlumno.nombre}
                        {' ' + selectedAlumno.apellido + ' '}

                        < button
                            onClick={() => handleForm()}>
                            Update
                        </button>
                    </h1>

                    <p>
                        {selectedAlumno.uuid + ' '}
                        <button
                            onClick={handleUpdateUUID}>
                            Update
                        </button>
                    </p>
                </div>

                {showNew != false ?
                    <div>
                        <form onSubmit={handleSubmit}>
                            <Form_agregar />
                        </form>
                        <Button className='cancelUpdate' onClick={() => setShowNew(false)}>Cancelar</Button>
                    </div>
                    : null
                }
            </div >

        </>
    )
}