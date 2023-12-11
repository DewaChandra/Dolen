import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import ActionSheet from 'react-native-actions-sheet';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const BlogDetail = ({route}) => {
  const {blogId} = route.params;
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const actionSheetRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    const subscriber = firestore()
      .collection('blog')
      .doc(blogId)
      .onSnapshot(documentSnapshot => {
        const blogData = documentSnapshot.data();
        if (blogData) {
          console.log('Blog data: ', blogData);
          setSelectedBlog(blogData);
        } else {
          console.log(`Blog with ID ${blogId} not found.`);
        }
      });
    setLoading(false);
    return () => subscriber();
  }, [blogId]);

  const navigateEdit = () => {
    closeActionSheet();
    navigation.navigate('EditBlogForm', {blogId});
  };

  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };

  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      await firestore()
        .collection('blog')
        .doc(blogId)
        .delete()
        .then(() => {
          console.log('Blog deleted!');
        });
      if (selectedBlog?.image) {
        const imageRef = storage().refFromURL(selectedBlog?.image);
        await imageRef.delete();
      }
      console.log('Blog deleted!');
      closeActionSheet();
      setSelectedBlog(null);
      setLoading(false)
      navigation.navigate('Profile');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {selectedBlog?.image ? (
          <FastImage
            style={styles.image}
            source={{
              uri: selectedBlog?.image,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}></FastImage>
        ) : (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color={'blue'} />
          </View>
        )}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{selectedBlog?.title}</Text>
          <Text
            style={{
              ...styles.googleMapsLink,
              color: 'blue',
              textDecorationLine: 'underline',
            }}
            onPress={() => Linking.openURL(selectedBlog?.googleMapsLink)}>
            {`Lokasi: ${selectedBlog?.googleMapsLink}`}
          </Text>
          <Text
            style={
              styles.openingHours
            }>{`Jam Buka: ${selectedBlog?.openingHours}`}</Text>
          <Text
            style={
              styles.ticketPrice
            }>{`Ticket Price: ${selectedBlog?.ticketPrice}`}</Text>
          <Text style={styles.content}>{selectedBlog?.content}</Text>
        </View>
      </ScrollView>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton} onPress={openActionSheet}>
          <Text style={styles.headerButtonText}>Menu</Text>
        </TouchableOpacity>
      </View>
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
        indicatorStyle={{
          width: 100,
        }}
        gestureEnabled={true}
        defaultOverlayOpacity={0.3}>
        <TouchableOpacity style={styles.actionSheetItem} onPress={navigateEdit}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
            }}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionSheetItem} onPress={handleDelete}>
          <Text style={styles.actionSheetItemText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionSheetItemCancel}
          onPress={closeActionSheet}>
          <Text style={styles.actionSheetItemTextCancel}>Cancel</Text>
        </TouchableOpacity>
      </ActionSheet>
    </View>
  );
};
export default BlogDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1000,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
  },
  headerButton: {
    padding: 8,
    backgroundColor: '#1343aa',
    borderRadius: 8,
  },
  headerButtonText: {
    color: 'white',
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  ticketPrice: {
    fontSize: 16,
    marginTop: 10,
    color: 'black',
  },
  openingHours: {
    fontSize: 16,
    marginTop: 10,
    color: 'black',
  },
  googleMapsLink: {
    fontSize: 16,
    marginTop: 10,
    color: 'black',
  },
  content: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    color: 'black',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionSheetItem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  actionSheetItemText: {
    color: 'black',
    fontSize: 18,
  },
  actionSheetItemCancel: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: 'red',
  },
  actionSheetItemTextCancel: {
    color: 'white',
    fontSize: 18,
  },
});
