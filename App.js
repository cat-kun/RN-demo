/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={style.container}>
        <View style={style.other}>
          <Text>fuckfuckfuck</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        backgroundColor: '#f40',
        padding: 30,
        elevation: 20
    },
    other: {
        width: 30,
        height: 30,
        backgroundColor: '#ccc'
    }
})