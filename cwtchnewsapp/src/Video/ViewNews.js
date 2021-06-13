import React,{useState} from 'react';
import { Image,StyleSheet, Dimensions,
    TouchableOpacity,
    Animated,
    BackHandler,
    PanResponder,} from 'react-native';

import { WebView } from 'react-native-webview';
import Carousel from 'react-native-snap-carousel';
import {  FONT_SIZE_EXTRA_LARGE,
    FONT_SIZE_NORMAL,
    FONT_SIZE_LARGE,
    FONT_SIZE_SMALL,} from '../constants/Dimens';
import Video from 'react-native-video';

import {GRAY, WHITE, DARK_GRAY, NEWS_TITLE} from '../screen/constants/Constants';
import VideoCard from "../screen/Components/VideoCard"
import {
    FONT_REGULAR,
    FONT_BOLD,
    FONT_MEDIUM,
    FONT_LIGHT,
    momentCalendarConfig,
  } from '../constants/Constants';

import { Container, Header, DeckSwiper, Card, CardItem,View, Fab,Thumbnail, Text, Left, Body, Icon,Button } from 'native-base';

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
const { width, height } = Dimensions.get("window");
const ViewNews = ({urlData}) => {


    const LIVE = [
        { id: 1,text: 'Ashwath',new_url:"https://oblador.github.io/react-native-vector-icons/",content:"React Native's Image component handles image caching like browsers for the most part. If the server is returning proper cache control headers for images you'll generally get the sort of built in caching behavior you'd have in a browser. Even so many people have noticed:" , uri: "https://images.unsplash.com/photo-1622890276840-8eabe803e2bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" },
        { id: 2,text: 'Sound',new_url:"https://www.npmjs.com/package/react-native-snap-carousel",content:"React Native's Image component handles image caching like browsers for the most part. If the server is returning proper cache control headers for images you'll generally get the sort of built in caching behavior you'd have in a browser. Even so many people have noticed:" , uri: "https://images.unsplash.com/photo-1623144215111-813fdd5b6338?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1103&q=80" },
        { id: 3,text: 'Sri',new_url:"https://docs.nativebase.io/Components.html#fabs-def-headref",content:"React Native's Image component handles image caching like browsers for the most part. If the server is returning proper cache control headers for images you'll generally get the sort of built in caching behavior you'd have in a browser. Even so many people have noticed:" , uri: "https://images.unsplash.com/photo-1623176035122-4e07bc19bab7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" },
        { id: 4,text: 'Sam',new_url:"https://github.com/Gopalakrishnan-V/inshorts-clone/blob/master/src/screens/NewsStackScreen.js",content:"React Native's Image component handles image caching like browsers for the most part. If the server is returning proper cache control headers for images you'll generally get the sort of built in caching behavior you'd have in a browser. Even so many people have noticed:" , uri: "https://images.unsplash.com/photo-1623095517737-bcdd0c8fee76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" },
        { id: 5,text: 'Shyam',new_url:"https://stackoverflow.com/questions/53525684/how-do-i-use-react-native-onlongpress-properly",content:"React Native's Image component handles image caching like browsers for the most part. If the server is returning proper cache control headers for images you'll generally get the sort of built in caching behavior you'd have in a browser. Even so many people have noticed:" , uri: "https://images.unsplash.com/photo-1611095790691-ff1be3430b22?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" }
      ];
      const [index, setindex] = useState(0);

      const renderItem = ({item,index}) => {
        return (
            <VideoCard videos={LIVE[index]}/>
    
            // <View>
            //     <Text>{ARTICLES[index].text}</Text>
            // </View>
        );
      }
      const onBuffer = () => {
        console.log('Buffer');
    }
    
    
    const videoError = () => {
        console.log('error')
    }
      const handleEndReached = () => {
          
      }
      const [player, setplayer] = useState('');

    return(
        <Container>
            {console.log(urlData)}
            <Video source={{uri: "https://player.vimeo.com/video/562188433"}}   // Can be a URL or a local file.
    
       controls={true}              
       onBuffer={onBuffer}                // Callback when remote video is buffering
       onError={videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} />
            {/* <View style={{flex:1}}>
            <Carousel
              data={LIVE}
              renderItem={renderItem}
              sliderWidth={SCREEN_WIDTH}
              sliderHeight={SCREEN_HEIGHT}
              itemWidth={SCREEN_WIDTH}
              itemHeight={SCREEN_HEIGHT}
              inactiveSlideOpacity={1}
              inactiveSlideScale={1}
              vertical={true}
              swipeThreshold={10}
              onEndReached={handleEndReached}
              nestedScrollEnabled
              windowSize={5}
              onSnapToItem={(index) => setindex(index)}
              // ListEmptyComponent={<ShortsLoader />}
            />
            </View> */}


        </Container>
    )
}

var styles = StyleSheet.create({
    backgroundVideo: {
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
        }
   
})
export default ViewNews;