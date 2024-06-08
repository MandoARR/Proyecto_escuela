import { useState } from "react";
import { Clases_estudiante } from "../components/Clases/Clases_estudiante";
import { IEstudiantes } from "../store/IEstudiantes";

const url = "https://backend-subs-control.onrender.com/api/alumno"

export async function getOneStudent(id:string){
    const response = await fetch(`${url}/${id}`)
    const data = response.json()
}

export function Estudiante_interfaz() {
    const [selected, setSelected] = useState<IEstudiantes | null>(null)

    setSelected(data)

    return (
        <>
            <div>
                <h1>
                    Nombre: {' ' + selected.id} - {selected.nombre}
                    {' ' + selected.apellido + ' '}

                </h1>

                <h3>{selected.uuid}</h3>
                <Clases_estudiante />
            </div>
        </>
    )
}