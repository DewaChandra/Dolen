import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const EditBlogForm = ({route}) => {
  const {blogId} = route.params;
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    image: '',
    googleMapsLink: '',
    openingHours: '',
    ticketPrice: '',
  });

  const handleChange = (key, value) => {
    setBlogData({
      ...blogData,
      [key]: value,
    });
  };

  useEffect(() => {
    getBlogById();
  }, [blogId]);

  const getBlogById = async () => {
    try {
      const response = await axios.get(
        `https://6570831f09586eff66418846.mockapi.io/dolenapp/PariwisataAlam/${blogId}`,
      );
      setBlogData({
        title: response.data.title,
        content: response.data.content,
        googleMapsLink: response.data.googleMapsLink,
        openingHours: response.data.openingHours,
        ticketPrice: response.data.ticketPrice,
      });
      setImage(response.data.image);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await axios
        .put(
          `https://6570831f09586eff66418846.mockapi.io/dolenapp/PariwisataAlam/${blogId}`,
          {
            title: blogData.title,
            content: blogData.content,
            image,
            googleMapsLink: blogData.googleMapsLink,
            openingHours: blogData.openingHours,
            ticketPrice: blogData.ticketPrice,
          },
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLoading(false);
      navigation.navigate('PariwisataAlam');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}>
        <View style={styles.borderDashed}>
          <TextInput
            placeholder="Judul Artikel"
            value={blogData.title}
            onChangeText={text => handleChange('title', text)}
            placeholderTextColor="grey"
            multiline
            style={styles.titleInput}
          />
        </View>
        <View style={[styles.borderDashed, {minHeight: 250}]}>
          <TextInput
            placeholder="Isi Konten"
            value={blogData.content}
            onChangeText={text => handleChange('content', text)}
            placeholderTextColor="grey"
            multiline
            style={styles.contentInput}
          />
        </View>
        <View style={[styles.borderDashed]}>
          <TextInput
            placeholder="Image URL"
            value={image}
            onChangeText={text => handleChange('image', text)}
            placeholderTextColor="grey"
            style={styles.contentInput}
          />
        </View>
        <View style={[styles.borderDashed]}>
          <TextInput
            placeholder="Google Maps Link"
            value={blogData.googleMapsLink}
            onChangeText={text => handleChange('googleMapsLink', text)}
            placeholderTextColor="grey"
            style={styles.contentInput}
          />
        </View>
        <View style={[styles.borderDashed]}>
          <TextInput
            placeholder="Jam Buka"
            value={blogData.openingHours}
            onChangeText={text => handleChange('openingHours', text)}
            placeholderTextColor="grey"
            style={styles.contentInput}
          />
        </View>
        <View style={[styles.borderDashed]}>
          <TextInput
            placeholder="Harga Tiket"
            value={blogData.ticketPrice}
            onChangeText={text => handleChange('ticketPrice', text)}
            placeholderTextColor="grey"
            style={styles.contentInput}
          />
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonLabel}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditBlogForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  bottomBar: {
    backgroundColor: '#ffffff',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#3498db',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  borderDashed: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#cccccc',
    backgroundColor: '#ffffff',
  },
  titleInput: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    padding: 0,
  },
  contentInput: {
    fontSize: 12,
    color: '#333333',
    padding: 0,
  },
});
