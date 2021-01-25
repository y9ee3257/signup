import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/demoapp">
            <Home />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;