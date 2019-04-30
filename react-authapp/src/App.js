import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import PageNotFound from "./components/PageNotFound"

class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <div>
        <Switch>
            <Route path="/" component={Login} exact/>
            <Route path="/home" component={Home} exact/>
            <Route component={PageNotFound}/>
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}
export default App;