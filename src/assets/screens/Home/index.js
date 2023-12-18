import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MyComponent from './menuUtama';
import {useNavigation} from '@react-navigation/native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/DolenLogo.png')}
        style={styles.logo}
      />
      <MyComponent namaProps="MenuUtama" />

      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navbarIconContainer}>
          <Image
            source={require('../../../assets/images/home.png')}
            style={styles.navbarIcon}
          />
          <Text style={styles.navbarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarIconContainer} onPress={() => navigation.navigate('Favorite')}>
          <Image
            source={require('../../../assets/images/favorite.png')}
            style={styles.navbarIcon}
          />
          <Text style={styles.navbarText}>Favorite</Text>
        </TouchableOpacity>
      </View>
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
    width: 200,
    height: 200,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#e9e9f0',
    position: 'absolute',
    bottom: 0,
  },
  navbarIconContainer: {
    alignItems: 'center',
  },
  navbarText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  navbarIcon: {
    width: 24,
    height: 24,
  },
});
export default Home;