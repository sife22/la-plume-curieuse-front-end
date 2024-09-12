import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './RTK/store';
import { PersistGate } from 'redux-persist/integration/react'
import ScrollToTop from './ScrollToTop';


// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Initialisation de store Redux Tool Kit */}
    <Provider store={store}>

      {/* Initialisation de package Redux Persist */}
      <PersistGate loading={null} persistor={persistor}>

        {/* Initialisation de Routage React Rooter DOM */}
        <BrowserRouter>

        {/* Ce composant est utilisé pour maintenir le scroll en haut des pages. */}
          <ScrollToTop>

            {/* Notre App */}
            <App />


          </ScrollToTop>


        </BrowserRouter>


      </PersistGate>

      
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
