import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/common/DrawerNavigator';
import TabNavigator from './src/common/TabNavigator';

const App = () => {
  return(
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}
export default App;
