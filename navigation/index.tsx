import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './RootNavigator';
import LinkingConfiguration from './LinkingConfiguration';

const Navigation = () => {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
