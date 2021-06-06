import React from 'react';
import { ViewBase,Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../Home';
import News from '../News';
import ViewNews from '../ViewNews';


const Tab = createMaterialTopTabNavigator();

const HomePageNavigation = () => {
    return(
            <>

<Tab.Navigator

initialRouteName="News"

>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="ViewNews" component={ViewNews} />

    </Tab.Navigator>
            </>
    )
}


export default HomePageNavigation;