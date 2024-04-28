import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

export default function JsonExample() {
  const [myJSON, setJsonObj] = useState([]);

  const convertStringToJson = () => { 
    const myStr = `[
      {
          "name": "Veggie Katab",
          "price": "$12",
          "type": "Main Dish"
      },
      {
          "name": "Greek Salad",
          "price": "$7",
          "type": "Side"
      },
      {
          "name": "Black Tea",
          "price": "$3",
          "type": "Drink"
      }
    ]`;

    const result = JSON.parse(myStr);
    setJsonObj(result);
  };

  useEffect(() => {
    convertStringToJson();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Little Lemon Menu</Text>
      {myJSON.map((menuItem, index) => {
        return (
          <View key={index} style={styles.innerContainer}>
            <Text style={styles.itemText}>{'Menu Item: ' + menuItem.name}</Text>
            <Text style={styles.itemText}>{'Price: ' + menuItem.price}</Text>
            <Text style={styles.itemText}>{'Type: ' + menuItem.type}</Text>
          </View>
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4CE14',
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#F4CE14',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemText: {
    color: '#495E57',
    fontSize: 22,
  },
  headerText: {
    color: '#495E57',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20, // Added some margin to top for spacing.
  },
});