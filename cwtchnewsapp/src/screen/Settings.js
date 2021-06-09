import React,{useEffect,useState} from 'react';
import { StyleSheet,View,  Text } from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '350416576934-3qnqa9niinbaikun27jg1vid04kj21c1.apps.googleusercontent.com',
  });


const Settings = () => {

    const [token, settoken] = useState('');
    const [userData, setuserData] = useState('');

    const [error, seterror] = useState(false);


    const getCurrentUserInfo = async () => {
        try {
          const userInfo = await GoogleSignin.signInSilently();
          const userAuth = await GoogleSignin.getTokens();
          setuserData(userInfo)
          settoken(userInfo)
          console.log(userInfo);
        } catch (error) {
            seterror(true)
          if (error.code === statusCodes.SIGN_IN_REQUIRED) {
            // user has not signed in yet
          } else {
            // some other error
          }
        }
      };

    
    useEffect(() => {
        getCurrentUserInfo()
    }, [])


    return(
        <View>
            <Text>
                Settings
            </Text>

            {userData ? (
                <Text>  
                        {userData.token}
                </Text>

            ) : (
                <Text>
                        Hooo
                </Text>

            )
            }
        </View>
    )
}


export default Settings;