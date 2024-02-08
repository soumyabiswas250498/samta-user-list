import React from 'react';
import Users from './Pages/Users';
import { Provider } from "react-redux";
import store from './redux/Store';
function App() {
  return (
    <Provider store={store}>
      <div className='bg-slate-400'>
        <h1 className=''>Hello</h1>
        <Users />
      </div>
    </Provider>
  );
}

export default App;
