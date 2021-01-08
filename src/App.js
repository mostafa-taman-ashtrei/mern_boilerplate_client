import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles, CssBaseline } from '@material-ui/core';
import Axios from 'axios';

import Navbar from './components/NavBar';
import Home from './pages/Home/index';

Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
Axios.defaults.withCredentials = true;

const useStyle = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    background: '#e0e0e0',
    width: '100%',
    overflowY: 'auto',
    display: 'flex',
  },
}));

const App = () => {
  const classes = useStyle();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
