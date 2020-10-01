import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Pages/HomePage/Homepage';
import Login from './Pages/LoginPage/Login';
import SignupPage from './Pages/SignupPage/SignupPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignupPage} />
      </Switch>
    </div>
  );
}

export default App;
