import { Route, Routes } from 'react-router-dom'
import Login from '../sections/Login'
import { Admin_portal } from '../sections/Admin_portal'
import { ProteccionRouter } from './ProteccionRouter'
import { Estudiantes_interfaz } from '../sections/Estudiantes_interfaz'
import { Pruebas } from './Pruebas'
import Clases_portal from '../sections/Clases_portal'
import { Alumnos_portal } from '../sections/Alumnos_portal'
import { Suscripciones_portal } from '../sections/Suscripciones_portal'

export function Rutas() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route element={<ProteccionRouter />}>
                    <Route path="/admin" element={<Admin_portal />} />
                    <Route path="/admin/alumnos" element={<Estudiantes_interfaz />} />
                    <Route path="/admin/clases" element={<Clases_portal />} />
                    <Route path="/admin/suscripciones" element={<Suscripciones_portal />} />
                </Route>
                <Route path="/estudiante" element={<Alumnos_portal />} />
                <Route path="/pruebas" element={<Pruebas />} />
            </Routes>
        </>

    )
}