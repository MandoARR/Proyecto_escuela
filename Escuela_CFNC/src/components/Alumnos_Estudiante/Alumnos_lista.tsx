import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteStudent } from '../../services/studets-services';
import { IEstudiantes } from '../../store/IEstudiantes';
import { getOneStudent } from '../../sections/Estudiante_interfaz';
import Card from '@mui/joy/Card';
import { AspectRatio, CardContent, Chip, Link, Typography } from '@mui/joy';

const url = "https://backend-subs-control.onrender.com/api/alumno"

export function Alumnos_lista() {
    const [alumnos, setAlumnos] = useState<IEstudiantes[]>([]);
    const navigate = useNavigate();

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
            {alumnos.map((alumno) => (
                <Card
                key={alumno.id}
                    variant="outlined"
                    orientation="horizontal"
                    sx={{
                        width: 320,
                        marginBottom: '1rem',
                        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                    }}
                >
                    <AspectRatio ratio="1" sx={{ width: 70 }}>
                        <img src='https://images.vexels.com/media/users/3/149956/isolated/preview/322cf73650d745b1682ae4aef63dfd0b-m-uacute-sico-tocando-el-saxof-oacute-n-silueta-by-vexels.png'
                        />
                    </AspectRatio>
                    <CardContent>
                        <Typography level="title-lg" id="card-description">
                            {`${alumno.nombre} ${alumno.apellido}`}
                        </Typography>
                        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
                            <Link
                                overlay
                                underline="none"
                                href="#interactive-card"
                                sx={{ color: 'text.tertiary' }}
                            >
                                {alumno.id}
                            </Link>
                        </Typography>
                        <Chip
                            variant="outlined"
                            color="primary"
                            size="sm"
                            sx={{ pointerEvents: 'none' }}
                        >
                            {alumno.uuid}
                        </Chip>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
