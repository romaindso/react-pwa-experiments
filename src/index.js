import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import thunk from 'redux-thunk';
import App from './components/appshell/App';
import StarshipsList from './containers/StarshipsList';
import StarshipDetails from './containers/StarshipDetails';
import './index.css';

const store = configureStore([ thunk ]);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={App} >
        <IndexRedirect to="/starships"/>
        <Route path="/starships" component={StarshipsList} />
        <Route path="/starships/:id" component={StarshipDetails}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
