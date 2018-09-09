import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Template from '../components/Template/Template';

import HomePage from '../containers/HomePage';
import StationsPage from '../containers/StationsPage';
import PlannerPage from '../containers/PlannerPage';
import InfoPage from '../containers/InfoPage';
import NotFoundPage from '../containers/NotFoundPage';

const Index = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props => (
        <Template>
          <HomePage {...props}/>
        </Template>
      )}
    />
    <Route
      exact
      path="/stations"
      render={props => (
        <Template>
          <StationsPage {...props}/>
        </Template>
      )}
    />
    <Route
      exact
      path="/planner"
      render={props => (
        <Template>
          <PlannerPage {...props}/>
        </Template>
      )}
    />
    <Route
      exact
      path="/info"
      render={props => (
        <Template>
          <InfoPage {...props}/>
        </Template>
      )}
    />
    <Route
      render={props => (
        <Template>
          <NotFoundPage {...props}/>
        </Template>
      )}
    />
  </Switch>
);

export default Index;
