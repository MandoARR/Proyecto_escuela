import { useState, useEffect } from 'react';

const url = "https://backend-subs-control.onrender.com/api/clase";

export function Clases_lista() {
    const [clases, setClases] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setClases(data); 
            })
            .catch(error => console.error('Error fetching:', error));
    }, []);

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
                            <td>{clase.costo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
