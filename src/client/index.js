import React from 'react';
import ReactDOM from 'react-dom';
// import { ConnectedRouter } from 'react-router-redux';
import { PrimaryLayout } from './containers/layout';
import registerServiceWorker from './registerServiceWorker';

import { Route } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore, { history } from './store';

const store = configureStore();
const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={PrimaryLayout} />
      </Router>
    </Provider>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Root />, rootElement);

registerServiceWorker();
