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

const PantaiGoachina = ({navigation}) => {
  const googleMapsLink = 'https://maps.app.goo.gl/dkYqceh1n6qUmi9VA';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/images/goachina.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Pantai Goa China</Text>
      <Text
        style={styles.articleText}
        onPress={() => Linking.openURL(googleMapsLink)} // Membuka tautan Google Maps
        style={{color: 'blue', textDecorationLine: 'underline'}}>
        Lihat lokasi di Google Maps
      </Text>
      <Text style={styles.articleText}>⏰ : 24 jam</Text>
      <Text style={styles.articleText}>💸 : 1 orang/15K</Text>
      <Text style={styles.articleText}>
        Di tengah pesona alam Jawa Timur, Pantai Goa China di Malang muncul
        sebagai sebuah permata tersembunyi yang menawarkan keindahan alam yang
        luar biasa. Terletak di pesisir selatan Malang, pantai ini memukau
        dengan kombinasi pasir putih yang lembut, air laut yang jernih, dan
        bebatuan unik yang memberikan sentuhan magis pada panorama pesisirnya.
      </Text>
      <Text style={styles.articleText}>
        Nama "Goa China" diambil dari keberadaan gua kecil yang tersembunyi di
        antara tebing-tebing batu. Gua ini menjadi daya tarik tersendiri bagi
        pengunjung yang suka berpetualang. Dalam gua yang gelap, pengunjung
        dapat menyaksikan stalaktit dan stalagmit yang membentuk formasi indah,
        menciptakan suasana misterius yang menambah keunikan pantai ini.
      </Text>
      <Text style={styles.articleText}>
        Selain gua yang menarik, Pantai Goa China juga menawarkan spot-spot
        menakjubkan untuk bersantai. Dari atas tebing, pengunjung dapat
        menikmati panorama laut yang luas sambil merasakan angin sepoi-sepoi.
        Pantai ini juga dikelilingi oleh hamparan perbukitan hijau yang menambah
        pesona alamnya.
      </Text>
      <Text style={styles.articleText}>
        Keunikan Pantai Goa China tidak hanya terletak pada keindahan alamnya,
        tetapi juga pada tradisi dan mitos yang melingkupinya. Masyarakat
        setempat percaya bahwa gua di pantai ini memiliki kekuatan mistis dan
        diyakini sebagai tempat persembunyian para dewa. Beberapa acara
        keagamaan pun kerap diadakan di sekitar pantai ini untuk memuliakan
        keberadaan gua dan menghormati warisan budaya lokal.
      </Text>
      <Text style={styles.articleText}>
        Akses ke Pantai Goa China relatif mudah dari pusat kota Malang, dengan
        perjalanan yang membelah hamparan sawah dan perkebunan. Sejumlah
        fasilitas telah disediakan, termasuk area parkir, toilet, dan warung
        makan yang menjual makanan khas daerah. Namun, karena kealamian dan
        karakter tersembunyi pantai ini, penting untuk mempersiapkan segala
        kebutuhan sebelum berkunjung.
      </Text>
      <Text style={styles.articleText}>
        Sebelum mengunjungi Pantai Goa China, pastikan untuk memeriksa cuaca dan
        kondisi ombak. Kesiapan fisik dan peralatan yang memadai akan memastikan
        pengalaman liburan yang menyenangkan dan aman di salah satu destinasi
        terindah di Malang ini. Dengan kombinasi gua mistis, pantai indah, dan
        nuansa tradisional yang kental, Pantai Goa China di Malang menjanjikan
        pengalaman liburan yang tak terlupakan bagi setiap pengunjung yang
        mencari petualangan dan keindahan alam yang otentik.
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

export default PantaiGoachina;
