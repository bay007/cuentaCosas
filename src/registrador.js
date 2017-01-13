'use strict';
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	Vibration,
	Alert,
	View
} from 'react-native';

export default class registrador extends Component {

	constructor(props) { //declaramos el constructor de el componente (NOTA: La estructura del constructor es una estructura bien definida)
	    super(props);
	    
	    this.state = {
			inputValue: 0 //inicializamos la variable que usaremos para llevar la cuenta	        
	    }
	}

	render() {
	    return (
		    /*definimos el espacio necesario para que el usuario pueda interactuar con TouchableOpacity*/
	        /*definimos las funciones ECM6 _onLongPress y _onPress*/
	        <TouchableOpacity onLongPress={this._onLongPress} onPress={this._onPress} style={styles.buttonContainer}>
	          <View>
	            {/*mostramos con this.state.inputValue el valor del conteo*/}
	            <Text style={styles.buttonContainerText}>{this.state.inputValue}</Text>
	          </View>
	        </TouchableOpacity >
	    )
  	}

  	_onLongPress = () =>{ //se define el comportamiento, en este caso, el uso de alert.
	    Alert.alert(
	      'Reset',
	      'Se regresa el valor a 0',
	      [
	        {
	          text: 'OK', onPress: this.setState({ inputValue: 0 })
	        },
	      ],
	      {
	        cancelable: true
	      }
    	);
  	}

  	_onPress = () =>{ //definir el comportamiento de lo que hará la aplicacion al tocarla normal NOTA: Para usar VIBRATE hay que dar permisos en el archivo manifest y volver a compilar
    	this.setState(
	      {
	      inputValue: this.state.inputValue+1 //aumentamos el valor de lo que se despliega en pantalla en 1
	      }
	    );
    	
    	Vibration.vibrate([0,150]); //delay de 0 y luego dura 150
  	} 
}


const styles=StyleSheet.create({
  buttonContainer:{
    flex: 50,
    opacity:0.9,
    backgroundColor: '#3a53c1',
    borderWidth: 2,
    borderColor: '#91AA9D',
    justifyContent: 'center'
  },
  buttonContainerText:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center'
    }
});