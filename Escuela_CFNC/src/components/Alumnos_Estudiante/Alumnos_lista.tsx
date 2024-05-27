import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteStudent } from '../../services/studets-services';

const url = "https://backend-subs-control.onrender.com/api/alumno";

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

    const handleEliminar = (id: any) => {
        deleteStudent(id)
    }

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
                           
                            <td><Link to={'/admin/alumnos/'
                                + alumno.id}>{
                                    alumno.nombre
                                    + ' '
                                    + alumno.apellido
                                }
                            </Link></td>
                            
                            <td><Link to={'/' + alumno.uuid}>{alumno.uuid}</Link></td>
                            <td><button onClick={ () => handleEliminar(alumno.id)}>X</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
