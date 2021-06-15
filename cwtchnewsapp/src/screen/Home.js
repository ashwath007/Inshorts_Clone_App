import React,{useEffect,useState} from 'react';
import { connect} from 'react-redux'
import { Appbar,Searchbar,Subheading   } from 'react-native-paper';

import propTypes from 'prop-types'
import Carousel from 'react-native-snap-carousel';
import { getCore } from '../action/core';
import { getTopics } from '../action/topics';
import Icon from 'react-native-vector-icons/FontAwesome';
import Splash from './SplashScreen/Splash';
import { SectionGrid,FlatGrid } from 'react-native-super-grid';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';

import {googleSignout} from '../action/auth'
import Settings from './Settings';
GoogleSignin.configure({
  webClientId: '350416576934-3qnqa9niinbaikun27jg1vid04kj21c1.apps.googleusercontent.com',
});

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Home = ({getCore,getTopics,topicState,coreState,googleSignout,navigation}) => {

  const [searchQuery, setSearchQuery] = useState('');

  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => navigation.navigate("Settings");

  const [corosel, setcorosel] = useState(0);

      const MainThemeData = [
        {id:1, logo:'',theme:'Insights'},
        {id:2, logo:'',theme:'COVIDCare'},
        {id:3, logo:'',theme:'poll'},
        {id:4, logo:'',theme:'Tech'},

      ];

      const MainCategoryData = [
        {id:1,icon:'feed',topic:'MY FEED'},
        {id:2,icon:'globe',topic:'ALL NEWS'},
        {id:3,icon:'bar-chart',topic:'TOP STORIES'},
        {id:4,icon:'magic',topic:'TRENDING'},
        {id:5,icon:'bookmark',topic:'BOOKMARKS'},
        {id:6,icon:'bars',topic:'UNREAD'},


      ];

      // const signOut = async () => {
      //   console.log('Signingout');

      //   try {
      //     await GoogleSignin.revokeAccess();
      //     await GoogleSignin.signOut();
      //     console.log('Signingout');
      //      // Remember to remove the user from your app's state as well
      //   } catch (error) {
      //     console.error(error);
      //   }
      // };



      const [allCore, setallCore] = useState([]);
      const [allTopics, setallTopics] = useState([]);



      useEffect(() => {
          getCore()
          getTopics()
      }, [])


      
      const renderItem = ({item, index}) => {
        return (
          <TouchableOpacity onPress={() => {navigation.navigate("HomeNews"
          , {
            newstopics: item.title,
            placehome: 'core'
          }
          
          )}}>
            {console.log(item.title)}
   <View key={index} style={{height:100,width:190,backgroundColor:item.color,borderRadius:5}}>
                  <Image
              source={{uri:item.logo}}
              style={{height:60,width:60,alignSelf:'center',justifyContent:'center',marginTop:22}}
          />  
                {/* <Text style={styles.itemName,{alignSelf:'center'}}>{ item.title }</Text>   */}
            </View>
          </TouchableOpacity>
         
        );
    }

    const renderCategory = ({item, index}) => {
      return(
        <View style={{height:100, width:100, backgroundColor:'white',marginRight:20,borderRadius:8}}>
              <Icon
              style={{alignSelf:'center',fontSize:30,justifyContent:'center',padding:10}}
              
  reverse
  name={item.icon}
  type='ionicon'
  color='#000'
/>
              <Text style={{alignSelf:'center'}}>
                {item.topic}
              </Text>
        </View>
      )
    }

    if(coreState.loading){
      // console.log("coreState - ",coreState);
      return <Splash/>
  }

  
  if(topicState.loading){
    // console.log("topicState - ",topicState);

    return <Splash/>
}


    return(
      <>
      {/* {console.log(coreState.core)}
      {console.log(topicState.topics)} */}

      <View>
      <Appbar.Header
           style={{backgroundColor:'#fff'}}
  
           >

      <Appbar.Content title="Discover"/>

      <Appbar.Action icon="cog-outline" onPress={_handleMore} />
    </Appbar.Header>

      <View style={{padding:10}}>
        <Searchbar
      placeholder="Search"
      onChangeText={() => {}}
      value={searchQuery}
    />
        </View>
      </View>
        
        <ScrollView style={{marginTop:12}}>
        

      <View>
       
        <View>
        <Carousel
              ref={(c) => { setcorosel(c) }}
              data={coreState.core}
              renderItem={renderItem}
              
              sliderWidth={windowWidth}
              itemWidth={190}
            />


          </View>

          <View>
        <Subheading style={{paddingLeft:20,marginTop:25,marginBottom:12}}>CATEGORY</Subheading >
          {/* Flatlist here horizontal scroll */}
          <View style={{flexDirection:'column',justifyContent:'space-between',paddingLeft:20}}>

          <FlatList
           showsHorizontalScrollIndicator={false}
        data={MainCategoryData}
        horizontal={true}
        renderItem={renderCategory}
        keyExtractor={item => item.id}
      />
      </View>
            </View>
            <View>
          <Subheading style={{paddingLeft:20,marginTop:25}}>SUGGESTED TOPICS</Subheading >

          <View>
          <FlatGrid
      itemDimension={130}
      data={topicState.topics}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
          <Image
              source={{uri:item.logo}}
              style={{height:90,width:90,alignSelf:'center',justifyContent:'center'}}
          />  
          <Text style={styles.itemName}>{item.title}</Text>
         
        </View>
      )}
    />
            </View>
              </View>

      
      </View>

        </ScrollView>
        </>
    )
}


const mapDispatchToProps = {
  googleSignout,
  getCore,
  getTopics
}

const mapStateToProps = (state) => ({
  coreState: state.core,
  topicState: state.topics
})

Home.propTypes = ({
  googleSignout: propTypes.func.isRequired,
  getCore: propTypes.func.isRequired,
  getTopics: propTypes.func.isRequired,
  coreState: propTypes.object.isRequired,
  topicState: propTypes.object.isRequired
})

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});



export default connect(mapStateToProps , mapDispatchToProps)(Home);