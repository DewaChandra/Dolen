import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, Image,} from 'react-native';

const tourismData = [
  {
    id: '1',
    name: 'Kampung Heritage',
    location: 'Kota Malang, Jawa Timur',
    image: require('../../../assets/images/kampungheritage.jpg'),
  },
];

const FavoriteScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.touchableItem}
      onPress={() => {
        if (item.id === '1') {
          navigation.navigate('KampungHeritage');
        } 
      }}>
      <View style={styles.itemContainer}>
        <View style={styles.itemImageContainer}>
          <Image source={item.image} style={styles.itemImage} />
        </View>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemLocation}>{item.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Content */}
      <FlatList
        data={tourismData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.navbarIconContainer}
          onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../../assets/images/home.png')}
            style={styles.navbarIcon}
          />
          <Text style={styles.navbarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarIconContainer}>
          <Image
            source={require('../../../assets/images/favorite.png')}
            style={styles.navbarIcon}
          />
          <Text style={styles.navbarText}>Favorite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
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
  touchableItem: {
    marginBottom: 12,
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#d9750f',
    padding: 16,
    borderRadius: 8,
  },
  itemImageContainer: {
    flex: 1,
    marginRight: 16,
  },
  itemTextContainer: {
    flex: 3,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  itemLocation: {
    fontSize: 14,
    color: 'white',
  },
  itemImage: {
    width: '100%',
    height: 50,
    borderRadius: 8,
  },
});

export default FavoriteScreen;