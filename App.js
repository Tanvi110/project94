import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


// You can import from local files
import WelcomeScreen from './screens/WelcomeScreen';
import ResultsScreen from './screens/ResultsScreen';
import Level1Screen from './screens/Level1Screen';
import Level3Screen from './screens/Level3Screen';
import Level2Screen from './screens/Level2Screen';
import ThankyouScreen from './screens/ThankyouScreen';
import L11Screen from './screens/L11Screen';
import L12Screen from './screens/L12Screen';
import L13Screen from './screens/L13Screen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  ResultsScreen: ResultsScreen,
  Level1Screen: Level1Screen,
  Level3Screen: Level3Screen,
  Level2Screen: Level2Screen,
  L11Screen: L11Screen,
  L12Screen: L12Screen,
  L13Screen: L13Screen,
});

const AppContainer = createAppContainer(AppNavigator);

