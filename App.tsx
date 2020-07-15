import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './navigation';
import { Header } from './components';

const App = () => {

  return (
    <SafeAreaProvider>
      <Header />
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default App;
