import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Dimensions, ScrollView, StatusBar } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/screens/Home';
import Menu from './src/screens/Menu';
import Catalog from './src/screens/Catalog';
import Header from './src/components/Header';
import Product from './src/screens/Product';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Menu: { screen: Menu },
    Catalog: { screen: Catalog },
    Product: { screen: Product}
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
