import React from 'react';
import { StyleSheet,View,SafeAreaView } from 'react-native';



const NewsCards = ({ARTICLES}) => {

    const {title,url} = ARTICLES;


    return(
 <View style={styles.container}>
        <View style={styles.top}>
          <FastImage
            style={{flex: 1}}
            source={{
              uri: url,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>

        <View style={[styles.middle, styles.contentPadding]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{content}</Text>
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

export default NewsCards;


const styles = StyleSheet.create({
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
  });