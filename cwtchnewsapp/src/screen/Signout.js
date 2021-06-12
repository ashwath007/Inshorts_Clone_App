import React from 'react'
import { StyleSheet,View } from 'react-native'
import {useDispatch, connect} from 'react-redux';
import propsType from "prop-types";
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
  import {googleSignout} from '../action/auth'

GoogleSignin.configure({
    webClientId: '350416576934-3qnqa9niinbaikun27jg1vid04kj21c1.apps.googleusercontent.com',
  });
const Signout = ({googleSignout,navigation}) =>  {

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
    return (
        <div>
               <View>
                
                <GoogleSigninButton onPress={() => googleSignout()}/>
              
                </View>
        </div>
    )
}


Settings.propsType = {

    googleSignout: propsType.func.isRequired
}
const mapDispatchToProps = {
    googleSignout
  }



export default connect(null,mapDispatchToProps)(Signout)

