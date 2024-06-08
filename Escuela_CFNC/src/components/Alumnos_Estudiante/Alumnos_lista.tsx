import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteStudent } from '../../services/studets-services';
import { IEstudiantes } from '../../store/IEstudiantes';
import { getOneStudent } from '../../sections/Estudiante_interfaz';

const url = "https://backend-subs-control.onrender.com/api/alumno"

export function Alumnos_lista() {
    const [alumnos, setAlumnos] = useState<IEstudiantes[]>([]);
    const navigate = useNavigate()

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

    const handleIAlumno = (alumno: IEstudiantes) => {
        getOneStudent(alumno.id)
    }

    const handleUpdate = (alumno: IEstudiantes) => {
        navigate('/admin/alumnos/' + alumno.id, { state: { alumno } })
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
                            <td>{alumno.id}</td>
                            <td>{
                                    alumno.nombre
                                    + ' '
                                    + alumno.apellido
                                }
                            </td>

                            <td><a onClick={() => handleIAlumno(alumno)} href={'/' + alumno.uuid} target="_blank">{alumno.uuid}</a></td>
                            <td><button onClick={() => handleDelete(alumno.id)}>X</button></td>
                            <td><button onClick={() => handleUpdate(alumno)}>Actualizar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
