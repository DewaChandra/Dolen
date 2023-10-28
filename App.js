import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import MyComponent from './menuUtama';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/images/DolenLogo.png')}
        style={styles.logo}
      />
      <MyComponent namaProps="MenuUtama" />
    </View>
  );
};

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

export default App;
