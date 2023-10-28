import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const MenuUtama = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/images/DolenLogo.png')}
        style={styles.logo}
      />
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuText, {color: 'black'}]}>
            Pariwisata Alam
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuText, {color: 'black'}]}>
            Pariwisata Kuliner
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuText, {color: 'black'}]}>
            Pariwisata Religius
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuText, {color: 'black'}]}>
            Pariwisata Sejarah
          </Text>
        </TouchableOpacity>
      </View>
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
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    margin: 10,
    padding: 20,
    borderWidth: 5,
    borderRadius: 20,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default MenuUtama;
