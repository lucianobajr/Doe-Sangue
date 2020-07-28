import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import GlobalStyle from './styles/global'
import Routes from './routes'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      < BrowserRouter>
        < Routes />
        < GlobalStyle />
        <ToastContainer autoClose={3000} />
      </ BrowserRouter>
    </Provider>
  );
}

export default App;
