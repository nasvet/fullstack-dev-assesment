import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import CompaignsIndex from './components/compaigns_index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <div>
        <BrowserRouter>
          <Route path="/compaigns" component={ CompaignsIndex } />
        </BrowserRouter>
      </div>
    </Provider>
    , document.querySelector('.container'));