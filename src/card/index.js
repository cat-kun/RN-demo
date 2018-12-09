import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

// import avatar from './img/avatar.png';
const avatar = require('./img/avatar.png');

export default class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <Image 
          source={{avatar}}
          // style={style.bg}
        ></Image>
      </View>
    );
  }
}
  
const style = StyleSheet.create({
  container: {
    // flex: 1,
    height: 90,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    shadowColor: '#4f5ea3',
    shadowOpacity: 0.14,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 8,
    borderRadius: 8,
    elevation: 3,
  },
  bg: {
    width: 272,
    height: 90
  }
})
