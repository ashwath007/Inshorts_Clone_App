import React,{useEffect,useState} from 'react';

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


  const Login = () => {

    const [user, setuser] = useState('');

    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log("Yes");
          setuser({userInfo})
          console.log({userInfo});
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          console.log(error);
    
          } else if (error.code === statusCodes.IN_PROGRESS) {
          console.log(error);
    
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          console.log(error);
    
            // play services not available or outdated
          } else {
            // some other error happened
          console.log(error);
    
          }
        }
      };
    useEffect(() => {
        GoogleSignin.configure({
          webClientId: '350416576934-3qnqa9niinbaikun27jg1vid04kj21c1.apps.googleusercontent.com',
        });
      }, [])


      return(
        <View>
            <Text>
                Hi
            </Text>
            <GoogleSigninButton onPress={signIn}/>
        </View>
      )
  }

const styles = new StyleSheet.create({

})


  export default Login;