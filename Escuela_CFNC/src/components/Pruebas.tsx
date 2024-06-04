import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Pruebas() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/admin/alumnos');
        }, 1000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <>
            <h1>CARGANDO...</h1>
        </>
    );
}

{/* PREGUNTAS

    -Revisa el <Form_Modificar>
    -En <Alumnos_lista> error al enviar los datos a la 
    nueva pestaña del UUID

*/}