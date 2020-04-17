import React from 'react';
import { Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hey, my name is {props.name}, I am a student in CIS340!</Text>
    </View>
  );
}

export default function MultiComponent(){
  return (
    <View style = {{
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center'
    }}> 
      <Text> Welcome to CIS340 </Text>
      <Student name = "Jacob Weatherly"/>
      <Student name = "John Doe"/>
      <Student name = "Joe Dirt"/>
      <Student name = "Dwight Shrute"/>
    </View>
  );
}