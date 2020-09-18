import * as React from 'react';
import { Provider } from 'react-redux';
import createReduxStore from './base/redux/store';
import Todo from './modules/todo/views';

const store = createReduxStore();

const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};

export default App;
