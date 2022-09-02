import './App.css';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import  Login  from './Login/login.component';
import rootReducer from './redux/rootReducer';
import Dashboard from './Dashboard/dashboard.component';
import Register from './Login/register.component';
import Reset from './Login/reset.component';
import { createTheme, ThemeProvider } from '@material-ui/core'
import {green} from '@material-ui/core/colors'

const store = createStore(rootReducer)
const theme = createTheme({
  palette: {
    primary: {
    main: '#1e88e5',
    },
    secondary: {
      main: '#80d8ff',
    },
  }
})
const App = () => {
  return (
    <Provider store={store} > 
    <ThemeProvider theme={theme}>
      <div className="App">
      <Router>
        <Routes>
      <Route exact path="/" element={<Login />} />
      <Route eaxct path="/dashboard" element={<Dashboard />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/reset" element={<Reset />} />
      </Routes>
      </Router>
      </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
