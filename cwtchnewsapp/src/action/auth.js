import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import Snackbar from 'react-native-snackbar';

GoogleSignin.configure({
    webClientId: '350416576934-3qnqa9niinbaikun27jg1vid04kj21c1.apps.googleusercontent.com',
});
export const googleSignIn = () => async(dispatch) => {


    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log("Yes", userInfo);

        const googleCredential = firebase.auth.GoogleAuthProvider.credential(userInfo.idToken);
        firebase.auth().signInWithCredential(googleCredential).then(user => {
            Snackbar.show({
                text: 'Signin success',
                textColor: 'white',
                backgroundColor: 'green'
            })

        }).catch(err => {
            console.log(err)
        })


    } catch (error) {
        console.log("Signin Error : ", error);

        Snackbar.show({
            text: 'Signin error',
            textColor: 'white',
            backgroundColor: 'red'
        })
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow


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
}

export const googleSignout = () => async(dispatch) => {
    try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        console.log("Yes");


        Snackbar.show({
            text: 'Signout sucess',
            textColor: 'white',
            backgroundColor: 'green'
        })
    } catch (error) {

    }
}