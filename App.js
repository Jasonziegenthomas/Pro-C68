import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from './screens/transactionScreen';
import SearchScreen from './screens/searchScreen';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
  );
}}
const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:TransactionScreen},
  instagram:{screen:SearchScreen}
})
const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
