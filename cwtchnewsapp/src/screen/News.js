import React, { Component,useState } from 'react';
import { Image,StyleSheet, Dimensions,
    Animated,
    PanResponder,} from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon,Button } from 'native-base';
import Carousel from 'react-native-snap-carousel';

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

import NewsCards from './Components/NewsCards';


const News = () => {

    const [indexAt, setindexAt] = useState(0);

    const ARTICLES = [
        { id: 1,text: 'Ashwath', uri: require("./ss.jpg") },
        { id: 2,text: 'Sound', uri: "https://unsplash.com/photos/yqn4he8-ugM" },
        { id: 3,text: 'Sri', uri: "https://images.unsplash.com/photo-1618305718446-cd5d1e95cce7?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D" },
        { id: 4,text: 'Sam', uri: "https://unsplash.com/photos/9zQFvsKpdHs" },
        { id: 5,text: 'Shyam', uri: "https://images.unsplash.com/photo-1622890276840-8eabe803e2bb?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1" }
      ];

      const renderItem = ({item,index}) => {
        return (
            <NewsCards news={ARTICLES[index]}/>
        );
      }
    return(
        <Container style={styles.fastbox}>
    <View style={{flex: 1}}>
        <Carousel
          data={ARTICLES}
          renderItem={renderItem}
          sliderWidth={SCREEN_WIDTH}
          sliderHeight={SCREEN_HEIGHT}
          itemWidth={SCREEN_WIDTH}
          itemHeight={SCREEN_HEIGHT}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          vertical={true}
          swipeThreshold={70}
        //   onEndReached={this.handleEndReached}
          nestedScrollEnabled
          windowSize={5}
          onSnapToItem={(index) => setindexAt(index)}
          // ListEmptyComponent={<ShortsLoader />}
        />
      </View>
        </Container>
    )
}

const styles = new StyleSheet.create({
    fastbox:{
        backgroundColor:'gray'
    }
})

export default News;