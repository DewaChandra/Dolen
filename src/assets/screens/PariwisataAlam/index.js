import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, Image,} from 'react-native';

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

class PariwisataAlam extends Component {
  renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemImageContainer}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemLocation}>{item.location}</Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={tourismData}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row', // Mengatur tata letak ke tampilan horizontal
    backgroundColor: '#1343aa',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
  },
  itemImageContainer: {
    flex: 1, // Membagi ruang seimbang antara gambar dan teks
    marginRight: 16, // Memberikan jarak antara gambar dan teks
  },
  itemTextContainer: {
    flex: 3, // Membagi ruang seimbang antara gambar dan teks
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Ubah warna teks sesuai kebutuhan
  },
  itemLocation: {
    fontSize: 14,
    color: 'white', // Ubah warna teks sesuai kebutuhan
  },
  itemImage: {
    width: '100%',
    height: 50, // Sesuaikan tinggi gambar sesuai kebutuhan Anda
    borderRadius: 8,
  },
});

export default PariwisataAlam;
