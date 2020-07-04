import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import Navigation from './navigation';
import { Header } from './components';
import { theme } from './styles';

const App = () => {
  console.log(theme)

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <Navigation />
        <StatusBar />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
