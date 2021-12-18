import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import './app.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import UserList from "./pages/userList/UserList";
import Roles from "./pages/roles/Roles";


function App() {
  return (
    <Router>
        <Topbar/>
        <div className="container">
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList/>
              </Route>
              <Route path="/roles">
                <Roles />
              </Route>
            </Switch>
           
        </div> 
    </Router>
  );      
}

export default App;
