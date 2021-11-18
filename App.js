import React from 'react';
import { Pressable, Text, StyleSheet, View, Alert } from 'react-native';

export default function App(){
  //Alert
  const cardAlert = () => Alert.alert( "Title", "Text",
    [
      {text:'Ok', onPress: () => console.log('Ok button has been pressed')},
      {text:'Cancel', onPress: () => console.log('Cancel button has been pressed')}
    ]
  );

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
      <Pressable style={{padding: 24, backgroundColor: '#3d3d3d', borderRadius:8}} onPress={cardAlert} hitSlip={50}>
        <Text style={{color: '#fafafa', fontWeight: 'bold'}}>Something</Text>
      </Pressable>
    </View>
  )
}