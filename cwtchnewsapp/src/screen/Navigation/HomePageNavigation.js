import React from 'react';
import { ViewBase,Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../Home';
import NewsPageNavigation from '../Navigation/NewsPageNavigation';
import HomeMenuNavigation from './HomeMenuNavigation';
import ViewNews from '../../Video/ViewNews';

// Live
import Live from "../Live"


//Test
// import DummyVideo from '../../Video/DummyVideo';



const Tab = createMaterialTopTabNavigator();

const HomePageNavigation = () => {
    return(
            <>

<Tab.Navigator
tabBarPosition="bottom"
initialRouteName="News"
swipeVelocityImpact='0.1'
tabBarOptions={{
        indicatorStyle: {
                height: 3,
                backgroundColor: '#FF6263',
     
            },
showLabel :false,
style:{backgroundColor:'#EB4D4B',color:'white',height:0},
showIcon :true,
      }}

>
      <Tab.Screen name="Home" component={HomeMenuNavigation} 
      
      title="Home"
      />
      <Tab.Screen name="News" component={NewsPageNavigation}
      title="Fast News"
      
      />
      {/* <Tab.Screen name="Live"
      children={() => <Live/>}
      title="Live News"
      
      /> */}

    </Tab.Navigator>
            </>
    )
}


export default HomePageNavigation;