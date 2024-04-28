import * as React from 'react';
import { View,Image,Text} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <View style={{alignItems:'center',justifyContent:'space-between',flex:1}}>
    <Image style={{width:200,height:400}} resizeMode='contain' source={require('../assets/little-lemon-logo.png')}/>
    <Text style={{fontSize:30}}>Little Lemon,your local Mediterranean Bistro</Text>
    <Pressable style={{backgroundColor:'#495E57',marginBottom:20,width:'80%',borderRadius:10,borderWidth:1,padding:10,}} onPress={()=>navigation.navigate("Subscribe")}>
      <Text style={{textAlign:'center',color:'white',fontSize:20}}>NewsLetter</Text>
    </Pressable>
  </View>;
};

export default WelcomeScreen;
