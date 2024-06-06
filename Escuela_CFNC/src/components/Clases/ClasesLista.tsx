import { useState, useEffect } from 'react';
import { IClases } from '../../store/IClases';
import { deleteClases, putClases } from '../../services/clases-services';
import { FormAgregar } from './FormAgregar';
import { Button } from "@mui/material";


const url = "https://backend-subs-control.onrender.com/api/clase";

export function ClasesLista() {
    const [clases, setClases] = useState<IClases[]>([]);
    const [selectedClase, setSelectedClase] = useState<IClases | null>(null)
    const [showNew, setShowNew] = useState<boolean>(false)

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setClases(data);
            })
    }, []);

    const handleDelete = (id: string) => {
        deleteClases(id)
            .then(() => {
                setClases(clases.filter((clase) => clase.id !== id))
            })
    }

    const handleUpdate = (clase: IClases) => {
        setSelectedClase(clase)
        setShowNew(true)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const nombre = formData.get("nombre")
        const costo = formData.get("costo")

        const bodyData = {
            id: selectedClase.id,
            nombre: nombre,
            costo: costo,
        }
        putClases(bodyData)
    }
    /*  useEffect(() => {
            setClases(getClases())
    }, []);*/

    return (
        <div className='containerClase'>
            <section>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOMBRE</th>
                                <th>COSTO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clases.map((clase) => (
                                <tr key={clase.id}>
                                    <td>{clase.id}</td>
                                    <td>{clase.nombre}</td>
                                    <td>${clase.costo}</td>
                                    <td><button onClick={() => handleDelete(clase.id)}> X </button></td>
                                    <td><button onClick={() => handleUpdate(clase)}> Actualizar </button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className='AlumnosSection'>
                {showNew != false ?
                    <>
                        <form onSubmit={handleSubmit}>
                            <FormAgregar />
                        </form>
                        <section>
                            <Button className='cancelUpdate' onClick={() => setShowNew(false)}>Cancelar</Button>
                        </section>
                    </>

                    : null
                }
            </section>
        </div>
    );
}
