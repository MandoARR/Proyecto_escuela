import { useState, useEffect, FormEvent } from 'react';
import { IClases } from '../../store/IClases';
import { deleteClases, putClases } from '../../services/clases-services';
import { FormAgregar } from './FormAgregar';
import { Button, Sheet } from "@mui/joy";
import { useNavigate } from 'react-router-dom';
import { AspectRatio, Card, CardContent, IconButton, Typography } from '@mui/joy';


const url = "https://backend-subs-control.onrender.com/api/clase";

export function ClasesLista() {
    const [clases, setClases] = useState<IClases[]>([]);
    const [selectedClase, setSelectedClase] = useState<IClases | null>(null)
    const [showNew, setShowNew] = useState<boolean>(false)
    const navigate = useNavigate()

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
        setSelectedClase(clase)
        setShowNew(true)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const nombre = formData.get("nombre")
        const costo = formData.get("costo")

        const bodyData = {
            id: selectedClase?.id,
            nombre: nombre,
            costo: costo,
        }
        putClases(bodyData)
        navigate('/admin/clasesNav')
    }

    return (
        <>
            <Sheet sx={{ overflow: 'auto' }}>
                {clases.map((clase) => (
                    <Card
                        orientation="horizontal"
                        sx={{
                            width: 570,
                            marginBottom: '1rem'
                        }}>
                        <AspectRatio sx={{ width: 250 }}>
                            <img
                                src="https://www.pngitem.com/pimgs/m/8-81474_music-studio-logo-design-circle-music-logo-design.png"
                                srcSet="https://www.pngitem.com/pimgs/m/8-81474_music-studio-logo-design-circle-music-logo-design.png"
                            />
                        </AspectRatio>
                        <div>
                            <Typography level="title-md">{clase.nombre}</Typography>
                            <IconButton
                                aria-label="bookmark Bahamas Islands"
                                variant="plain"
                                color="neutral"
                                size="sm"
                                sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                            >
                            </IconButton>
                            <CardContent orientation="vertical">
                                <div>
                                    <Typography level="body-xs">Precio:</Typography>
                                    <Typography fontSize="lg" fontWeight="lg">
                                        ${clase.costo}
                                    </Typography>
                                </div>

                                <div>
                                    <Button
                                        variant="solid"
                                        size="md"
                                        color="primary"
                                        aria-label="Explore Bahamas Islands"
                                        sx={{ ml:'auto', alignSelf: 'center' }}
                                        onClick={() => handleUpdate(clase)}
                                    >
                                        Actualizar
                                    </Button>
                                    <Button
                                        onClick={() => handleDelete(clase.id)}
                                        variant="solid"
                                        size="md"
                                        color="primary"
                                        aria-label="Explore Bahamas Islands"
                                        sx={{ margin:'1rem', alignSelf: 'center' }}

                                    >
                                        Eliminar
                                    </Button>
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </Sheet>
            <section>
                {showNew != false ?
                    <>
                        <form onSubmit={handleSubmit}>
                            <FormAgregar />
                        </form>
                        <section>
                            <Button className='cancelUpdate' onClick={() => setShowNew(false)}>Cancelar</Button>
                        </section>
                    </>

                    : null
                }
            </section>
        </>
    );
}
