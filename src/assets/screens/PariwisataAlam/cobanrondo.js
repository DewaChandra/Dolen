import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, ScrollView,} from 'react-native';

const CobanRondo = ({navigation}) => {
  const googleMapsLink = 'https://maps.app.goo.gl/aMBnjZ25YefpE2RV8';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/images/cobanrondo.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Air Terjun Coban Rondo</Text>
      <Text
        style={styles.articleText}
        onPress={() => Linking.openURL(googleMapsLink)} // Membuka tautan Google Maps
        style={{color: 'blue', textDecorationLine: 'underline'}}>
        Lihat lokasi di Google Maps
      </Text>
      <Text style={styles.articleText}>⏰ : 08.00-16.00 WIB</Text>
      <Text style={styles.articleText}>💸 : Roda 2, 5K | Roda 4, 40K</Text>
      <Text style={styles.articleText}>
        Air Terjun Coban Rondo adalah salah satu objek wisata alam yang
        menakjubkan di Jawa Timur. Terletak sekitar 32 kilometer sebelah barat
        Kota Malang, air terjun ini menawarkan pemandangan alam yang mempesona
        dan udara segar yang menyegarkan. Coban Rondo adalah salah satu dari
        banyak air terjun eksotis yang terdapat di wilayah Malang.
      </Text>
      <Text style={styles.articleText}>
        Air terjun ini memiliki ketinggian sekitar 84 meter, dan airnya jatuh
        dengan indah ke kolam alami di bawahnya. Air terjun ini dikelilingi oleh
        hutan yang hijau, menambahkan sentuhan keindahan alam pada lokasinya.
        Pengunjung dapat menikmati suara gemericik air dan nuansa alam yang
        damai sambil menjelajahi sekitar Coban Rondo.
      </Text>
      <Text style={styles.articleText}>
        Coban Rondo memiliki fasilitas-fasilitas seperti area parkir, toilet,
        tempat makan kecil, serta area istirahat dan pendaftaran. Pengunjung
        akan dikenakan biaya tiket masuk yang sangat terjangkau.
      </Text>
      <Text style={styles.articleText}>
        Coban Rondo adalah destinasi yang ideal untuk berlibur dan menikmati
        alam sambil merilekskan diri. Lokasi ini cocok untuk semua orang, mulai
        dari keluarga hingga para pecinta alam. Jika Anda berkunjung ke Jawa
        Timur, Coban Rondo adalah tempat yang sayang untuk dilewatkan.
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

export default CobanRondo;
