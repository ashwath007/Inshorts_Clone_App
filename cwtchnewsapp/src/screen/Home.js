import React,{useEffect,useState} from 'react';
import { connect} from 'react-redux'
import { Appbar,Searchbar,Subheading   } from 'react-native-paper';
import propTypes from 'prop-types'
import Carousel from 'react-native-snap-carousel';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';

import {googleSignout} from '../action/auth'
import Settings from './Settings';
GoogleSignin.configure({
  webClientId: '350416576934-3qnqa9niinbaikun27jg1vid04kj21c1.apps.googleusercontent.com',
});

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Home = ({googleSignout,navigation}) => {

  const [searchQuery, setSearchQuery] = useState('');

  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => navigation.navigate("Settings");

  const [corosel, setcorosel] = useState(0);

      const MainThemeData = [
        {id:1, logo:'',theme:'Insights'},
        {id:2, logo:'',theme:'COVIDCare'},
        {id:3, logo:'',theme:'poll'},
        {id:4, logo:'',theme:'Tech'},

      ];

      // const signOut = async () => {
      //   console.log('Signingout');

      //   try {
      //     await GoogleSignin.revokeAccess();
      //     await GoogleSignin.signOut();
      //     console.log('Signingout');
      //      // Remember to remove the user from your app's state as well
      //   } catch (error) {
      //     console.error(error);
      //   }
      // };

      
      const renderItem = ({item, index}) => {
        return (
            <View style={{height:80,width:120,backgroundColor:'gray',justifyContent:'center',borderRadius:5}}>
                <Text style={{alignSelf:'center',alignContent:'center'}}>{ item.theme }</Text>
            </View>
        );
    }
    return(
        <ScrollView>
           <Appbar.Header
           style={{backgroundColor:'#EB4D4B'}}
           >

      <Appbar.Content title="Discover"/>

      <Appbar.Action icon="cog-outline" onPress={_handleMore} />
    </Appbar.Header>

      <View>
        <View style={{padding:20}}>
        <Searchbar
      placeholder="Search"
      onChangeText={() => {}}
      value={searchQuery}
    />
        </View>
        <View>

        <Carousel
              ref={(c) => { setcorosel(c) }}
              data={MainThemeData}
              renderItem={renderItem}
              
              sliderWidth={windowWidth}
              itemWidth={130}
            />


          </View>

          <View>
          <Subheading >SUGGESTED TOPICS</Subheading >
            
            </View>
      
      </View>

        </ScrollView>
    )
}


const mapDispatchToProps = {
  googleSignout
}

Home.propTypes = ({
  googleSignout: propTypes.func.isRequired
})

export default connect(null, mapDispatchToProps)(Home);