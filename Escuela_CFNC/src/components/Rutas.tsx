import { Route, Routes } from 'react-router-dom'
import Login from '../sections/login'
import { Admin_portal } from '../sections/Admin_portal' 
import { ProteccionRouter } from './ProteccionRouter' 
import ClasesE from './Clases' 
import { Estudiantes_interfaz } from '../sections/Estudiantes_interfaz'

export function Rutas() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route element={<ProteccionRouter />}>
                    <Route path="/admin" element={<Admin_portal />} />
                    <Route path="/alumnos" element={<Estudiantes_interfaz/>} />
                </Route>
                <Route path="/estudiante" element={<ClasesE />} />
            </Routes>
        </>

    )
}