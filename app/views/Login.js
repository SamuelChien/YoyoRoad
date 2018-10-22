import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Carousel } from '../sections/Carousel.js';


export class Login extends React.Component {
	
	render() {
		return (
			<View style={styles.container}>
				<Carousel/>
				<Text>Hello World</Text>
		 	</View>
		);
	}

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
