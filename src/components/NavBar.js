import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Menu, AccountCircle } from '@material-ui/icons'
import GroupIcon from '@material-ui/icons/Group';
import { makeStyles } from '@material-ui/core/styles'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import { Link, BrowserRouter as Router, } from 'react-router-dom'


const useStyle = makeStyles((theme) => ({
    drawerPaper: { width: 'inherit'},
    link: {textDecoration: 'none', color: theme.palette.text.primary}
}))
function NavBar() {
    const classes = useStyle()
    const [open, setOpen] = useState(false)
    const handleDrawer = () => {
        setOpen(true)
    }
    return (
        <>
        <Router>
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        onClick={handleDrawer}
                        color="inherit"
                        edge="start"
                        aria-label="menu" 
                    >
                        <Menu />
                    </IconButton>
                    <Typography 
                        variant="h6"
                        style={{flexGrow:1}}
                    >Cricketers </Typography>
                    <IconButton
                        color="inherit"
                        arial-label="account"
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
            
            <Drawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
                classes= {{paper: classes.drawerPaper}}
            >
                <div style={{height:"100%", width:"220px"}}>
                    <List>
                        <Link exact to="/" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography>
                                    Home
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        </Link>

                        <Link exact to="/players" className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <GroupIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography>
                                        Players
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </Link>

                        <Link exact to="/about" className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography>
                                        About Us
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </Link>

                        <Link exact to={"/contactus"} className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <ContactsIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography>
                                        Contact Us
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </Link>
                    </List>
                </div>
            </Drawer>
            

            

        </div>
        </Router>
        </>
    )
}

export default NavBar
