import { useState, useEffect } from 'react';

const url = "https://backend-subs-control.onrender.com/api/alumno";

export function Alumnos_lista() {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setAlumnos(data); 
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>APELLIDO</th>
                        <th>UUID</th>
                    </tr>
                </thead>
                <tbody>
                    {alumnos.map((alumno) => (
                        <tr key={alumno.id}>
                            <td>{alumno.id}</td>
                            <td>{alumno.nombre}</td>
                            <td>{alumno.apellido}</td>
                            <td>{alumno.uuid}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
