import React,{useEffect,useState} from 'react';
import { connect} from 'react-redux'
import propTypes from 'prop-types'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
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

const Home = ({googleSignout}) => {
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
            <Text>
                Home Page
            </Text>

            <GoogleSigninButton onPress={() => googleSignout()}/>

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