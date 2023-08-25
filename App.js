import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <ImageBackground source = {require("./assets/rainbow.jpg")} resizeMode='cover' style={styles.backgroundImage}>
      <Image source = {require("./assets/nestle.jpg")} style={{width: 300}}/>
      <Text style={styles.text}>Good Food, Good Life</Text>
      <StatusBar style="auto" />
      <Button title='Donate' onPress={() => setCount(count+1)}></Button>
      <Text style={styles.text}>{count}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 35,
    color: 'pink',
    paddingTop: 15,
    paddingBottom: 15,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
