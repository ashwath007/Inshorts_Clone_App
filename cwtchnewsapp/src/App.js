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

// TODO SplashScreen design and building
import Splash from './screen/SplashScreen/Splash';

const Stack = createStackNavigator();

GoogleSignin.configure({
  webClientId: '350416576934-3qnqa9niinbaikun27jg1vid04kj21c1.apps.googleusercontent.com',
});

// All Screens

import HomePageNavigation from './screen/Navigation/HomePageNavigation';
//




const App = ({authState}) => {

  const dispatch = useDispatch();



  const [isUserGLogin, setisUserGLogin] = useState(false);
  const [userGData, setuserGData] = useState('');
  const [user, setuser] = useState('');


  // useEffect(() => { // Google Auth
  //   isSignedIn()

  // }, [])


  useEffect(() => { // Normal Auth
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);




  function onAuthStateChanged(user) {
    console.log("USER -> ",user)
    if(user){
      dispatch({
        type: IS_AUTHTHENTICATED,
        payload: true
      })
      if(user){
        dispatch({
          type: SET_USER,
          payload: user,
        })
      }
    }else{
      dispatch({
        type: IS_AUTHTHENTICATED,
        payload: false
      })
    }
    
  

  }

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    setisUserGLogin(isSignedIn);
    if(isSignedIn){
      dispatch({
        type: IS_AUTHTHENTICATED,
        payload: true
      })
      getCurrentUserInfo()
    }
    else if(isSignedIn === false){
      dispatch({
        type: IS_AUTHTHENTICATED,
        payload: false
      })
    }
    
    // this.setState({ isLoginScreenPresented: !isSignedIn });
  };

  
 
  

const getCurrentUserInfo = async () => {
  try {
    const userInfo = await GoogleSignin.signInSilently();
    setuserGData({userInfo});
    console.log(userInfo);
    dispatch({
      type: SET_USER,
      payload: userInfo,
    })
  } catch (error) {
    dispatch({
      type: SET_USER,
      payload: null
    })
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


  if(authState.loading){
    return <Splash/>
  }



  return (
      <>
      <NavigationContainer>
          <Stack.Navigator>
            {console.log(authState)}
            {authState.isAuthenticated  ? (
              <Stack.Screen
                name="home"
                options={{headerShown: false}}
                component={HomePageNavigation}
              />

            ) : (
            <>
            <Stack.Screen
            options={{headerShown: false}}
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



const mapStateToProps = (state) => ({
  authState: state.auth
})

export default connect(mapStateToProps)(App)

