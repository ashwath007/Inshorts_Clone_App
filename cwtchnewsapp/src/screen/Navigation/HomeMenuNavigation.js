import React from 'react';
import {StyleSheet, View, } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../Home';
import Discover from "../Discover";
import Article from "../Article";
import Settings from "../Settings";



import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

const HomeMenuNavigation = () => {
    return(
        <>
    <Tab.Navigator
    backBehavior={Discover}
    tabBarOptions={{
      activeTintColor: '#CA3E47',
    }}
    activeColor="#fff"
  barStyle={{ backgroundColor: '#EB4D4B' }}
    
    >
      <Tab.Screen name="Home" component={Home} 
         options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart" color={color} size={26} />
            ),}}
      />
      <Tab.Screen name="Discover" component={Discover} 
       options={{
        tabBarLabel: 'Discover',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="library" color={color} size={26} />
        ),}}
      
      />
      <Tab.Screen name="Article" component={Article} 
       options={{
        tabBarLabel: 'Article',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="box" color={color} size={26} />
        ),}}
      />
        <Tab.Screen name="Settings" component={Settings} 
       options={{
        tabBarLabel: 'Setting',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
        ),}}
      />

    </Tab.Navigator>
        </>
    )

}


export default HomeMenuNavigation;