import React from "react";
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Modal } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    height: '90vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const App = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{background: 'black', justifyContent: 'space-between'}}>
                    <Typography>Bryan Diaz</Typography>
                    <Button onClick={handleOpen} sx={{background: 'white'}}>View Resume</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <img style={{width: '100%', height: '100%', objectFit: 'contain'}} src={require('./assets/resume.PNG')}/>
                            </Box>
                        </Modal>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    />   */}
                </Toolbar>
                
            </AppBar>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh', background: '#fffdfa', flexDirection: 'column'}}>
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