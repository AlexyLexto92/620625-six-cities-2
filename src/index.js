import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer.js';
import thunk from 'redux-thunk';
import Operation from './reducers/operations';
import {compose} from 'recompose';
import {createAPI} from './api.js';

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  store.dispatch(Operation.loadCityOffers());
  ReactDOM.render(
      <Provider store={store}>
        <App
        />
      </Provider>
      , document.querySelector(`#root`));

};

init();
