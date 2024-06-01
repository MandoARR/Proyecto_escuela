import { useState, useEffect } from 'react';
import { IClases } from '../../store/IClases';
import { deleteClases } from '../../services/clases-services';

const url = "https://backend-subs-control.onrender.com/api/clase";

export function ClasesLista() {
    const [clases, setClases] = useState<IClases[]>([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setClases(data); 
            })
    }, []);

    const handleDelete = (id:string) => {
        deleteClases(id)
        .then(()=> {
            setClases(clases.filter((clase) => clase.id !== id))
        })
    }

    /*  useEffect(() => {
            setClases(getClases())
    }, []);*/

    return (
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
