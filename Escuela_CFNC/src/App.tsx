import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './sections/login'
import { Admin_portal } from './sections/Admin_portal'
import { ProteccionRouter } from './components/ProteccionRouter'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProteccionRouter/>}>
          <Route path="/admin" element={<Admin_portal />} />
          <Route path="/other" element={<h1>Otra Vista</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
