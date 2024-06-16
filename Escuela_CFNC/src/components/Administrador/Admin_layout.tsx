import { Outlet } from 'react-router-dom';
import Barra from './Barra';

export function Admin_layout() {
    return (
        <div>
            <Barra />
            <Outlet />
        </div>
    );
}