import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import CampaignsIndex from './components/campaigns_index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <div>
        <BrowserRouter>
          <Route path="/campaigns" component={ CampaignsIndex } />
        </BrowserRouter>
      </div>
    </Provider>
    , document.querySelector('.container'));