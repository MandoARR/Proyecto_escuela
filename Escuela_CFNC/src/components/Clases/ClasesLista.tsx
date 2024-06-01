import { useState, useEffect } from 'react';
import { getClases } from '../../services/clases-services';
import { IClases } from '../../store/IClases';

const url = "https://backend-subs-control.onrender.com/api/clase";

export function ClasesLista() {
    const [clases, setClases] = useState<IClases[]>([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setClases(data); 
            })
            .catch(error => console.error('Error fetching:', error));
    }, []);


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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
