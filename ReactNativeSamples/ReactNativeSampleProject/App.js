import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import Header from './components/LittleLemonHeader';
import Footer from './components/LittleLemonFooter';
import Main from './components/LittleLemonMain';
import MenuItems from './components/MenuItems';
import LoginScreen from './components/LoginScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer';
import JsonExample from './components/JsonExample';
import Preference from './components/Preference';
import SqlExample from './components/SqlExample';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function LogoTitle(){
  return(
    <Image source={require('./img/Marzorilla Pizza.jpg')}
    style={{
      height:40,
      width:300,
      resizeMode:'contain',
      alignSelf:'center',
    }}/>
  )
}


export default function App() {
  return (
    // <View style={{flex:1,backgroundColor:'#495E57'}}>
    //   {/* <Header/>
    //   <Main/>
    //   <MenuItems/> */}
    //   <JsonExample/>
    //   {/* <LoginScreen/> */}
    //   {/* <Footer/> */}
    //   <StatusBar style="auto" />
    // </View>

 
     //<NavigationContainer>
    //   <Stack.Navigator initialRouteName='welcome'
    //     screenOptions={{
    //       headerStyle:{backgroundColor:'#333333'},
    //       headerTintColor:'#fff',
    //       headerTitleStyle:'bold',
    //       headerTitleAlign:'center',
    //     }}
    //     >
    //     <Stack.Screen options={{title:'Home',
    //     headerTitle:(props)=><LogoTitle{...props}/>}}
    //     name="welcome" component={LoginScreen}></Stack.Screen>
    //     <Stack.Screen name="Menu" component={MenuItems}/>
    //   </Stack.Navigator>
    //</NavigationContainer>




  // <Tab.Navigator
  //     screenOptions={({route})=>({
  //       tabBarIcon:({focused,color,size})=>{
  //         let iconName;
  //         // if(route.name==='welcome'){
  //         //   iconName=focused
  //         //     ?'md-information-circle'
  //         //     :'md-information-circle-outline';
  //         // }else if(route.name==='Menu'){
  //         //   iconName='md-list';
  //         // }
  //         if (route.name === 'Welcome') {
  //           iconName = focused
  //             ? 'information-circle'
  //             : 'information-circle-outline';
  //         } else if (route.name === 'Menu') {
  //           iconName = 'format-list-bulleted';
  //         }

  //         return <MaterialCommunityIcons name={iconName} size={size} color={color}/>;
  //       },
  //       tabBarActiveTintColor:'tomato',
  //       tabBarInactiveTintColor:'gray',
  //     })}>
  //     <Tab.Screen name = "Menu" component={MenuItems}/>
  //     <Tab.Screen name='welcome' component={LoginScreen}/>
  //   </Tab.Navigator>


  <NavigationContainer>
    <Drawer.Navigator initialRouteName='SQL' screenOptions={{drawerPosition:'right'}}>
      <Drawer.Screen name='Welcome' component={LoginScreen}></Drawer.Screen>
      <Drawer.Screen name='Menu' component={MenuItems}/>
      <Drawer.Screen name='JsonExample' component={JsonExample}/>
      <Drawer.Screen name='Preference' component={Preference}/>
      <Drawer.Screen name='SQL' component={SqlExample}/>
    </Drawer.Navigator>
  </NavigationContainer>

  );
}

