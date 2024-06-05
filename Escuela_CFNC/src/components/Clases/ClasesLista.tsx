import { useState, useEffect } from 'react';
import { IClases } from '../../store/IClases';
import { deleteClases } from '../../services/clases-services';
import { FormAgregar } from './FormAgregar';

const url = "https://backend-subs-control.onrender.com/api/clase";

export function ClasesLista() {
    const [clases, setClases] = useState<IClases[]>([]);
    const [selected, setSelected] = useState<IClases | null>(null)
    const [banner, setBanner] = useState<Boolean>(false)
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
        setSelected(clase)
        console.log(clase)
        setBanner(true)
    }

    /*  useEffect(() => {
            setClases(getClases())
    }, []);*/

    return (
        <>
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

            <section>
                {banner != true ? null :
                    <form onSubmit={handleUpdate}>
                        <FormAgregar />
                    </form>}
            </section>
        </>
    );
}
