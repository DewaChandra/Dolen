import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MyComponent from './menuUtama';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/DolenLogo.png')}
        style={styles.logo}
      />
      <MyComponent namaProps="MenuUtama" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9e9f0',
  },
  logo: {
    width: 300,
    height: 300,
  },
});
