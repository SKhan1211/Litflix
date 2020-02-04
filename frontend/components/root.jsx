import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';

// const Root = ({ store }) => (
//   <Provider store={store}>
//     <HashRouter>
//       <App currentUser={store.getState().session.id} />
//     </HashRouter>
//   </Provider>
// );

const Root = ({ store }) => {
  window.store = store
  return (<Provider store={store}>
    <HashRouter>
      <App currentUser={store.getState().session.id} />
    </HashRouter>
  </Provider>)
};

export default Root;