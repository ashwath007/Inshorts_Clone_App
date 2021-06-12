import React,{useEffect,useState,useRef} from 'react';
import { StyleSheet,View,TouchableOpacity,  Text } from 'react-native';
import { Appbar,Divider } from 'react-native-paper';
import { List,Button } from 'react-native-paper';
import RBSheet from "react-native-raw-bottom-sheet";
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
import {useDispatch, connect} from 'react-redux';
import propsType from "prop-types";
import {googleSignout} from '../action/auth'



GoogleSignin.configure({
    webClientId: '350416576934-3qnqa9niinbaikun27jg1vid04kj21c1.apps.googleusercontent.com',
  });






const Settings = ({userDetails,googleSignout}) => {


    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => {};

    const [token, settoken] = useState('');
    const [userData, setuserData] = useState(userDetails);

    const [error, seterror] = useState(false);

    const bottomSheetRef = useRef([]);
    useEffect(() => {

    }, [])


    const options = [
        { oname:'Auto Start', subname: '',logo:'arrow-right-drop-circle-outline'},
        { oname:'Language', subname: 'Choose Language',logo:'sort-alphabetical-descending-variant'},
        { oname:'Notifications', subname: 'Please enable to receive notification',logo:'bell-check-outline'},
        { oname:'Personalize Your Feed', subname: 'Please enable to receive notification',logo:'boomerang'},
        { oname:'HD Images', subname: 'Please enable to receive notification',logo:'camera-iris'},
        { oname:'Night Mode', subname: 'Please enable to receive notification',logo:'white-balance-incandescent'},
        { oname:'Autoplay', subname: 'Please enable to receive notification',logo:'arrow-right-drop-circle'},
    ]

  

    return(
        <View>
<Appbar.Header
           style={{backgroundColor:'#EB4D4B'}}
           >

      <Appbar.Content title="Settings"/>

      <Appbar.Action icon="account-circle" onPress={() => bottomSheetRef.current.open()} />
    </Appbar.Header>

        {console.log(userDetails)}
            <View>

            <List.Section>
            {options.map((op,index) => {
                return(
                    <View key={index}>
                    <List.Item
                    title={op.oname}
                    description={op.subname}
                    left={props => <List.Icon {...props} icon={op.logo}/>}
                  />
                     <Divider />
                  </View>
                )
            })

}
    </List.Section>
               
            </View>


            <RBSheet
        ref={(el) => (bottomSheetRef.current = el)}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={180}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
        }}>
            <View>
                <Text style={{alignSelf:'center',marginTop:12,fontFamily:'popins',fontSize:19}}>
                    We will miss U
                </Text>
                <View style={{padding:12}}>

                <Button icon="logout" color="#EB4D4B" mode="contained" onPress={() => googleSignout()}>
    Signout
  </Button>
                </View>
              

                </View>
      </RBSheet>
        </View>
    )
}


Settings.propsType = {
    userDetails: propsType.object.isRequired,
    googleSignout: propsType.func.isRequired
}

const mapDispatchToProps = {
    googleSignout
  }
  

const mapStateToProps = (state) => ({
    userDetails: state.auth.user
})

export default connect(mapStateToProps,mapDispatchToProps)(Settings)