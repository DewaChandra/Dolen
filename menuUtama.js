import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const MenuUtama = () => {
  const [menuTextColors, setMenuTextColors] = useState({
    alam: 'black',
    kuliner: 'black',
    religius: 'black',
    sejarah: 'black',
  });

  const changeTextColor = (menuKey, color) => {
    setMenuTextColors({
      ...menuTextColors,
      [menuKey]: color,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => changeTextColor('alam', 'blue')}>
          <Text style={[styles.menuText, {color: menuTextColors.alam}]}>
            Pariwisata Alam
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => changeTextColor('kuliner', 'red')}>
          <Text style={[styles.menuText, {color: menuTextColors.kuliner}]}>
            Pariwisata Kuliner
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => changeTextColor('religius', 'green')}>
          <Text style={[styles.menuText, {color: menuTextColors.religius}]}>
            Pariwisata Religius
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => changeTextColor('sejarah', 'purple')}>
          <Text style={[styles.menuText, {color: menuTextColors.sejarah}]}>
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
