import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';

const PecelKawi = ({navigation}) => {
  const googleMapsLink = 'https://maps.app.goo.gl/oU1yAMbPSMoXX9g3A';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/images/pecelkawi.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Pecel Kawi Malang Hj. Musilah</Text>
      <Text
        style={styles.articleText}
        onPress={() => Linking.openURL(googleMapsLink)} // Membuka tautan Google Maps
        style={{color: 'blue', textDecorationLine: 'underline'}}>
        Lihat lokasi di Google Maps
      </Text>
      <Text style={styles.articleText}>⏰ : 06.00 - 17.30 WIB</Text>
      <Text style={styles.articleText}>💸 : 10K - 30K/menu</Text>
      <Text style={styles.articleText}>
        Berkunjung ke Malang jangan lupa untuk mampir di Pecel Kawi Malang Hj.
        Musilah, Toppers. Kamu bisa menikmati pecel ala Jawa Timur-an yang
        berbahan sambal kacang dengan sayuran rebus.
      </Text>
      <Text style={styles.articleText}>
        Perbedaan Pecel Kawi dengan pecel pada biasanya, pecel yang satu ini
        dilengkapi rempeyek, telur, tempe, bakwan, dadar jagung dan sebagainya.
        Rasanya dijamin enak dan gurih.
      </Text>
      <Text style={styles.articleText}>
        Toppers bisa menikmati Pecel Kawi di Rumah Makan Hj. Musilah yang telah
        beroperasi dari tahun 1975. Harganya pun cukup terjangkau hanya
        Rp14.000/porsi, langsung bikin senang lidah dan perut kenyang!
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  backButton: {
    fontSize: 16,
    color: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  articleText: {
    fontSize: 16,
    marginTop: 10,
    color: 'black',
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
  },
});

export default PecelKawi;
