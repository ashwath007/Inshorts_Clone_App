import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import Snackbar from 'react-native-snackbar';

import { IS_SENT } from "./action.types"

GoogleSignin.configure({
    webClientId: '350416576934-3qnqa9niinbaikun27jg1vid04kj21c1.apps.googleusercontent.com',
});
export const googleSignIn = () => async(dispatch) => {


    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        // console.log("Yes", userInfo);

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
    // console.log("Logout clicked")
    try {
        GoogleSignin.revokeAccess();
        GoogleSignin.signOut();
        console.log("Yes");
        firebase.auth().signOut().then(
            Snackbar.show({
                text: 'Signout sucess',
                textColor: 'white',
                backgroundColor: 'green'
            })
        )

    } catch (error) {
        console.log(error)

    }
}

export const phoneSignIn = (data) => async(dispatch) => {
    // console.log("Ho yes");

    const { phone } = data;
    // console.log("Data -> ", data);


    try {
        const confirmation = await auth().signInWithPhoneNumber(phone);
        if (confirmation) {
            Snackbar.show({
                text: 'OTP is sent to your phone',
                textColor: 'white',
                backgroundColor: 'blue'
            })
            return confirmation
        }
        console.log(confirmation);
    } catch (err) {
        console.log(err);
    }

}

export const verifyPhone = (data) => async(dispatch) => {
    const { code, confirm } = data;
    // console.log('Code : ', data)
    try {
        const verifyed = confirm.confirm(code);
        console.log(verifyed)
        if (verifyed) {
            Snackbar.show({
                text: 'Signin success',
                textColor: 'white',
                backgroundColor: 'green'
            })
        }
    } catch (err) {
        console.log(err)
    }
}

export const signUp = (data) => async(dispatch) => {
    // console.log(data)
    // const { name, instaUserName, bio, email, password, country, image } = data;

    // auth().createUserWithEmailAndPassword(email, password)
    //     .then((data) => {
    //         console.log(data);
    //         console.log('User account created & signed in!');

    //         database()
    //             .ref('/users/' + data.user.uid)
    //             .set({
    //                 name,
    //                 instaUserName,
    //                 bio,
    //                 country,
    //                 image,
    //                 uid: data.user.uid

    //             })
    //             .then(() => {
    //                 console.log('Data set success')
    //                 Snackbar.show({
    //                     text: 'Account created',
    //                     textColor: 'white',
    //                     backgroundColor: "green"
    //                 })
    //             })
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //         Snackbar.show({
    //             text: "Signup failed",
    //             textColor: 'white',
    //             backgroundColor: 'red'

    //         })
    //     })
}