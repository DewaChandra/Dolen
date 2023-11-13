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

const GerejaKayutangan = ({navigation}) => {
  const googleMapsLink = 'https://maps.app.goo.gl/HH6dnKpUiwddwtXM6';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/images/gerejakayutangan.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Gereja Katolik Kayu Tangan</Text>
      <Text
        style={styles.articleText}
        onPress={() => Linking.openURL(googleMapsLink)} // Membuka tautan Google Maps
        style={{color: 'blue', textDecorationLine: 'underline'}}>
        Lihat lokasi di Google Maps
      </Text>
      <Text style={styles.articleText}>⏰ : Days 08.30 - 13.00 WIB</Text>
      <Text style={styles.articleText}>⏰ : Weeks 08.30 - 19.00 WIB</Text>
      <Text style={styles.articleText}>💸 : No HTM</Text>
      <Text style={styles.articleText}>
        Di tengah gemerlapnya kota Malang yang modern, terdapat sebuah tempat
        suci yang mengundang ketenangan dan kekhusyukan, yaitu Gereja Katolik
        Kayu Tangan. Terletak di daerah Kayu Tangan, gereja ini menyuguhkan
        keanggunan arsitektur dan keindahan spiritualitas yang memukau.
      </Text>
      <Text style={styles.articleText}>
        Gereja Katolik Kayu Tangan terkenal karena keunikan struktur bangunannya
        yang terbuat dari kayu, menciptakan atmosfer yang hangat dan ramah.
        Gereja ini menjadi pusat spiritual bagi umat Katolik di sekitar Malang,
        menawarkan tempat ibadah yang tenang dan damai di tengah kesibukan kota.
      </Text>
      <Text style={styles.articleText}>
        Selain sebagai tempat ibadah, Gereja Katolik Kayu Tangan juga menjadi
        saksi sejarah perkembangan agama Katolik di Malang. Pada hari-hari
        tertentu, gereja ini ramai dikunjungi oleh umat Katolik yang mengikuti
        misa dan kegiatan keagamaan lainnya.
      </Text>
      <Text style={styles.articleText}>
        Ketika memasuki Gereja Katolik Kayu Tangan, pengunjung akan terpesona
        oleh keindahan altar kayu yang dipahat dengan detail dan indah. Suasana
        tenang dan hening membuat gereja ini menjadi tempat yang cocok untuk
        bermeditasi dan merenung, mencari kedamaian dalam keseharian yang sibuk.
      </Text>
      <Text style={styles.articleText}>
        Gereja Katolik Kayu Tangan juga terlibat dalam kegiatan sosial dan
        keagamaan, menciptakan ikatan yang erat antara jemaat dan komunitas
        sekitar. Selain itu, gereja ini sering menjadi tuan rumah berbagai acara
        keagamaan dan budaya, mengundang partisipasi dari berbagai kalangan
        masyarakat.
      </Text>
      <Text style={styles.articleText}>
        Bagi para wisatawan yang mencari pengalaman spiritual yang mendalam atau
        sekadar ingin mengagumi keindahan arsitektur kayu yang unik, Gereja
        Katolik Kayu Tangan menjadi destinasi yang tak boleh dilewatkan di
        Malang. Sebuah tempat yang merangkul nilai-nilai keagamaan dan seni
        arsitektur, memberikan pengalaman yang berkesan dan mendalam bagi setiap
        pengunjungnya.
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

export default GerejaKayutangan;
