import React from 'react';
import './App.scss';
import Layout from "./components/Layout/Layout";
import Home from './views/Home'
import Projects from './views/Projects'
import Project from './views/Project'
import { observer } from 'mobx-react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'

function App() {
  const newHistory = createBrowserHistory();
  
  return (
    <div className="root">
      <Router history={newHistory}>
        <Layout>
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/projects"
              component={Projects}
            />
            <Route
              exact
              path="/project/:id"
              component={Project}
            />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default observer(App);
