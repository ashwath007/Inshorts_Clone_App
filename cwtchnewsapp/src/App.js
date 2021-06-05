

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

const App = () => {
  const [user, setuser] = useState('');
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '350416576934-3qnqa9niinbaikun27jg1vid04kj21c1.apps.googleusercontent.com',
    });
  }, [])
  
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
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
    >
          <View>
            {user ? (
              <Text>
                {user.idToken}
                {user.user}

                </Text>
            ) : (
              null
            )

            }
            <Text>
              Hello here   {user.idToken}
            </Text>
            <GoogleSigninButton onPress={signIn}/>
            {/* <GoogleSigninButton onPress={signOut}/> */}

          </View>
      </ScrollView>
    </SafeAreaView>
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
