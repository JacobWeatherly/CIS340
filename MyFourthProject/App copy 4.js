import React from 'react';
import {Text, View, FlatList } from 'react-native';

export default StatesApp = () => {
  return(
    <View style = {{flex: 1, paddingtop: 22}}>
      <FlatList 
        data = {[
          {key: 'Alabama'},
          {key: 'Alaska'},
          {key: 'Colorado'},
          {key: 'Kansas'},
          {key: 'Kentucky'},
          {key: 'Maine'},
          {key: 'Delaware'},
          {key: 'Idaho'},
          {key: 'New Hampshire'},
          {key: 'Vermont'},
          {key: 'Rhode Island'},
          {key: 'Texas'},
          {key: 'Missouri'},
          {key: 'Montana'},
          {key: 'Mississippi'},
          {key: 'Arkansas'},
          {key: 'Arizona'},
          {key: 'Nevada'},
          {key: 'Utah'},
          {key: 'Hawaii'},
          {key: 'Oregon'}

        ]}
        returnItem = {({item}) => <Text style = {{padding:10, fontSize:20, height:44}}> {item.key} </Text>}
      
      />

    </View>
   
  );//End of return statement
 }

