import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import InfoIcon from '@material-ui/icons/Info';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

export const mainListItems = (
  <div>
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
    <Link style={{ textDecoration: 'None', color: 'inherit' }} to="/contact-us">
      <ListItem button>
        <ListItemIcon>
          <ContactMailIcon />
        </ListItemIcon>
        <div className="w-100 text-center mt-2">
          <ListItemText primary="contact us" />
        </div>
      </ListItem>
    </Link>

    <Link style={{ textDecoration: 'None', color: 'inherit' }} to="/info">
      <ListItem button>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <div className="w-100 text-center mt-2">
          <ListItemText primary="info" />
        </div>
      </ListItem>
    </Link>

  </div>
);
