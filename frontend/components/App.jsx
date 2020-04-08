import React from "react";
import { Route, Redirect, Switch, HashRouter } from 'react-router-dom';

import LoginFormContainer from './login_form/login_form_container';
import SplashContainer from './splash/splash_container';
import SignupFormContainer from './signup_form/signup_form_container';
import WatchContainer from './watch/watch_container';
import Browse from './browse/browse';
import Movies from './movies/movies';
import Latest from './latest/latest';
import MyList from './mylist/mylist';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/browse" component={Browse} />
      <ProtectedRoute exact path="/watch/:mediaId" component={WatchContainer} />
      <ProtectedRoute exact path="/movies" component={Movies} />
      <ProtectedRoute exact path="/latest" component={Latest} />
      <ProtectedRoute exact path="/mylist" component={MyList} />
      <AuthRoute path="/" component={SplashContainer}/>
    </Switch>
  </div>
);

export default App;