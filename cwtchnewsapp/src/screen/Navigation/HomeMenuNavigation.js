import React from 'react';
import {StyleSheet, View, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Home';
import Discover from "../Discover";
import Article from "../Article";
import Settings from "../Settings";
import CustomNews from '../Components/CustomNews'
import HomeNews from '../src/HomeNews'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const HomeMenuNavigation = () => {
    return(
        <>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="News" component={CustomNews} />
      <Stack.Screen name="HomeNews" component={HomeNews} />


      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
        </>
    )

}


export default HomeMenuNavigation;  