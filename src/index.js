import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { App } from 'components/App';

import { GlobalStyle } from 'components/GlobalStyle';


ReactDOM.createRoot(document.getElementById('root')).render(

<BrowserRouter basename="/goit-react-hw-08-phonebook">
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
      <App />
      <GlobalStyle />
    </PersistGate>
  </Provider>
</BrowserRouter>

);
