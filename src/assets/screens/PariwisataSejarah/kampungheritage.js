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

const KampungHeritage = ({navigation}) => {
  const googleMapsLink = 'https://maps.app.goo.gl/81gDTSfXdFB8kBdF6';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../assets/images/kampungheritage.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Kampung Heritage</Text>
      <Text
        style={styles.articleText}
        onPress={() => Linking.openURL(googleMapsLink)} // Membuka tautan Google Maps
        style={{color: 'blue', textDecorationLine: 'underline'}}>
        Lihat lokasi di Google Maps
      </Text>
      <Text style={styles.articleText}>⏰ : Days 07.00 - 18.30 WIB</Text>
      <Text style={styles.articleText}>💸 : 1 orang/10K</Text>
      <Text style={styles.articleText}>
        Kampung Heritage di Malang, Jawa Timur, adalah tempat yang memelihara
        kekayaan sejarah dan kebudayaan kota ini. Terletak di tengah kota,
        kampung ini menawarkan pengalaman unik bagi para pengunjung yang ingin
        menjelajahi pesona masa lalu dan keberagaman budaya Malang.
      </Text>
      <Text style={styles.articleText}>
        Kampung Heritage di Malang adalah rumah bagi bangunan-bangunan kuno yang
        masih menjaga keasliannya. Jalan-jalan sempit di kampung ini dihiasi
        dengan rumah-rumah tradisional yang megah dan warna-warni. Setiap
        sudutnya menyimpan cerita, dan di dalam bangunan-bangunan ini terkandung
        nilai-nilai sejarah yang kaya.
      </Text>
      <Text style={styles.articleText}>
        Selain arsitektur yang memukau, Kampung Heritage juga dikenal dengan
        seni dan kerajinan tangan tradisional. Para pengunjung dapat menyaksikan
        proses pembuatan batik, kerajinan anyaman, dan berbagai karya seni
        lainnya yang telah diwariskan dari generasi ke generasi. Inilah tempat
        di mana keahlian tradisional bertemu dengan inovasi modern.
      </Text>
      <Text style={styles.articleText}>
        Kehidupan sehari-hari di Kampung Heritage mencerminkan kehangatan
        masyarakat lokal. Pengunjung dapat berinteraksi dengan warga setempat,
        belajar tentang kehidupan sehari-hari mereka, dan merasakan keramahan
        yang menjadi ciri khas budaya Malang. Tak jarang, wisatawan diajak untuk
        mengikuti kegiatan tradisional seperti tari-tarian atau menyicipi
        kuliner khas daerah.
      </Text>
      <Text style={styles.articleText}>
        Kampung Heritage juga menjadi lokasi acara budaya dan festival yang
        diselenggarakan secara berkala. Melalui kegiatan ini, kampung ini
        menjadi tempat untuk merayakan warisan budaya dan menciptakan hubungan
        yang erat antara generasi muda dengan tradisi lama.
      </Text>
      <Text style={styles.articleText}>
        Bagi mereka yang mencari pengalaman wisata yang memadukan sejarah, seni,
        dan budaya, Kampung Heritage di Malang adalah destinasi yang sempurna.
        Sebuah perjalanan yang membawa pengunjung melewati lorong-lorong waktu,
        merasakan kehangatan budaya lokal, dan menyaksikan keindahan warisan
        sejarah yang tetap hidup dalam setiap jengkal kampung ini.
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

export default KampungHeritage;
