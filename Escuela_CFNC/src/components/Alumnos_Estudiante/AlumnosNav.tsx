import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function AlumnosNav() {
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