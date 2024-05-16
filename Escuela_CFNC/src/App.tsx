import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './sections/login'
import { Admin } from './sections/admin'
import { ProteccionRouter } from './components/ProteccionRouter'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProteccionRouter/>}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/other-view" element={<h1>Otra Vista</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
