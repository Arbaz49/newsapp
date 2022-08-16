
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";




export default class App extends Component {
  pageSize = 16;
  state = {
    Progress: 0,
  }
  setProgress = (Progress) => {
    this.setState({ Progress: Progress })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={7}
            color='#FF0000'
            progress={this.state.Progress}

          />

          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />  </Route>
            <Route exact path="/business"><News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business" />  </Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />  </Route>
            <Route exact path="/general"><News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />  </Route>
            <Route exact path="/health"><News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health" />  </Route>
            <Route axact path="/science"><News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science" />  </Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" />  </Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology" />  </Route>


          </Switch>
        </Router>
      </div>

    )
  }
}
