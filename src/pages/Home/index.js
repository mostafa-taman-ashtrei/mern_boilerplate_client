import React from 'react';
import { makeStyles } from '@material-ui/core';

import { useAuthState } from '../../contexts/AuthContext';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '56px',
  },
}));

const Home = () => {
  const classes = useStyles();
  const { user } = useAuthState();

  return (
    <div className={classes.root}>
      <h1>{user.username}</h1>
    </div>
  );
};

export default Home;
