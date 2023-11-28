import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, ScrollView } from 'react-native';

const FormPariwisataAlam = () => {
  const [location, setLocation] = useState('');
  const [title, setTitle] = useState('');
  const [mapLink, setMapLink] = useState('');
  const [openingHours, setOpeningHours] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted with data:', {
      location,
      title,
      mapLink,
      openingHours,
      ticketPrice,
      description,
      image,
    });

    setLocation('');
    setTitle('');
    setMapLink('');
    setOpeningHours('');
    setTicketPrice('');
    setDescription('');
    setImage('');
  };

  return (
    <ScrollView style={styles.formContainer} contentContainerStyle={styles.formContent}>
      {image ? <Image source={{ uri: image }} style={styles.formImage} /> : null}
      <TextInput
        style={styles.input}
        placeholder="Image"
        placeholderTextColor="black"
        value={image}
        onChangeText={(text) => setImage(text)}
        color="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Lokasi"
        placeholderTextColor="black"
        value={location}
        onChangeText={(text) => setLocation(text)}
        color="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Title"
        placeholderTextColor="black"
        value={title}
        onChangeText={(text) => setTitle(text)}
        color="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Link Lokasi Google Maps"
        placeholderTextColor="black"
        value={mapLink}
        onChangeText={(text) => setMapLink(text)}
        color="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Jam Buka dan Jam Tutup"
        placeholderTextColor="black"
        value={openingHours}
        onChangeText={(text) => setOpeningHours(text)}
        color="black"
      />
      <TextInput
        style={styles.input}
        placeholder="Harga Tiket"
        placeholderTextColor="black"
        value={ticketPrice}
        onChangeText={(text) => setTicketPrice(text)}
        color="black"
      />
      <TextInput
        style={styles.descriptionInput} 
        placeholder="Deskripsi Tempat"
        placeholderTextColor="black"
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline
        color="black"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 20,
  },
  formContent: {
    justifyContent: 'space-between',
  },
  formImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  descriptionInput: {
    height: 300,  
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10, 
    marginBottom: 10,
  },
});

export default FormPariwisataAlam;
