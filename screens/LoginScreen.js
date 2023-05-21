import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native'
import { auth } from '../firebase'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const resetPassword = () => {
    auth
      .sendPasswordResetEmail(email)
      .then(Alert.alert('A reset link has been sent. Please check your email!'))
  }

  

  return (
    <ImageBackground source={require('../assets/images/bg.jpg')} resizeMode='cover' style={styles.bg}>
    <SafeAreaView
      style={styles.container}
      behavior="padding"
    >
      {/* <Image source={require('../assets/images/marketnow.png')} style={styles.logo} /> */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity
          onPress={resetPassword}
        >
          <Text style={styles.forgotText}>Forgot your password?</Text>
        </TouchableOpacity>

      </View>

      

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
    </ImageBackground>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#008000',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#008000',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#008000',
    fontWeight: '700',
    fontSize: 16,
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
  },
  forgotText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    alignSelf: 'flex-end',
    marginVertical: 5,
    borderColor:'green',
  },
})
