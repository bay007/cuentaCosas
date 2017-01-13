'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
  } from 'react-native';
import _Registrador from './registrador';

export default class contacosas extends Component {
constructor(props) { //declaramos el constructor de el componente (NOTA: La estructura del constructor es una estructura bien definida)
    super(props);
    
    this.state = {
        
    }
}

  render() {
    return (
      <View style={styles.mainContainer}>
        <_Registrador></_Registrador>
        <_Registrador></_Registrador>
        <_Registrador></_Registrador>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row'
  }
});

AppRegistry.registerComponent('contacosas', () => contacosas);