import React, { Component,useState,useEffect} from 'react';
import { Image,StyleSheet, Dimensions,
    TouchableOpacity,
    Animated,
    BackHandler,
    PanResponder,} from 'react-native';
    import { WebView } from 'react-native-webview';
    import Swipeable from 'react-native-gesture-handler/Swipeable'
// import { Container, Header, View, Button, Icon, Fab } from 'native-base';
import { Container, Header, DeckSwiper, Card, CardItem,View, Fab,Thumbnail, Text, Left, Body, Icon,Button } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import propType from 'prop-types'


import {getAllNews} from '../action/news'

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

import NewsCards from './Components/NewsCards';
import WebViews from './Components/WebView';
import { connect } from 'react-redux';

const News = ({navigation,getAllNews,newsState}) => {

    useEffect(() => {
        const backAction = () => {
          setactive(false)
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);
    

      useEffect(() => {
        getAllNews()
      }, [])

    // News Feeds
    const [indexAt, setindexAt] = useState(0);

    // FABs Active
    const [active, setactive] = useState(false);
    const [active1, setactive1] = useState(false);




    // WebView 
    const [openweb, setopenweb] = useState(false);

    const ARTICLES = [
        { id: 1,text: 'Ashwath',new_url:"https://oblador.github.io/react-native-vector-icons/",content:"React Native's Image component handles image caching like browsers for the most part. If the server is returning proper cache control headers for images you'll generally get the sort of built in caching behavior you'd have in a browser. Even so many people have noticed:" , uri: "https://images.unsplash.com/photo-1622890276840-8eabe803e2bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" },
        { id: 2,text: 'Sound',new_url:"https://www.npmjs.com/package/react-native-snap-carousel",content:"React Native's Image component handles image caching like browsers for the most part. If the server is returning proper cache control headers for images you'll generally get the sort of built in caching behavior you'd have in a browser. Even so many people have noticed:" , uri: "https://images.unsplash.com/photo-1623144215111-813fdd5b6338?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1103&q=80" },
        { id: 3,text: 'Sri',new_url:"https://docs.nativebase.io/Components.html#fabs-def-headref",content:"React Native's Image component handles image caching like browsers for the most part. If the server is returning proper cache control headers for images you'll generally get the sort of built in caching behavior you'd have in a browser. Even so many people have noticed:" , uri: "https://images.unsplash.com/photo-1623176035122-4e07bc19bab7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" },
        { id: 4,text: 'Sam',new_url:"https://github.com/Gopalakrishnan-V/inshorts-clone/blob/master/src/screens/NewsStackScreen.js",content:"React Native's Image component handles image caching like browsers for the most part. If the server is returning proper cache control headers for images you'll generally get the sort of built in caching behavior you'd have in a browser. Even so many people have noticed:" , uri: "https://images.unsplash.com/photo-1623095517737-bcdd0c8fee76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" },
        { id: 5,text: 'Shyam',new_url:"https://stackoverflow.com/questions/53525684/how-do-i-use-react-native-onlongpress-properly",content:"React Native's Image component handles image caching like browsers for the most part. If the server is returning proper cache control headers for images you'll generally get the sort of built in caching behavior you'd have in a browser. Even so many people have noticed:" , uri: "https://images.unsplash.com/photo-1611095790691-ff1be3430b22?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" }
      ];

      const renderItem = ({item,index}) => {
        return (
          // <Swipeable renderLeftActions={() => {goLive}}>
            <NewsCards news={newsState.news[index]}/>
            //  </Swipeable>
            // <View>
            //     <Text>{ARTICLES[index].text}</Text>
            // </View>
        );
      }

      const handleEndReached = () => {
            return( 
               <Text>
                   Hooo
               </Text>
            )
      }

      const setactive1Btn = () => {
        setopenweb(false)
      }

      const goLive = () => {
        return navigation.navigate("WebViews")
      }
     
        return(
            <Container style={styles.fastbox}>
        <View style={{flex: 1}}>
          {console.log("News",newsState.news)}
            {/* <TouchableOpacity
                onPress={() => navigation.navigate("Live")}
            > */}
             {/* <Swipeable renderLeftActions={goLive}> */}
            <Carousel
              data={newsState.news}
              renderItem={renderItem}
              sliderWidth={SCREEN_WIDTH}
              sliderHeight={SCREEN_HEIGHT}
              itemWidth={SCREEN_WIDTH}
              itemHeight={SCREEN_HEIGHT}
              inactiveSlideOpacity={1}
              enableMomentum={true}
              enableSnap={true}
              inactiveSlideScale={1}
              vertical={true}
              activeSlideOffset={100}
              swipeThreshold={2}
              onEndReached={handleEndReached}
              nestedScrollEnabled
              windowSize={5}
              onSnapToItem={(index) => setindexAt(index)}
              // ListEmptyComponent={<ShortsLoader />}
            /> 
            {/* </Swipeable> */}
            {/* </TouchableOpacity> */}
          </View>
          <Fab
                active={active}
                direction="up"
                containerStyle={{ }}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                // onPress={() => setactive(!active )}>
                onPress={() => navigation.navigate('WebViews', {
                    url:newsState.news[indexAt].url
                })}>

                <Icon name="share" />
                {/* <Button style={{ backgroundColor: '#34A34F' }}>
                  <Icon name="logo-whatsapp" />
                </Button>
                <Button style={{ backgroundColor: '#3B5998' }}>
                  <Icon name="logo-facebook" />
                </Button>
                <Button disabled style={{ backgroundColor: '#DD5144' }}>
                  <Icon name="mail" />
                </Button> */}
              </Fab>
            </Container>
        )
      
      

   
}

const styles = new StyleSheet.create({
    fastbox:{
        backgroundColor:'#fff'
    }
})

News.propType = ({
  getAllNews: propType.func.isRequired,
  newsState: propType.object.isRequired
})


const mapStateToProps = (state) => ({
  newsState: state.news
})

const mapDispatchToProps = {
  getAllNews
}



export default connect(mapStateToProps,mapDispatchToProps)(News);