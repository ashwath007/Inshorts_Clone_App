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
import {useDispatch, connect} from 'react-redux'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


import { SET_USER,IS_AUTHTHENTICATED } from './action/action.types';
import Login from './screen/Login';
import Home from './screen/Home'

const Stack = createStackNavigator();

const App = () => {

  const [isUserGLogin, setisUserGLogin] = useState(false);
  const [userGData, setuserGData] = useState('');
  // const dispatch = useDispatch();

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    setisUserGLogin(isSignedIn);
    if(isSignedIn){
      getCurrentUserInfo()
    }
    else if(isSignedIn === false){
      // TODO Take User to Login page
      

    }
    // this.setState({ isLoginScreenPresented: !isSignedIn });
  };

  const [user, setuser] = useState('');
  useEffect(() => {
    isSignedIn()
    GoogleSignin.configure({
      webClientId: '350416576934-3qnqa9niinbaikun27jg1vid04kj21c1.apps.googleusercontent.com',
    });
  }, [])
  

const getCurrentUserInfo = async () => {
  try {
    const userInfo = await GoogleSignin.signInSilently();
    setuserGData({userInfo});
    console.log(userInfo);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_REQUIRED) {
      // user has not signed in yet
    } else {
      // some other error
    }
  }
};


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

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setuser(''); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };


  return (
      <>
      <NavigationContainer>
          <Stack.Navigator>
            {userGData && isUserGLogin ? (
              <Stack.Screen
                name="home"
                component={Home}
              />

            ) : (
            <>
            <Stack.Screen
              name="Login" component={Login}
            />
            </>
            )

            }
          </Stack.Navigator>
      </NavigationContainer>
      </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
