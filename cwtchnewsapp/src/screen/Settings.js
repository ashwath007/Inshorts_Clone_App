import React,{useEffect,useState} from 'react';
import { StyleSheet,View,  Text } from 'react-native';
import { Appbar,Divider } from 'react-native-paper';
import { List ,Switch} from 'react-native-paper';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
import {useDispatch, connect} from 'react-redux';
import propsType from "prop-types";


GoogleSignin.configure({
    webClientId: '350416576934-3qnqa9niinbaikun27jg1vid04kj21c1.apps.googleusercontent.com',
  });






const Settings = ({userDetails}) => {


    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => {};

    const [token, settoken] = useState('');
    const [userData, setuserData] = useState(userDetails);

    const [error, seterror] = useState(false);


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

  
    const onToggleSwitch = () => {
        
    }
    return(
        <View>
<Appbar.Header
           style={{backgroundColor:'#EB4D4B'}}
           >

      <Appbar.Content title="Settings"/>

      <Appbar.Action icon="account-circle" onPress={_handleMore} />
    </Appbar.Header>

        {console.log(userDetails)}
            <View>

            <List.Section>
            {options.map((op,index) => {
                return(
                    <>
                    <List.Item
                    key={index}
                    title={op.oname}
                    description={op.subname}
                    left={props => <List.Icon {...props} icon={op.logo}/>}
                    right={
                        props => <Switch value={true} onValueChange={onToggleSwitch} />
                    }
                  />
                     <Divider />
                  </>
                )
            })

}
    </List.Section>
               
            </View>



        </View>
    )
}


Settings.propsType = {
    userDetails: propsType.object.isRequired
}

const mapStateToProps = (state) => ({
    userDetails: state.auth.user
})

export default connect(mapStateToProps,null)(Settings)