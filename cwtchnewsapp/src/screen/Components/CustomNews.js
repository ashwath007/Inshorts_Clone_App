import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { WebView } from 'react-native-webview';

const CustomNews = ({route}) => {

    const {newstopics} = route.params;

    return(
        <View style={{flex:1}}>
       <WebView source={{ uri: newstopics }} />
        </View>
    )
}

export default CustomNews;