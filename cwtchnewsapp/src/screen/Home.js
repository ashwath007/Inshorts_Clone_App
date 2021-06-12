import React,{useEffect,useState} from 'react';
import { connect} from 'react-redux'
import { Appbar } from 'react-native-paper';
import propTypes from 'prop-types'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';

import {googleSignout} from '../action/auth'
import Settings from './Settings';


const Home = ({googleSignout,navigation}) => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => navigation.navigate("Settings");
    useEffect(() => {

        GoogleSignin.configure({
          webClientId: '350416576934-3qnqa9niinbaikun27jg1vid04kj21c1.apps.googleusercontent.com',
        });
      }, [])
  


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
    return(
        <View>
           <Appbar.Header
           style={{backgroundColor:'#EB4D4B'}}
           >

      <Appbar.Content title="Title"/>
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="cog-outline" onPress={_handleMore} />
    </Appbar.Header>

      <View>
        
      </View>



            {/* <GoogleSigninButton onPress={() => googleSignout()}/>
            <View>
              <TouchableOpacity style={{backgroundColor:'blue'}}>
                <Text style={{color:'white',padding:30}}>
                  Phone Signout
                </Text>
              </TouchableOpacity>
            </View> */}
        </View>
    )
}


const mapDispatchToProps = {
  googleSignout
}

Home.propTypes = ({
  googleSignout: propTypes.func.isRequired
})

export default connect(null, mapDispatchToProps)(Home);