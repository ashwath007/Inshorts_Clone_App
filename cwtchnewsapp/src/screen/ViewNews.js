import React from 'react';
import { ViewBase,Text,StyleSheet,View } from 'react-native';


const ViewNews = ({urlData}) => {
    return(
        <View>
            {console.log(urlData)}
                <Text>
                    Here we render url
                </Text>
        </View>
    )
}

export default ViewNews;