import { colorScheme,ScrollView, Text, StyleSheet,TextInput, Alert, Pressable,Image,ImageBackground, useColorScheme, useWindowDimensions} from 'react-native';
import * as React from 'react';

export default function LoginScreen({navigation}) {
    const [islogined,showMessage] = React.useState(false);
    const [email,onChangeEmail] = React.useState('');
    const [password,onChangePassword] = React.useState('');
    const colorScheme = useColorScheme();
    const {width,height,fontScale} = useWindowDimensions();
  return (
   <ScrollView style={[styles.container,colorScheme==='light'?{backgroundColor:'#fff'}:{backgroundColor:'#333333'}]}>
        <ImageBackground
            resizeMode='contain'
            style={styles.logo} 
            source={require("../img/logo.png")}>

            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Pressable onPress={()=>navigation.navigate('Menu')}>
                <Text>View Menu</Text>
            </Pressable>
        </ImageBackground>

        <Text style={styles.regular}>Color Scheme:{colorScheme}</Text>
        <Text style={styles.regular}>Window Dimensions</Text>
        <Text style={styles.regular}>height:{height}</Text>
        <Text style={styles.regular}>width:{width}</Text>
        <Text style={styles.regular}>font scale:{fontScale}</Text>

              <Image 
            resizeMode='contain'
            style={styles.image} 
            source={require('../img/Greek Salad.jpg')}
                    accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
        />
                <Image 
            resizeMode='contain'
            style={styles.image} 
            source={require("../img/Grilled Fish.jpg")}
        />
        <Image 
            resizeMode='contain'
            style={styles.image} 
            source={require("../img/Lemon Dessert.jpg")}
        />
       {islogined?<Text>You are logged in!</Text>:
       (<>
       <Text style={styles.regularText}>Login to continue </Text>
              <TextInput value={email} onChangeText={onChangeEmail}
            style={styles.input} placeholder='Email'
            onFocus={()=>Alert.alert("Enter your Email Address!")}
            onBlur={()=>Alert.alert("Thank you")}
            clearButtonMode='always' //only works on ios
            keyboardType='email-address'
        />
                <TextInput value={password} onChangeText={onChangePassword}
            style={styles.input} keyboardType='numeric' placeholder='Password'
            secureTextEntry
        />

        <Pressable onPress={()=>showMessage(!islogined)}>
            <Text>{'Log in'}</Text>
        </Pressable>
        </>)}
    </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  input:{
    backgroundColor:'yellow',
    height:40,
    borderWidth:1,
    padding:10,
  },
  logo:{
    backgroundColor:'lightblue',
    flex:1,
    justifyContent:'center'
  },
  image:{
    width:350,
    height:250,
    borderRadius:10,
    borderWidth:1,
  },
  regular:{
    fontSize:18,
    textAlign:'center',
  }
});

