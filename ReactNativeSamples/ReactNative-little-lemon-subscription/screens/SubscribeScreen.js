import * as React from 'react';
import { View,Image,Text,TextInput,Pressable,Alert} from 'react-native';
import { ValidateEmail } from '../utils';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email,setEmail] = React.useState('');
  const [isEmailValid,setValid] = React.useState(false);

  const handleEmailChange = (email)=>{
    setEmail(email);
    setValid(ValidateEmail(email));
  }

  return <View style={{alignItems:'center'}}>
    <Image style={{height:200,width:100,marginBottom:20,marginTop:20}}source={require('../assets/little-lemon-logo-grey.png')}></Image>
    <Text style={{fontSize:20,textAlign:'center'}}>Subscribe to our newsletter for our latest delicious recipes!</Text>
    <TextInput style={{borderRadius:10,width:'80%',borderWidth:1,padding:6,marginBottom:20,marginTop:20}}keyboardType='email-address' value={email} onChangeText={handleEmailChange} placeholder={'Type your email'}></TextInput>
    <Pressable disabled={!isEmailValid} style={{backgroundColor: isEmailValid ? '#495E57' : '#D3D3D3',marginBottom:20,width:'80%',borderRadius:10,borderWidth:1,padding:10,}} onPress={()=>isEmailValid?Alert.alert("Subscribed!"):Alert.alert("Invalid email address.")}>
      <Text style={{textAlign:'center',color:'white',fontSize:20}}>Subscribe</Text>
    </Pressable>
  </View>;12
};

export default SubscribeScreen;
