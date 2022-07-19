import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App/App';
import { store } from './components/redux/store';

import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={store.persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </StrictMode>
// );

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
