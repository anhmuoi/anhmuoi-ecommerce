import { alpha, AppBar, Badge, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import logo from '../../assets/commerce.png';

const drawerWidth = 0;
const useStyle = makeStyles((theme)=>({
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
        backgroundColor: 'white',
        color: 'black'
      },
      title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
      },
      image: {
        marginRight: '10px',
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      grow: {
        flexGrow: 1,
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
      
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
    

}))
function Navbar({ totalItems }) {

    const classes = useStyle();



    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const location = useLocation();
  
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
      <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
        <MenuItem>
          <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </MenuItem>
      </Menu>
    );

    return (
        <>
            <AppBar
                position='fixed'
                className={classes.appBar}
            >
                <Toolbar>
                    <Typography
                        variant='h6'
                        className={classes.title}
                        color="inherit"
                    >
                        <img 
                            src={logo} 
                            alt='#'
                            height="25px"
                            className={classes.image}
                        ></img>
                        Commerce
                    </Typography>

                    <div className={classes.grow}></div>

                    {location.pathname === '/' && (


                    <div className={classes.button}>
                        <IconButton
                            aria-label="Show cart items"
                            color="inherit"
                            component={Link} to="/cart"
                        >
                            <Badge
                                badgeContent={totalItems ?totalItems: 0}
                                color='secondary'
                            >
                                <ShoppingCart/>
                            </Badge>
                            
                        </IconButton>

                    </div>


                    )}

                </Toolbar>
            </AppBar>   
            {renderMobileMenu}
        </>

    );
}

export default Navbar;