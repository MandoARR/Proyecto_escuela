import * as React from 'react';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { indigo, blueGrey } from '@mui/material/colors';


export function BarraAlumnos() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{background:blueGrey[500]}}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            </Box>
                            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            </Box>
                            <Button color="inherit" style={{background:blueGrey[50]}}>
                                <Link to={'/admin/alumnos'}>Atras</Link>
                            </Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </>
    )
}