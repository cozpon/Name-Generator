import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../styles.scss';
import App from './containers/App';


//---------SERVICEWORKERS-------------------
import registerServiceWorker from './lib/registerServiceWorker';

// ------STORE--------------------------
const store = createStore(
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div id="source">
        <Route exact path="/" component={App} />
      </div>
    </Router>
  </Provider>,
document.getElementById('root')
);

registerServiceWorker();