import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import * as Permissions from 'expo-permissions'
export default class TransactionScreen extends React.Component {
  
    render(){ 
        return (
        <View style={styles.container}>
         <TouchableOpacity>
           <Text>Facebook</Text>
         </TouchableOpacity>
        </View>
      );
      
}}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize :40,
    },

  });