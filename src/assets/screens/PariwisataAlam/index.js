import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Animated, TextInput } from 'react-native';
import FormPariwisataAlam from './formpa';

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
  const [search, setSearch] = useState('');

  const filteredData = tourismData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleOpenForm = () => {
    navigation.navigate('FormPariwisataAlam');
  };

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
      {/* TextInput for searching */}
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="black"
          onChangeText={(text) => setSearch(text)}
          value={search}
        />
        {/* Button to open the form */}
        <TouchableOpacity style={styles.formButton} onPress={handleOpenForm}>
          <Text style={styles.formButtonText}>Add New Artikel</Text>
        </TouchableOpacity>
      </View>

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
  searchInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10, 
    flex: 1, // Take up remaining space
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  formButton: {
    backgroundColor: '#1343aa',
    padding: 10,
    borderRadius: 8,
    marginLeft: 10,
    alignItems: 'center',
  },
  formButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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