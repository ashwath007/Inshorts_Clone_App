import React,{useEffect,useState} from 'react';
import { connect} from 'react-redux'
import { Appbar,Searchbar,Subheading   } from 'react-native-paper';
import propTypes from 'prop-types'
import Carousel from 'react-native-snap-carousel';
import { SectionGrid,FlatGrid } from 'react-native-super-grid';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
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


const Home = ({googleSignout,navigation}) => {

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
        {id:1,logo:'',topic:'MY FEED'},
        {id:2,logo:'',topic:'ALL NEWS'},
        {id:3,logo:'',topic:'TOP STORIES'},
        {id:4,logo:'',topic:'TRENDING'},
        {id:5,logo:'',topic:'BOOKMARKS'},
        {id:6,logo:'',topic:'UNREAD'},


      ];


      const [items, setItems] = useState([
        { name: 'TURQUOISE', code: '#1abc9c' },
        { name: 'EMERALD', code: '#2ecc71' },
        { name: 'PETER RIVER', code: '#3498db' },
        { name: 'AMETHYST', code: '#9b59b6' },
        { name: 'WET ASPHALT', code: '#34495e' },
        { name: 'GREEN SEA', code: '#16a085' },
        { name: 'NEPHRITIS', code: '#27ae60' },
        { name: 'BELIZE HOLE', code: '#2980b9' },
        { name: 'WISTERIA', code: '#8e44ad' },
        { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
        { name: 'SUN FLOWER', code: '#f1c40f' },
        { name: 'CARROT', code: '#e67e22' },
        { name: 'ALIZARIN', code: '#e74c3c' },
        { name: 'CLOUDS', code: '#ecf0f1' },
        { name: 'CONCRETE', code: '#95a5a6' },
        { name: 'ORANGE', code: '#f39c12' },
        { name: 'PUMPKIN', code: '#d35400' },
        { name: 'POMEGRANATE', code: '#c0392b' },
        { name: 'SILVER', code: '#bdc3c7' },
        { name: 'ASBESTOS', code: '#7f8c8d' },
      ]);
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

      
      const renderItem = ({item, index}) => {
        return (
            <View style={{height:100,width:190,backgroundColor:'gray',justifyContent:'center',borderRadius:5}}>
                <Text style={{alignSelf:'center',alignContent:'center'}}>{ item.theme }</Text>
            </View>
        );
    }

    const renderCategory = ({item, index}) => {
      return(
        <View style={{height:100, width:100, backgroundColor:'gray',marginRight:20,borderRadius:8}}>
              <Text style={{alignSelf:'center',justifyContent:'flex-start'}}>
                {item.topic}
              </Text>
        </View>
      )
    }

    return(
      <>
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
              data={MainThemeData}
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
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
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
  googleSignout
}

Home.propTypes = ({
  googleSignout: propTypes.func.isRequired
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



export default connect(null, mapDispatchToProps)(Home);