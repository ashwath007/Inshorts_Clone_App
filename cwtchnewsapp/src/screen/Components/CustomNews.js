import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { WebView } from 'react-native-webview';

const CustomNews = ({route}) => {

    const {url} = route.params;

    return(
        <View style={{flex:1}}>
            {console.log(url)}
       <WebView source={{ uri: url }} />
        </View>
    )
}

export default CustomNews;