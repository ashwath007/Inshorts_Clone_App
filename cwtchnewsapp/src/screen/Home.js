import React,{useEffect,useState} from 'react';
import { StyleSheet,View,Text,TouchableOpacity } from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';

const Home = () => {
    useEffect(() => {

        GoogleSignin.configure({
          webClientId: '350416576934-3qnqa9niinbaikun27jg1vid04kj21c1.apps.googleusercontent.com',
        });
      }, [])
  


      const signOut = async () => {
        console.log('Signingout');

        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          console.log('Signingout');
           // Remember to remove the user from your app's state as well
        } catch (error) {
          console.error(error);
        }
      };
    return(
        <View>
            <Text>
                Home Page
            </Text>

            <GoogleSigninButton onPress={signOut}/>

        </View>
    )
}

export default Home;