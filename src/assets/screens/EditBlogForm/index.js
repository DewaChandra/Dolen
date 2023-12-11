import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { AddSquare, Add } from 'iconsax-react-native';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const EditBlogForm = ({route}) => {
  const {blogId} = route.params;
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [oldImage, setOldImage] = useState(null);
  const navigation = useNavigation();

  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
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
    const subscriber = firestore()
      .collection('blog')
      .doc(blogId)
      .onSnapshot(documentSnapshot => {
        const blogData = documentSnapshot.data();
        if (blogData) {
          console.log('Blog data: ', blogData);
          setBlogData({
            title: blogData.title,
            content: blogData.content,
            googleMapsLink: blogData.googleMapsLink,
            openingHours: blogData.openingHours,
            ticketPrice: blogData.ticketPrice,
          });
          setOldImage(blogData.image);
          setImage(blogData.image);
          setLoading(false);
        } else {
          console.log(`Blog with ID ${blogId} not found.`);
        }
      });
    setLoading(false);
    return () => subscriber();
  }, [blogId]);

  const handleImagePick = async () => {
    ImagePicker.openPicker({
      width: 1920,
      height: 1080,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setImage(image.path);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleUpdate = async () => {
    setLoading(true);
    let filename = image.substring(image.lastIndexOf('/') + 1);
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;
    const reference = storage().ref(`blogimages/${filename}`);
    try {
      if (image !== oldImage && oldImage) {
        const oldImageRef = storage().refFromURL(oldImage);
        await oldImageRef.delete();
      }
      if (image !== oldImage) {
        await reference.putFile(image);
      }
      const url =
        image !== oldImage ? await reference.getDownloadURL() : oldImage;
      await firestore().collection('blog').doc(blogId).update({
        title: blogData.title,
        content: blogData.content,
        image: url,
        googleMapsLink: blogData.googleMapsLink,
        openingHours: blogData.openingHours,
        ticketPrice: blogData.ticketPrice,
      });
      setLoading(false);
      console.log('Blog Updated!');
      navigation.navigate('BlogDetail', {blogId});
    } catch (error) {
      console.log(error);
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
        {image ? (
          <View style={{position: 'relative'}}>
            <FastImage
              style={{width: '100%', height: 127, borderRadius: 5}}
              source={{
                uri: image,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                backgroundColor: 'blue',
                borderRadius: 25,
              }}
              onPress={() => setImage(null)}>
              <Add
                size={20}
                variant="Linear"
                color='white'
                style={{transform: [{rotate: '45deg'}]}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={handleImagePick}>
            <View
              style={[
                styles.borderDashed,
                {
                  gap: 10,
                  paddingVertical: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <AddSquare color='grey' variant="Linear" size={42} />
              <Text
                style={{
                  fontSize: 12,
                  color: 'grey',
                }}>
                Upload Gambar
              </Text>
            </View>
          </TouchableOpacity>
        )}
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
