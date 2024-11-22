import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/helpers";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Navigation() {
  const location = useLocation();
  const pages = ["portfolio", "contact", "resume"];
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: 'inherit' }}>
          Daniel Walley
        </Typography>
        {isXs ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
              </MenuItem>
              {pages.map((Page) => (
                <MenuItem key={Page} onClick={handleMenuClose}>
                  <Link to={`/${Page}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {capitalizeFirstLetter(Page)}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              color="inherit"
              className={`mx-5 ${location.pathname === "/" && "navActive"}`}
              key="about"
            >
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
            </Button>
            {pages.map((Page) => (
              <Button
                color="inherit"
                className={`mx-5 ${location.pathname === `/${Page}` && "navActive"}`}
                key={Page}
              >
                <Link to={`/${Page}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {capitalizeFirstLetter(Page)}
                </Link>
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
