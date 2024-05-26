import { Route, Routes } from 'react-router-dom'
import { Admin_interfaz } from '../sections/Admin_interfaz'
import { ProteccionRouter } from './ProteccionRouter'
import { Pruebas } from './Pruebas'
import { Alumnos_interfaz } from '../sections/Alumnos_interfaz'
import { Suscripciones_interfaz } from '../sections/Suscripciones_interfaz'
import Clases_interfaz from '../sections/Clases_interfaz'
import Login from '../sections/Login'
import { Estudiante_interfaz } from '../sections/Estudiante_interfaz'
import { Pagos_interfaz } from '../sections/Pagos_interfaz'

export function Rutas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route element={<ProteccionRouter />}>
                    <Route path="/admin" element={<Admin_interfaz />} />
                    
                    <Route path="/admin/alumnos" element={<Alumnos_interfaz />} />
                    <Route path="/admin/alumnos/:id" element={<h1>Prueba de Interfaz</h1>} />

                    <Route path="/admin/clases" element={<Clases_interfaz />} />
                    <Route path="/admin/suscripciones" element={<Suscripciones_interfaz />} />
                    <Route path="/admin/pagos" element={<Pagos_interfaz/>} />
                    <Route path="/admin/pruebas" element={<Pruebas />} />
                </Route>
                <Route path="/:uuid" element={<Estudiante_interfaz />} />
                <Route path="/pruebas" element={<Pruebas />} />
                <Route path="*" element={<h1>404 Error de Ruta</h1>} />
            </Routes>
        </>

    )
}