import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Dimensions, ScrollView, StatusBar } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import Menu from './screens/Menu';
import Catalog from './screens/Catalog';
import Header from './components/Header';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Menu: { screen: Menu },
    Catalog: { screen: Catalog },
    Header: { screen: Header }
  },
  {
    initialRouteName: 'Home',
    headerMode: null
  }
);



const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
