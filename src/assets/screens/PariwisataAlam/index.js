import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  TextInput,
  ActivityIndicator,
  RefreshControl
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const PariwisataAlam = ({route}) => {
  const [animation] = useState(new Animated.Value(1));
  const [search, setSearch] = useState('');
  const [tourismData, setTourismData] = useState([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  
  useEffect(() => {
    const subscriber = firestore()
      .collection('blog')
      .onSnapshot(querySnapshot => {
        const blogs = [];
        querySnapshot.forEach(documentSnapshot => {
          blogs.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setTourismData(blogs);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      firestore()
        .collection('blog')
        .onSnapshot(querySnapshot => {
          const blogs = [];
          querySnapshot.forEach(documentSnapshot => {
            blogs.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setTourismData(blogs);
        });
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="black"
          onChangeText={text => setSearch(text)}
          value={search}
        />
        <TouchableOpacity
          style={styles.formButton}
          onPress={() => navigation.navigate('FormPariwisataAlam')}>
          <Text style={styles.formButtonText}>Add New Artikel</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          gap: 10,
          paddingVertical: 20,
        }} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{paddingVertical: 10, gap: 10}}>
          {loading ? (
            <ActivityIndicator size={'large'} color={'blue'} />
          ) : (
            tourismData.map((item, index) => <Items item={item} key={index} />)
          )}
        </View>
      </ScrollView>

      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.navbarIconContainer}
          onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../../assets/images/home.png')}
            style={styles.navbarIcon}
          />
          <Text style={styles.navbarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navbarIconContainer}>
          <Image
            source={require('../../../assets/images/favorite.png')}
            style={styles.navbarIcon}
          />
          <Text style={styles.navbarText}>Favorite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Items = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.touchableItem}
      onPress={() => navigation.navigate('BlogDetail', {blogId: item.id})}
    >
      <View style={styles.itemContainer}>
        <View style={styles.itemImageContainer}>
          <Image source={{uri: item.image}} style={styles.itemImage} onError={(e) => console.log("Image load error", e.nativeEvent.error)}/>
        </View>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemName}>{item.title}</Text>
          <Text style={styles.itemLocation}>{item.ticketPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default PariwisataAlam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#e9e9f0',
    position: 'absolute',
    bottom: 0,
  },
  navbarIconContainer: {
    alignItems: 'center',
  },
  navbarText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  navbarIcon: {
    width: 24,
    height: 24,
  },
  searchInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    flex: 1, // Take up remaining space
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  formButton: {
    backgroundColor: '#1343aa',
    padding: 10,
    borderRadius: 8,
    marginLeft: 10,
    alignItems: 'center',
  },
  formButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  touchableItem: {
    marginBottom: 12,
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#1343aa',
    padding: 16,
    borderRadius: 8,
  },
  itemImageContainer: {
    flex: 1,
    marginRight: 16,
  },
  itemTextContainer: {
    flex: 3,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  itemLocation: {
    fontSize: 14,
    color: 'white',
  },
  itemImage: {
    width: '100%',
    height: 50,
    borderRadius: 8,
  },
});
