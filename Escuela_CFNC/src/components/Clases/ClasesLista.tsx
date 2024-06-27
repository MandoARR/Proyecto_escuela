import { useState, FormEvent, useEffect } from 'react';
import { IClases } from '../../store/IClases';
import { deleteClases, getClases, putClases } from '../../services/clases-services';
import { FormAgregar } from './FormAgregar';
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/joy/Modal';
import { AspectRatio, Card, CardContent, IconButton, Typography, Sheet, ModalDialog } from '@mui/joy';

export function ClasesLista() {
    const [clases, setClases] = useState<IClases[]>([]);
    const [selectedClase, setSelectedClase] = useState<IClases | null>(null)
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        getClases()
            .then(data => {
                setClases(data)
            })
    })

    const handleDelete = (id: string) => {
        deleteClases(id)
            .then(() => {
                setClases(clases.filter((clase) => clase.id !== id))
            })
    }

    const handleUpdate = (clase: IClases) => {
        setSelectedClase(clase)
        setOpen(true)
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
        putClases(bodyData) //QUEDA PENDIENTE REVISAR PORQUE MARCA ERROR
        navigate('/admin/clasesNav')
    }

    return (
        <>
            <Sheet sx={{ height: 700, overflow: 'auto' }}>
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
                                        variant="text"
                                        size="medium"
                                        color="primary"
                                        aria-label="Explore Bahamas Islands"
                                        sx={{ ml: 'auto', alignSelf: 'center' }}
                                        onClick={() => handleUpdate(clase)}
                                    >
                                        Actualizar
                                    </Button>
                                    <Button
                                        onClick={() => handleDelete(clase.id)}
                                        variant="text"
                                        size="medium"
                                        color="primary"
                                        aria-label="Explore Bahamas Islands"
                                        sx={{ margin: '1rem', alignSelf: 'center' }}

                                    >
                                        Eliminar
                                    </Button>
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </Sheet>
            <Modal open={open} onClose={() => setOpen(false)}>
                <section className='secUpdateClases'>
                    <ModalDialog>
                        <section>
                            <form onSubmit={handleSubmit}>
                                <FormAgregar />

                                <Button
                                    color='error'
                                    onClick={() => setOpen(false)}
                                >
                                    Cancelar
                                </Button>
                            </form>
                        </section>
                    </ModalDialog>
                </section>
            </Modal>
        </>
    );
}
