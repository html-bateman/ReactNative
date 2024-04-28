import * as React from 'react';
import { Text, View, StyleSheet,Alert} from 'react-native';
import Constants from 'expo-constants';
import { Switch } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useUpdateEffect from '../useUpdate';

export default function Preference() {
  const [preferences, setPreferences] = React.useState({
    pushNotifications: false,
    emailMarketing: false,
    latestNews: false,
  });

  const updateState = (key) => () =>
    setPreferences((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
 // This effect only runs when the preferences state updates, excluding initial mount 
 useUpdateEffect(() => { 
   (async () => { 
     // Use AsyncStorage.multiSet API to persist each preference under a separate key.
        const firstPair = ["pushNotifications",preferences.pushNotifications.toString()];
        const secondPair = ["emailMarketing",preferences.emailMarketing.toString()];
        const thirdPair =  ["latestNews",preferences.latestNews.toString()];
        try{
            console.log(firstPair,secondPair,thirdPair)
            await AsyncStorage.multiSet([firstPair,secondPair,thirdPair])
        }catch(e){
            Alert.alert(`An error occurred: ${e.message}`); 
        }
   })(); 
 }, [preferences]); 

 React.useEffect(()=>{
    (async()=>{
        let values
        try{
            values = await AsyncStorage.multiGet(['pushNotifications','emailMarketing','latestNews']);
            console.log("retrieved data",values)
            const retrievedPreferences = {};
            values.forEach(([key, value]) => {
                // Convert value to boolean if necessary
                retrievedPreferences[key] = value === 'true' ? true : value === 'false' ? false : value;
            });
            setPreferences(retrievedPreferences)
        }catch(e){
            Alert.alert(`An error occurred: ${e.message}`);
        } 
    })();
 },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account Preferences</Text>
      <View style={styles.row}>
        <Text>Push notifications</Text>
        <Switch
          value={preferences.pushNotifications}
          onValueChange={updateState('pushNotifications')}
        />
      </View>
      <View style={styles.row}>
        <Text>Marketing emails</Text>
        <Switch
          value={preferences.emailMarketing}
          onValueChange={updateState('emailMarketing')}
        />
      </View>
      <View style={styles.row}>
        <Text>Latest news</Text>
        <Switch
          value={preferences.latestNews}
          onValueChange={updateState('latestNews')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  header: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
