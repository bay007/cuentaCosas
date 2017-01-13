'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert
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
        {this._renderRegistradores()}
      </View>
    )
  }

  _renderRegistradores=()=>{
    var arreglo=[];
    var fila=[];

    fila.push(<_Registrador></_Registrador>);
    fila.push(<_Registrador></_Registrador>);
    
    arreglo.push(<View style={ styles.columnas } >{ fila }</View>);
    arreglo.push(<View style={ styles.columnas } >{ fila }</View>);

    return arreglo;
  }

}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  columnas:{
    flex:1,
    flexDirection:'column'  
  }
});

AppRegistry.registerComponent('contacosas', () => contacosas);