import React from 'react';
import { StyleSheet, Image } from 'react-native';

export class Carousel extends React.Component {
    render(){
        return(
            <Image 
                style={styles.heroImage} 
                source={ require('./img/carousel1.png')} 
            />
        ); 
    }
}

const styles = StyleSheet.create ({
    heroImage: {
        width: undefined,
        height: undefined,
        flex:1,
    }
});