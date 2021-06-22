import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from './components/views/LoginPage/LoginPage';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
