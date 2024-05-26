import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const url = "https://backend-subs-control.onrender.com/api/alumno";
const url_uuid = "https://backend-subs-control.onrender.com/api/alumno?uuid="

{/*EJEMPLO DE URL PARA ELIMINAR ALUMNO, ESTE UUID ES DE UNA CUENTA QUE SE BORRARA EN AUTOMATICO
https://backend-subs-control.onrender.com/api/alumno?uuid=462e3cd2-5227-4310-bf55-2db76027ca08 */}

export function Alumnos_lista() {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setAlumnos(data);
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
                        <th>UUID</th>
                    </tr>
                </thead>
                <tbody>
                    {alumnos.map((alumno) => (
                        <tr key={alumno.id}>
                            <td><Link to={'/admin/alumnos/' + alumno.id}>{alumno.id}</Link></td>
                            <td><Link to={'/admin/alumnos/' + alumno.id}>{alumno.nombre + ' ' + alumno.apellido}</Link></td>
                            <td><Link to={'/' + alumno.uuid}>{alumno.uuid}</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
