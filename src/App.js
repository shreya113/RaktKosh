import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import BloodDetails from './components/blood/BloodDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateBlood from './components/blood/CreateBlood';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Dashboard}></Route>
        <Route path='/project/:id' component={BloodDetails}></Route>
        <Route path='/signin' component={SignIn}></Route>
        <Route path='/signup' component={SignUp}></Route>
        <Route path='/create' component={CreateBlood}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
