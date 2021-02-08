import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Modal } from 'react-native';
import logo from './assets/logo+name.png';
 
export default function App() {
 
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.slogan}>Keep your communications flowing... and business growing.</Text>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.button}
      >
        <Text>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    paddingHorizontal: 50,
    backgroundColor: '#132c41',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  slogan: {
    color: "white",
    fontSize: 32,
    fontWeight: 'bold',
  },
  logo: {
    width: windowWidth * 0.7,
    height: windowWidth * 0.145,
    borderWidth: 2,
    borderColor: 'green',
  },
  button: {
    backgroundColor: '#f3b64e',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 24,
    margin: 13,
  },
});