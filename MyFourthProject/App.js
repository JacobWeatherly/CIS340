import React from 'react';
import {Text, View, SectionList } from 'react-native';

export default StatesApp = () => {
  return(
    <View style = {{flex: 1, paddingtop: 22}}>
      <SectionList 
        sections = {[
          {title: 'A', data: ['Alabama', 'Alaska', 'Arkansas', 'Arizona']},
          {title: 'C', data: ['California', 'Colorado', 'Connecticut']},
          {title: 'D', data: ['Delaware']},
          {title: 'F', data: ['Florida']},
          {title: 'G', data: ['Georgia']},
          {title: 'H', data: ['Hawaii']},
          

        ]}//You can continue with more sections
        returnItem = {({item}) => <Text style = {{padding:10, fontSize:20, height:44}}> {item} </Text>}
        renderSectionHeader = {({section}) => <Text style = {{paddingTop: 4, paddingLeft: 10, 
          paddingRight: 10, 
          paddingBottom: 4, 
          fontSize: 16, 
          fontWeight: 'bold', 
          backgroundColor: '#9FA8DA',}}> {section.title}</Text>} //Set your custom color
          keyExtractor = {(item, index) => index}
      
      />

    </View>
   
  );//End of return statement
 }

