import React from "react";
import { Route, Redirect, Switch, HashRouter } from 'react-router-dom';

import LoginFormContainer from './login_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Route path="/" />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
  </div>
);

export default App;