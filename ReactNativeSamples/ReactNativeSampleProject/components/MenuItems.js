import React, { useState } from "react";
import { useEffect } from "react";
import {View,Text,ActivityIndicator,ScrollView, FlatList,StyleSheet,SectionList, Pressable} from 'react-native';

const green = '#495E57';
const yellow = '#F4CE14';

const menuItemToDisplay = [
  { name: 'Hummus', id: '1A' },
  { name: 'Moutabal', id: '2B' },
  { name: 'Falafel', id: '3C' },
  { name: 'Marinated Olives', id: '4D' },
  { name: 'Kofta', id: '5E' },
  { name: 'Eggplant Salad', id: '6F' },
  { name: 'Lentil Burger', id: '7G' },
  { name: 'Smoked Salmon', id: '8H' },
  { name: 'Kofta Burger', id: '9I' },
  { name: 'Turkish Kebab', id: '10J' },
  { name: 'Fries', id: '11K' },	
  { name: 'Buttered Rice', id: '12L' },
  { name: 'Bread Sticks', id: '13M' },
  { name: 'Pita Pocket', id: '14N' },
  { name: 'Lentil Soup', id: '15O' },
  { name: 'Greek Salad', id: '16Q' },
  { name: 'Rice Pilaf', id: '17R' },
  { name: 'Baklava', id: '18S' },
  { name: 'Tartufo', id: '19T' },
 
];

const ItemsForSectionList = [
    {
        title:'Appetizers',
        data:[
            'Marinated Olivers',
            'Eggplant salad',
        ],
    },
    {
        title:'Main Dishes',
        data:['Lentil Burger','Smoked Salmon','Turkish Ketab'],
    },
    {
        title:'Sides',
        data:['Fries','Buttered Rice','Bread Sticks','Greek Salad'],
    },
    {
        title:'Desserts',
        data:['Hot Chocolate','Ice Cream','Milkshake'],
    }
]

const ItemsForSectionList0 = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.33' },
    ],
  },
];



const Separator = () => <View style={menuStyles.separator}/>
const Header = () => <Text style={menuStyles.headerText}>View Menu</Text>;
const Footer = () => <Text>All rights reserved@Little Lemon</Text>;


const Item = ({name,id})=>{
   return( 
    <View>
        <Text style={{fontSize:20,textAlign:'right'}}>{name}        {id}</Text>
    </View>
   )
}
const renderItem = ({item}) => <Item name={item.name} id={item.id}/>

// const MenuItems = ()=>{
//     return(
//         <View style={{flex:0.75,fontSize:30}}>
//             <ScrollView
//                 indicatorStyle={'white'}
//                 horizontal={false}
//                 style={{
//                     padding:30,
//                     backgroundColor:'green',
//                 }}>
//                 {/* <Text style={{fontSize:40,flexWrap:'wrap',color:'white'}}>View Menu</Text> */}
//                 {/* <Text>{menuItemToDisplay[0]}</Text> */}
//                 <FlatList data={menuItemToDisplay} renderItem={renderItem} 
//                           keyExtractor={(item)=> item.id}
//                           ItemSeparatorComponent={Separator}
//                           ListHeaderComponent={Header}/>
//                 <Text></Text>
//                 <Text></Text>
//             </ScrollView>
//         </View>
//     )
// }

const MenuItems = ({navigation}) =>{
    const [data,setData] = useState([]);
    const [isLoading,setLoading] = useState(true);

    const getMenu = async()=>{
        try{
            const response = await fetch('https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/littleLemonSimpleMenu.json');
        const json = await response.json();
        setData(json.menu);
        }catch(error){
            console.error(error);
        }
    }
    useEffect(()=>{
        getMenu();
    },[]);
    const [showMenu,setShowMenu] = useState(false);
    const Items = ({item}) => <Item name={item.name} id={item.price}/>
    const renderSectionHeader =({section:{title}}) =>(
        <Text style={menuStyles.sectionHeader}>{title}</Text>
    )
    return (
        <View style={menuStyles.container}>
            <Pressable style={menuStyles.button} 
            onPress={()=>{setShowMenu(!showMenu)}}>
                <Text style={menuStyles.buttonText}>
                    {showMenu?'Home':'View Menu'}
                </Text>
            </Pressable>
            
            {isLoading?<ActivityIndicator/>:
            showMenu &&(<SectionList 
            // sections={ItemsForSectionList0}
            sections={data}
            renderItem={Items}
            renderSectionHeader={renderSectionHeader}
            ItemSeparatorComponent={Separator}
            ListFooterComponent={Footer}
            />)}

            <Pressable onPress={()=>navigation.goBack()}>
                <Text>Go Back</Text>
            </Pressable>
        </View>
    )
}

export default MenuItems;

const menuStyles = StyleSheet.create({
    separator:{
        borderBottomWidth:1,
        borderColor:'#EDEFEE',
    },
    headerText:{
        color:'#EDEFEE',
        fontSize:40,
        paddingVertical:8,
        flexWrap:'wrap',
        textAlign:'center',
    },
    container:{
        flex:0.95,
        backgroundColor:yellow,
    },
    sectionHeader:{
        textAlign:'center',
        fontSize:30,
        backgroundColor:'green',
    },
    button:{
        fontSize:22,
        padding:10,
        marginVertical:8,
        margin:40,
        backgroundColor:'#EDEFEE',
        borderColor:'#EDEFEE',
        borderWidth:2,
    },
    buttonText:{
        color:'#333333',
        textAlign:'center',
        fontSize:32,
    }
})