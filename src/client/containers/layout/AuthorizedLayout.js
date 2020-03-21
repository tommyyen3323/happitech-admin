import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import {
  Home,
  Users
}
from '../../containers';
import {
  NavBar
} from '../../components/navigation';

const AuthorizedLayout = ({ match, location }) => (
  <Grid>
    <Grid.Row>
    </Grid.Row>
    <Grid.Row>
      <NavBar
        pageName={`${location.pathname}`}
      />
      <Grid.Column width={13} className="main-wrapper">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/users' exact component={Users} />
          {/* <Route path='/' exact component={Home} /> */}
          <Redirect to={`${match.url}`} />
        </Switch>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default AuthorizedLayout;
