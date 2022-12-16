import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/Todo.png'

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace('LoginScreen');
  }, 3000);
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.text}>WELCOME TO MY</Text>
      <Text style={styles.text}>TODO LIST</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8142f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
  },
  text: {
    color: 'white',
    fontSize: 30,
    marginTop: 20,
    fontWeight: "bold",
  },
})

export default SplashScreen