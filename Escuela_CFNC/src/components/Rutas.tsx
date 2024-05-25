import { Route, Routes } from 'react-router-dom'
import { Admin_interfaz } from '../sections/Admin_interfaz'
import { ProteccionRouter } from './ProteccionRouter'
import { Estudiantes_interfaz } from '../sections/Estudiante_interfaz'
import { Pruebas } from './Pruebas'
import { Alumnos_interfaz } from '../sections/Alumnos_interfaz'
import { Suscripciones_interfaz } from '../sections/Suscripciones_interfaz'
import Clases_interfaz from '../sections/Clases_interfaz'
import Login from '../sections/Login'

export function Rutas() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route element={<ProteccionRouter />}>
                    <Route path="/admin" element={<Admin_interfaz />} />
                    <Route path="/admin/alumnos" element={<Estudiantes_interfaz />} />
                    <Route path="/admin/clases" element={<Clases_interfaz />} />
                    <Route path="/admin/suscripciones" element={<Suscripciones_interfaz />} />
                    <Route path="/admin/pruebas" element={<Pruebas />} />
                </Route>
                <Route path="/estudiante" element={<Alumnos_interfaz />} />
                <Route path="/pruebas" element={<Pruebas />} />
            </Routes>
        </>

    )
}