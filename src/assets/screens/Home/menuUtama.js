import React, {useState, useRef} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MenuUtama = () => {
  const navigation = useNavigation();
  const [menuTextColors, setMenuTextColors] = useState({
    alam: 'black',
    kuliner: 'black',
    religius: 'black',
    sejarah: 'black',
  });

  const animation = useRef(new Animated.Value(1)).current;
  const changeTextColor = (menuKey, color) => {
    setMenuTextColors({
      ...menuTextColors,
      [menuKey]: color,
    });

    // Animasi spring saat tombol ditekan
    Animated.spring(animation, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start(() => {
      if (menuKey === 'alam') {
        navigation.navigate('PariwisataAlam');
      } else if (menuKey === 'kuliner') {
        navigation.navigate('PariwisataKuliner');
      } else if (menuKey === 'religius') {
        navigation.navigate('PariwisataReligius');
      } else if (menuKey === 'sejarah') {
        navigation.navigate('PariwisataSejarah');
      }

      // Setelah animasi selesai, kembalikan nilai animasi ke 1
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => changeTextColor('alam', 'blue')}>
          <Animated.Text
            style={[
              styles.menuText,
              {color: menuTextColors.alam, transform: [{scale: animation}]},
            ]}>
            Pariwisata Alam
          </Animated.Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => changeTextColor('kuliner', 'red')}>
          <Animated.Text
            style={[
              styles.menuText,
              {color: menuTextColors.kuliner, transform: [{scale: animation}]},
            ]}>
            Pariwisata Kuliner
          </Animated.Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => changeTextColor('religius', 'green')}>
          <Animated.Text
            style={[
              styles.menuText,
              {color: menuTextColors.religius, transform: [{scale: animation}]},
            ]}>
            Pariwisata Religius
          </Animated.Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => changeTextColor('sejarah', 'purple')}>
          <Animated.Text
            style={[
              styles.menuText,
              {color: menuTextColors.sejarah, transform: [{scale: animation}]},
            ]}>
            Pariwisata Sejarah
          </Animated.Text>
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
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    margin: 5,
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
