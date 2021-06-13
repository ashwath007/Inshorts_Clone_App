import React,{useState} from 'react';
import { StyleSheet } from 'react-native';
import {  FONT_SIZE_EXTRA_LARGE,
    FONT_SIZE_NORMAL,
    FONT_SIZE_LARGE,
    FONT_SIZE_SMALL,} from '../constants/Dimens';
import {GRAY, WHITE, DARK_GRAY, NEWS_TITLE} from '../constants/Colors';
import { Container, Header, DeckSwiper, Card, CardItem,View, Fab,Thumbnail, Text, Left, Body, Icon,Button } from 'native-base';
import Video from 'react-native-video';
import {
    FONT_REGULAR,
    FONT_BOLD,
    FONT_MEDIUM,
    FONT_LIGHT,
    momentCalendarConfig,
  } from '../constants/Constants';


const onBuffer = () => {
    console.log('Buffer');
}


const videoError = () => {
    console.log('error')
}

const VideoCard = (VIDEO) => {


    const [player, setplayer] = useState('');


    return(
        <View style={styles.container}>
     {console.log(VIDEO.videos)}
        <View style={styles.top}>
        <Video source={{uri: "https://www.youtube.com/watch?v=Ex652LPfUdA"}}   // Can be a URL or a local file.
       ref={(ref) => {
        setplayer(ref)
       }}     
       controls={true}              
       onBuffer={onBuffer}                // Callback when remote video is buffering
       onError={videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} />
        </View>

        <View style={[styles.middle, styles.contentPadding]}>
          <Text style={styles.title}>{VIDEO.videos.text}</Text>
          <Text style={styles.description}>{VIDEO.videos.content}</Text>
          <Text style={styles.byLine} numberOfLines={1} ellipsizeMode="tail">
            {/* {this.getByLineText()} */}
          </Text>
        </View>

        <View style={[styles.footer, styles.contentPadding]}>
          <Text
            style={styles.footerTitle}
            numberOfLines={1}
            ellipsizeMode="tail">
            {/* {bottom_headline} */}
          </Text>
          <Text
            style={styles.footerSubtitle}
            numberOfLines={1}
            ellipsizeMode="tail">
            {/* {bottom_text} */}
          </Text>
        </View>
        </View>
    )
}

var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: WHITE,
      },
      top: {
        backgroundColor: WHITE,
        flex: 4,
      },
      middle: {
        backgroundColor: WHITE,
        flex: 5,
      },
      footer: {
        flex: 0.9,
        backgroundColor: '#e5e5e5',
        justifyContent: 'center',
        backgroundColor: DARK_GRAY,
      },
      contentPadding: {
        paddingHorizontal: 12,
      },
      title: {
        fontFamily: FONT_REGULAR,
        fontWeight: '400',
        fontSize: FONT_SIZE_EXTRA_LARGE,
        marginTop: 12,
      },
      description: {
        fontFamily: FONT_REGULAR,
        fontWeight: '400',
        fontSize: FONT_SIZE_LARGE,
        marginTop: 7,
        lineHeight: 25,
        color: GRAY,
      },
      byLine: {
        fontFamily: FONT_LIGHT,
        fontWeight: '300',
        fontSize: FONT_SIZE_NORMAL,
        marginTop: 5,
        color: GRAY,
        opacity: 0.7,
      },
      footerTitle: {
        fontFamily: FONT_REGULAR,
        fontWeight: '400',
        color: WHITE,
        fontSize: FONT_SIZE_NORMAL,
        fontWeight: '600',
      },
      footerSubtitle: {
        color: WHITE,
        fontWeight: '300',
        fontFamily: FONT_LIGHT,
        fontSize: FONT_SIZE_SMALL,
        fontWeight: '400',
        marginTop: 2,
      },

})
export default VideoCard;