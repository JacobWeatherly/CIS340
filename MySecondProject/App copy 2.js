import React from 'react';
import { Text } from 'react-native';

export default function MyApp() {

  function getFullName (fName, mName, lName){
    return fName + " " + mName + " " + lName;

  }

  const pet = "Dog";
  return (
  
      <Text>
        {"\n\n\n\n\n\n\n\n\n"}
        Hello, I am a student in CIS 340!{"\n"}
        My full name is {getFullName("Jaocb", "Paul", "Weatherly")}{"\n"}
        I have a {pet}!
        </Text>
  
  );
}


