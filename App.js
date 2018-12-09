/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Card from './src/card'

export default class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <Card></Card>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
    justifyContent: 'center'
  }
})