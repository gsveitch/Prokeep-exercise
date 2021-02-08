import React, { useState } from 'react';
import logo from './assets/logo+name.png';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
 
export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>email</Text>
          <TextInput
            style={styles.input}
            placeholder='enter email...'
            placeholderTextColor='grey'
            autoCompleteType='email'
            textContentType='emailAddress'
            autoCorrect={false}
            onFocus={()=>{console.log('onFocus()')}}
            onChangeText={(text)=>{console.log('onChangeText:', text)}}
            onEndEditing={()=>{console.log('onEndEditing()')}}
            onBlur={()=>{console.log('onBlur()')}}
          />
        </View>
        <View style={styles.inputContainer}>
        <Text style={styles.label}>password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder='enter password...'
            placeholderTextColor='grey'
            autoCompleteType='password'
            textContentType='password'
            autoCorrect={false}
            onFocus={()=>{console.log('onFocus()')}}
            onChangeText={(text)=>{console.log('onChangeText:', text)}}
            onEndEditing={()=>{console.log('onEndEditing()')}}
            onBlur={()=>{console.log('onBlur()')}}
          />
        </View>
        <TouchableOpacity
          onPress={() => console.log('pressed')}
          style={styles.button}
        >
          <Text>Log In</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.slogan}>Keep your communications flowing... and business growing.</Text>
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
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    padding: 20,
    backgroundColor: '#2b7990',
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'space-between',
  },
  inputContainer: {
    margin: 10,
    padding: 5,
  },
  input: {
    height: 40,
    width: windowWidth * .7,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
  }
});