import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const AddBlogForm = ({ onUpload }) => {
  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    image: '',
    googleMapsLink: '',
    openingHours: '',
    ticketPrice: '',
  });
  
  const navigation = useNavigation();
  const handleChange = (key, value) => {
    setBlogData({
      ...blogData,
      [key]: value,
    });
  };

  const handleUpload = async () => {
    try {
      const response = await axios.post(
        'https://6570831f09586eff66418846.mockapi.io/dolenapp/PariwisataAlam',
        {
          title: blogData.title,
          content: blogData.content,
          image: blogData.image,
          googleMapsLink: blogData.googleMapsLink,
          openingHours: blogData.openingHours,
          ticketPrice: blogData.ticketPrice,
        }
      ).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
        }}
      >
        <View style={styles.borderDashed}>
          <TextInput
            placeholder="Judul Artikel"
            value={blogData.title}
            onChangeText={(text) => handleChange('title', text)}
            placeholderTextColor="grey"
            multiline
            style={styles.titleInput}
          />
        </View>
        <View style={[styles.borderDashed, { minHeight: 250 }]}>
          <TextInput
            placeholder="Isi Konten"
            value={blogData.content}
            onChangeText={(text) => handleChange('content', text)}
            placeholderTextColor="grey"
            multiline
            style={styles.contentInput}
          />
        </View>
        <View style={[styles.borderDashed]}>
          <TextInput
            placeholder="Image URL"
            value={blogData.image}
            onChangeText={(text) => handleChange('image', text)}
            placeholderTextColor="grey"
            style={styles.contentInput}
          />
        </View>
        <View style={[styles.borderDashed]}>
          <TextInput
            placeholder="Google Maps Link"
            value={blogData.googleMapsLink}
            onChangeText={(text) => handleChange('googleMapsLink', text)}
            placeholderTextColor="grey"
            style={styles.contentInput}
          />
        </View>
        <View style={[styles.borderDashed]}>
          <TextInput
            placeholder="Jam Buka"
            value={blogData.openingHours}
            onChangeText={(text) => handleChange('openingHours', text)}
            placeholderTextColor="grey"
            style={styles.contentInput}
          />
        </View>
        <View style={[styles.borderDashed]}>
          <TextInput
            placeholder="Harga Tiket"
            value={blogData.ticketPrice}
            onChangeText={(text) => handleChange('ticketPrice', text)}
            placeholderTextColor="grey"
            style={styles.contentInput}
          />
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={handleUpload}>
          <Text style={styles.buttonLabel}>Upload</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddBlogForm;

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
