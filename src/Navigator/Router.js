// Router.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../assets/screens/Home';
import PariwisataAlam from '../assets/screens/PariwisataAlam';
import CobanRondo from '../assets/screens/PariwisataAlam/cobanrondo';
import PantaiBalekambang from '../assets/screens/PariwisataAlam/pantaibalekambang';
import PantaiGoachina from '../assets/screens/PariwisataAlam/pantaigoachina';
import PantaiNgudel from '../assets/screens/PariwisataAlam/pantaingudel';
import {
  PariwisataKuliner,
  PariwisataReligius,
  PariwisataSejarah,
} from '../assets/screens';
import PecelKawi from '../assets/screens/PariwisataKuliner/pecelkawi';
import GerejaKayutangan from '../assets/screens/PariwisataReligius/gerejakayutangan';
import KampungHeritage from '../assets/screens/PariwisataSejarah/kampungheritage';
import FavoriteScreen from '../assets/screens/Favorite';
import FormPariwisataAlam from '../assets/screens/PariwisataAlam/formpa';
import BlogDetail from '../assets/screens/BlogDetail';
import EditBlogForm from '../assets/screens/EditBlogForm/index';
import SplashScreen from '../assets/screens/SplashScreen/index';
import Register from '../assets/screens/Register/index';
import Login from '../assets/screens/Login/';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen" >
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
      <Stack.Screen name="PariwisataAlam" component={PariwisataAlam} />
      <Stack.Screen name="CobanRondo" component={CobanRondo} />
      <Stack.Screen name="PantaiBalekambang" component={PantaiBalekambang} />
      <Stack.Screen name="PantaiGoachina" component={PantaiGoachina} />
      <Stack.Screen name="PantaiNgudel" component={PantaiNgudel} />
      <Stack.Screen name="PariwisataKuliner" component={PariwisataKuliner} />
      <Stack.Screen name="PecelKawi" component={PecelKawi} />
      <Stack.Screen name="PariwisataReligius" component={PariwisataReligius} />
      <Stack.Screen name="GerejaKayutangan" component={GerejaKayutangan} />
      <Stack.Screen name="PariwisataSejarah" component={PariwisataSejarah} />
      <Stack.Screen name="KampungHeritage" component={KampungHeritage} />
      <Stack.Screen name="FormPariwisataAlam" component={FormPariwisataAlam} />
      <Stack.Screen name="BlogDetail" component={BlogDetail} />
      <Stack.Screen name="EditBlogForm" component={EditBlogForm} />
    </Stack.Navigator>
  );
};

export default Router;
