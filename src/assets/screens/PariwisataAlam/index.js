import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';

const tourismData = [
  {
    id: '1',
    name: 'Air Terjun Coban Rondo',
    location: 'Kabupaten Malang, Jawa Timur',
    image: require('../../../assets/images/cobanrondo.jpg'),
  },
  {
    id: '2',
    name: 'Pantai Balekambang',
    location: 'Kabupaten Malang, Jawa Timur',
    image: require('../../../assets/images/balekambang.jpg'),
  },
  {
    id: '3',
    name: 'Pantai Goa China',
    location: 'Kabupaten Malang, Jawa Timur',
    image: require('../../../assets/images/goachina.jpg'),
  },
  {
    id: '4',
    name: 'Pantai Ngudel',
    location: 'Kabupaten Malang, Jawa Timur',
    image: require('../../../assets/images/ngudel.jpg'),
  },
];

const PariwisataAlam = ({ navigation }) => {
  const [animation] = useState(new Animated.Value(1));

  const renderItem = ({ item }) => {
    const handlePress = () => {
      Animated.spring(animation, {
        toValue: 0.9,
        useNativeDriver: true,
      }).start(() => {
        if (item.id === '1') {
          navigation.navigate('CobanRondo');
        } else if (item.id === '2') { 
          navigation.navigate('PantaiBalekambang');
        } else if (item.id === '3') { 
          navigation.navigate('PantaiGoachina');
        } else if (item.id === '4') { 
          navigation.navigate('PantaiNgudel');
        }

        Animated.spring(animation, {
          toValue: 1,
          useNativeDriver: true,
        }).start();
      });
    };

    return (
      <TouchableOpacity
        style={styles.touchableItem}
        onPress={handlePress}
      >
        <Animated.View
          style={[
            styles.itemContainer,
            { transform: [{ scale: animation }] },
          ]}
        >
          <View style={styles.itemImageContainer}>
            <Image source={item.image} style={styles.itemImage} />
          </View>
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemLocation}>{item.location}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };

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
          onPress={() => navigation.navigate('Home')}
        >
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
    backgroundColor: '#1343aa',
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

export default PariwisataAlam;