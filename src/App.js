import React from "react";
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Modal } from "@mui/material";

const App = () => {
    const handleOpen = () => {
        window.open(require('./assets/resume.PNG'))
    };
    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{background: 'black', justifyContent: 'space-between'}}>
                    <Typography>Bryan Diaz</Typography>
                    <Button onClick={handleOpen} sx={{background: 'white'}}>View Resume</Button>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    />   */}
                </Toolbar>
                
            </AppBar>
            <Box sx={{marginTop: '5vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#fffdfa', flexDirection: 'column'}}>
                <Box>
                    <img src={require('./assets/bryan.jpg')} style={{width: '20vw', height: '20vw', borderRadius: '50%'}}/>
                </Box>
                <Typography sx={{fontSize: '2rem'}}>Projects</Typography>
                <Box sx={{display: 'flex', justifyContent: 'space-evenly', width: '95vw', flexFlow: 'wrap'}}>
                    <Box>
                        <Typography>Nation Safe Drivers</Typography>
                        <a href="https://market-dev.nationsafedrivers.com/" target="_blank">
                            <img style={{width: '100%', height: '15rem', objectFit: 'cover'}} src={require('./assets/nsdmain.PNG')} />
                        </a>
                    </Box>
                    <Box>
                        <Typography>Wedge Cocktails</Typography>
                        <a href="https://www.wedgecocktails.com/" target="_blank">
                            <img style={{width: '100%', height: '15rem', objectFit: 'cover'}} src={require('./assets/wedge.PNG')} />
                        </a>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default App;