import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TemplateTopMenu from '../components/TemplateTopMenu';

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
        <TemplateTopMenu>
          <HomePage {...props}/>
        </TemplateTopMenu>
      )}
    />
    <Route
      exact
      path="/stations"
      render={props => (
        <TemplateTopMenu>
          <StationsPage {...props}/>
        </TemplateTopMenu>
      )}
    />
    <Route
      exact
      path="/planner"
      render={props => (
        <TemplateTopMenu>
          <PlannerPage {...props}/>
        </TemplateTopMenu>
      )}
    />
    <Route
      exact
      path="/info"
      render={props => (
        <TemplateTopMenu>
          <InfoPage {...props}/>
        </TemplateTopMenu>
      )}
    />
    <Route
      render={props => (
        <TemplateTopMenu>
          <NotFoundPage {...props}/>
        </TemplateTopMenu>
      )}
    />
  </Switch>
);

export default Index;
