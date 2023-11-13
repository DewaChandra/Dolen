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

const PantaiBalekambang = ({navigation}) => {
  const googleMapsLink = 'https://maps.app.goo.gl/9wCbKQAaZxrM5Aks9';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/images/balekambang.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Pantai Balekambang</Text>
      <Text
        style={styles.articleText}
        onPress={() => Linking.openURL(googleMapsLink)} // Membuka tautan Google Maps
        style={{color: 'blue', textDecorationLine: 'underline'}}>
        Lihat lokasi di Google Maps
      </Text>
      <Text style={styles.articleText}>⏰ : 24 jam</Text>
      <Text style={styles.articleText}>💸 : Roda 2, 5K | Roda 4, 10K</Text>
      <Text style={styles.articleText}>
        Pantai Balekambang, sebuah surga alam di Malang, menawarkan liburan yang
        memikat dengan gabungan pasir putih yang lembut, air laut jernih, dan
        langit biru yang meluas. Keelokan pantai ini semakin memikat dengan tiga
        pulau kecil yang berjejer di sepanjang garis pantainya. Pulau-pulau ini
        dapat dijangkau melalui jembatan panjang yang menghubungkan daratan
        dengan keunikan pulau-pulau tersebut.
      </Text>
      <Text style={styles.articleText}>
        Pulau Ismoyo, pulau pertama, memberikan kesan mistis dengan candi kecil
        yang menjadi tempat beribadah. Sementara itu, Pulau Anoman menawarkan
        nuansa yang lebih hidup dengan adanya warung kecil yang menyediakan
        makanan dan minuman. Pulau Wisanggeni, yang merupakan pulau terbesar di
        antara ketiganya, menghadirkan pemandangan alam yang menakjubkan dan
        pantai yang lebih sepi, menciptakan suasana yang tenang dan nyaman.
      </Text>
      <Text style={styles.articleText}>
        Selain menikmati keindahan alam dan menjelajahi tiga pulau indah, Pantai
        Balekambang juga menawarkan berbagai aktivitas seru seperti berselancar
        menghadapi ombak yang cukup besar, fotografi untuk mengabadikan momen
        indah, dan bermain layang-layang di bawah angin sepoi-sepoi laut yang
        konstan. Dengan akses yang mudah dari pusat kota Malang, pantai ini
        dilengkapi pula dengan fasilitas seperti tempat parkir, toilet, dan
        warung makan.
      </Text>
      <Text style={styles.articleText}>
        Sebelum mengunjungi Pantai Balekambang, penting untuk memeriksa kondisi
        cuaca dan ombak. Keselamatan selama beraktivitas di laut juga perlu
        diperhatikan dengan mematuhi petunjuk keselamatan yang diberikan oleh
        pihak pengelola pantai. Dengan keunikan tiga pulau, keindahan alam yang
        memukau, dan beragam aktivitas seru, Pantai Balekambang menawarkan
        pengalaman liburan yang tak terlupakan bagi setiap pengunjungnya.
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

export default PantaiBalekambang;
