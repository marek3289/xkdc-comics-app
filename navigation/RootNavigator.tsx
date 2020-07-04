import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, DetailsScreen, AboutScreen, NotFoundScreen } from '../screens';

type NavigatorProps = {
  Home: undefined;
  Details: undefined;
  About: undefined;
  NotFound: undefined;
};

const Stack = createStackNavigator();

const RootNavigator: React.FC<NavigatorProps> = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Home' component={HomeScreen} />
    <Stack.Screen name='Details' component={DetailsScreen} />
    <Stack.Screen name='About' component={AboutScreen} />
    <Stack.Screen name='NotFound' component={NotFoundScreen} />
  </Stack.Navigator>
);

export default RootNavigator;
