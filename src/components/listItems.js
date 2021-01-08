import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CreateIcon from '@material-ui/icons/Create';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

export const mainListItems = (
  <div>
    <Link style={{ textDecoration: 'None', color: 'inherit' }} to="/">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <div className="w-100 text-center mt-2">
          <ListItemText primary="Dashboard" />
        </div>
      </ListItem>
    </Link>

    <Link style={{ textDecoration: 'None', color: 'inherit' }} to="/login">
      <ListItem button>
        <ListItemIcon>
          <LockOpenIcon />
        </ListItemIcon>
        <div className="w-100 text-center mt-2">
          <ListItemText primary="Login" />
        </div>
      </ListItem>
    </Link>

    <Link style={{ textDecoration: 'None', color: 'inherit' }} to="/register">
      <ListItem button>
        <ListItemIcon>
          <VpnKeyIcon />
        </ListItemIcon>
        <div className="w-100 text-center mt-2">
          <ListItemText primary="Register" />
        </div>
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <Link style={{ textDecoration: 'None', color: 'inherit' }} to="/update-profile">
      <ListItem button>
        <ListItemIcon>
          <CreateIcon />
        </ListItemIcon>
        <div className="w-100 text-center mt-2">
          <ListItemText primary="Update Profile" />
        </div>
      </ListItem>
    </Link>

    <Link style={{ textDecoration: 'None', color: 'inherit' }} to="/buy-premium">
      <ListItem button>
        <ListItemIcon>
          <MonetizationOnIcon />
        </ListItemIcon>
        <div className="w-100 text-center mt-2">
          <ListItemText primary="upgrade to premium" />
        </div>
      </ListItem>
    </Link>

  </div>
);
