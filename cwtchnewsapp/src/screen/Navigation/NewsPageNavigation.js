import React from 'react';
import { ViewBase,Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


import News from '../News';
import WebViews from '../Components/WebView';
import HomeNews from '../src/HomeNews'

const NewsPageNavigation = () => {
    return(
<>
<Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
>
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="WebViews" component={WebViews} />
      
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
</>
    )
}

export default NewsPageNavigation;