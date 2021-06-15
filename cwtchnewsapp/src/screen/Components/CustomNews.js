import React from 'react';
import { StyleSheet,View,Text } from 'react-native';


const CustomNews = ({route}) => {

    const {newstopics} = route.params;

    return(
        <View>
            {/* {console.log("T = ",newstopics)} */}
            <Text>
                Custom News Here 
            </Text>
        </View>
    )
}

export default CustomNews;