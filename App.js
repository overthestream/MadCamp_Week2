import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import rootReducer from './src/reducers';
import { createStore, applyMiddleware } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/common/DrawerNavigator';

const store = createStore(rootReducer);

const App = () => {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
