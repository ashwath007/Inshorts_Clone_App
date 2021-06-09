import React from 'react';
import { StyleSheet,View } from 'react-native';
import { WebView } from 'react-native-webview';


const  WebViews = () => {
    return(
       <WebView source={{ uri: 'https://reactnative.dev/' }} />

    )
}

export default WebViews;