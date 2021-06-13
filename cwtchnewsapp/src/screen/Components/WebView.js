import React from 'react';
import { StyleSheet,View } from 'react-native';
import { WebView } from 'react-native-webview';


const  WebViews = (props) => {
    return(
        <View style={{flex:1}}>
        {console.log(props)}
       <WebView source={{ uri: props.route.params.url }} />
        </View>

    )
}

export default WebViews;