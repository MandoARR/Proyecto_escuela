import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteStudent } from '../../services/studets-services';
import { IEstudiantes } from '../../store/IEstudiantes';

const url = "https://backend-subs-control.onrender.com/api/alumno";

export function Alumnos_lista() {
    const [alumnos, setAlumnos] = useState<IEstudiantes[]>([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setAlumnos(data);
            })
            .catch(error => console.error('Error fetching:', error));
    }, []);

    const handleDelete = (id: string) => {
        deleteStudent(id)
        .then(() => {
            setAlumnos(alumnos.filter((alumno) => alumno.id != id))
        })
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
                            
                            <td><a href={'/' + alumno.uuid} target="_blank">{alumno.uuid}</a></td>
                            <td><button onClick={ () => handleDelete(alumno.id)}>X</button></td>
                            <td><button onClick={ () => handleUpdate()}>Editar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
