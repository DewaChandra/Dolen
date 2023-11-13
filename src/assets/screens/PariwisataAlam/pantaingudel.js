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

const PantaiNgudel = ({navigation}) => {
  const googleMapsLink = 'https://maps.app.goo.gl/RpJKxcZvBn1UmM3x6';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/images/ngudel.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Pantai Ngudel</Text>
      <Text
        style={styles.articleText}
        onPress={() => Linking.openURL(googleMapsLink)} // Membuka tautan Google Maps
        style={{color: 'blue', textDecorationLine: 'underline'}}>
        Lihat lokasi di Google Maps
      </Text>
      <Text style={styles.articleText}>⏰ : 24 jam</Text>
      <Text style={styles.articleText}>💸 : 1 orang/15K</Text>
      <Text style={styles.articleText}>
        Pantai Ngudel, sebuah permata tersembunyi di Malang, Jawa Timur,
        mengundang para pengunjung untuk menikmati keindahan alam yang memukau.
        Terletak di pesisir selatan Malang, pantai ini menawarkan kombinasi
        pasir putih yang lembut, ombak yang tenang, dan hamparan laut yang
        membentang luas.
      </Text>
      <Text style={styles.articleText}>
        Daya tarik utama Pantai Ngudel terletak pada kealamian dan ketenangan
        suasana pantainya. Jauh dari keramaian kota, pantai ini memberikan
        pengalaman bersantai yang sempurna bagi mereka yang ingin melarikan diri
        dari rutinitas sehari-hari. Pohon kelapa yang teduh dan bebatuan alami
        menjadi penyeimbang indah untuk menyatu dengan alam.
      </Text>
      <Text style={styles.articleText}>
        Pantai Ngudel juga menawarkan keberagaman aktivitas, mulai dari berjemur
        di bawah sinar matahari, bermain air di tepi pantai, hingga menjajal
        olahraga air seperti snorkeling atau bersepeda air. Keindahan bawah
        lautnya yang masih alami menjadi daya tarik bagi para pecinta kehidupan
        laut yang ingin menyelami kekayaan bawah laut Pantai Ngudel.
      </Text>
      <Text style={styles.articleText}>
        Akses menuju Pantai Ngudel relatif mudah, dapat ditempuh dengan
        kendaraan pribadi atau menggunakan sarana transportasi umum. Beberapa
        warung makan kecil di sekitar pantai menyajikan hidangan laut segar dan
        hidangan khas lokal yang dapat dinikmati oleh para pengunjung.
      </Text>
      <Text style={styles.articleText}>
        Sebelum berkunjung, disarankan untuk memeriksa kondisi cuaca dan ombak
        agar dapat menyesuaikan aktivitas yang akan dilakukan. Selain itu,
        menghormati kebersihan pantai dan lingkungan sekitar adalah tanggung
        jawab bersama untuk menjaga keindahan alam Pantai Ngudel.
      </Text>
      <Text style={styles.articleText}>
        Dengan kealamian dan ketenangan yang ditawarkannya, Pantai Ngudel adalah
        destinasi yang cocok untuk merasakan kedamaian dan keindahan alam yang
        mempesona di Malang. Sebuah tempat yang ideal untuk melepas penat dan
        menikmati keajaiban alam yang masih alami di pesisir selatan Jawa Timur.
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

export default PantaiNgudel;
