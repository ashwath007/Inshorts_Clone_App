import React,{useEffect,useState} from 'react';
import { StyleSheet,View,  Text } from 'react-native';
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

    const [token, settoken] = useState('');
    const [userData, setuserData] = useState(userDetails);

    const [error, seterror] = useState(false);


    useEffect(() => {

    }, [])


    return(
        <View>
            <Text>
                Settings
            </Text>
        {userDetails.user}
        {console.log(userDetails)}
            {userData ? (
                <Text>  
                        {userData.user}
                </Text>

            ) : (
                <Text>
                        Hooo
                </Text>

            )
            }
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