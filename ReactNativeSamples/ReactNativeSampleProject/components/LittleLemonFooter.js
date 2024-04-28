import * as React from 'react';
import { View,Text,StyleSheet} from 'react-native';

export default function Footer(){
    return (
    <View style={styles.container}>
        <Text style={styles.headerText}>All rights reversed by Little Lemon 2022</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#F4CE14',
        bottom:0,
        position:'absolute',
        width:'100%'
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    textAlign:'center'
  },
});