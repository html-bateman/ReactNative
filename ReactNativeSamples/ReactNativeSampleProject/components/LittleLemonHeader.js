import * as React from 'react';
import { View,Text} from 'react-native';

export default function Header(){
    return (
    <View style={{flex:0.2,backgroundColor:'#F4CE14'}}>
            <Text style={{marginTop:40,fontWeight:'bold',textAlign:'center',fontSize:30}}> Little Lemon</Text>
    </View>
    );
}