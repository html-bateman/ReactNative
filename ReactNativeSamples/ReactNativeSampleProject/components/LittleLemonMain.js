import * as React from 'react';
import { View,Text, TextInput, StyleSheet, ScrollView} from 'react-native';

export default function Main(){
    const [firstName,onChangeFirstName] = React.useState('');
    const [lastName,onChangeLastName] = React.useState('');
    const [message,onChangeMessage] = React.useState('');


    return (
    <ScrollView style={{flex:0.5}} keyboardDismissMode='on-drag'>
        <Text style={{padding:40,fontSize:20,color:'black'}}>
            Welcome to Little Lemon{'\n\n'}
            <Text style={{fontWeight:'bold'}}> Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
        </Text>
        <TextInput value={firstName} onChangeText={onChangeFirstName}
            style={styles.input} placeholder='First Name'
        />
                <TextInput value={lastName} onChangeText={onChangeLastName}
            style={styles.input} keyboardType='phone-pad'
            secureTextEntry={true}
        />
                <TextInput value={message} onChangeText={onChangeMessage}
            style={styles.input} multiline={true} 
            placeholder={'Leave your feedback'}
            maxLength={250}
        />
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    input:{
        height:40,
        margin:12,
        borderWidth:1,
        padding:10,
        backgroundColor:'red',
    }
})