import React, { useState, useEffect } from 'react';
import logo from './assets/logo+name.png';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  TextInput,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
 
export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showEmailAlert, setShowEmailAlert] = useState(false);
  const [showPasswordAlert, setShowPasswordAlert] = useState(false);

  const validateEmail = (email) => {
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
  }

  useEffect(() => {
    if (showEmailAlert) {
      setShowEmailAlert(!validateEmail(email))
    }
  }, [email]);

  useEffect(() => {
    if (showPasswordAlert) {
      setShowPasswordAlert(!password.length)
    }
  }, [password]);

  const submitLogin = (email, password) => {
    const creds = { email, password };
    const body = Object.keys(creds)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(creds[key])}`).join('&');
    return fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body,
    })
      .then((respose) => respose.json())
      .then((json) => {
        console.log('response is:', json);
        Alert.alert(
          'Response',
          json.token ? `Successful Login!\nToken is: ${json.token}` : `${json.error}\n(psst.. try "eve.holt@reqres.in")`,
          json.token ? [{ text: 'Huzzah!', onPress: () => null }] : 
          [
            { text: 'no thanks', onPress: () => null },
            { text: 'Okay!', onPress: () => setEmail('eve.holt@reqres.in') },
          ],
        );
      })
      .catch((error) => console.log(error));
  }

 
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>email</Text>
          <TextInput
            testID='email-input'
            style={styles.input}
            value={email}
            placeholder='enter email...'
            placeholderTextColor='grey'
            autoCompleteType='email'
            textContentType='emailAddress'
            autoCorrect={false}
            onChangeText={(text) => setEmail(text)}
            onBlur={() => setShowEmailAlert(!validateEmail(email))}
          />
          <View style={styles.alert}>
            {showEmailAlert && (
              <Text style={styles.alertText}>
                *** invalid email address ***
              </Text>
            )}
          </View>
        </View>
        <View style={styles.inputContainer}>
        <Text style={styles.label}>password</Text>
          <TextInput
            testID='pw-input'
            style={styles.input}
            secureTextEntry
            placeholder='enter password...'
            placeholderTextColor='grey'
            autoCompleteType='password'
            textContentType='password'
            autoCorrect={false}
            onChangeText={(text) => setPassword(text)}
            onBlur={() => setShowPasswordAlert(!password.length)}
          />
          <View style={styles.alert}>
            {showPasswordAlert && (
              <Text style={styles.alertText}>
                *** password must be at least one character long ***
              </Text>
            )}
          </View>
        </View>
        {validateEmail(email) && password.length ?
          (
            <Pressable
              testID='enabled-button'
              onPressOut={() => submitLogin(email, password)}
              style={styles.button}
              android_ripple={{ color: '#ffd286'}}
            >
              <Text style={{ color: '#132c41' }}>Log In</Text>
            </Pressable>
          )
          :
          (
            <Pressable
              testID='disabled-button'
              onPressOut={() => {
                setShowEmailAlert(!validateEmail(email));
                setShowPasswordAlert(!password.length);
              }}
              style={[styles.button, styles.disabled]}
              android_ripple={{ color: '#android_ripple'}}
            >
              <Text style={{ color: 'grey' }}>Log In</Text>
            </Pressable>
          )
        }
      </View>
      <Text style={styles.slogan}>Keep your communications flowing... and business growing.</Text>
    </KeyboardAvoidingView>
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
    // borderWidth: 2,
    // borderColor: 'green',
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
  disabled: {
    backgroundColor: '#9bd3d5',
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
    marginVertical: 5,
  },
  alert: {
    height: 10,
  },
  alertText: {
    color: 'red',
    fontSize: 10,
  }
});