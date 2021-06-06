import React,{useEffect,useState} from 'react';
import { connect} from 'react-redux'
import propTypes from 'prop-types'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TextInput,
    Text,
    Button,
    useColorScheme,
    TouchableOpacity,
    View,
  } from 'react-native';

  import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';


  import {googleSignIn,phoneSignIn,verifyPhone} from "../action/auth"

  const Login = ({googleSignIn,authState,phoneSignIn,verifyPhone}) => {
    
    const [user, setuser] = useState('');
    const [phone, setphone] = useState('');
    const [code, setcode] = useState('');

    const [confirm, setconfirm] = useState(null);

    const [isSent, setisSent] = useState(false);

    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log("Yes");
          setuser({userInfo})
          console.log({userInfo});
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          console.log(error);
    
          } else if (error.code === statusCodes.IN_PROGRESS) {
          console.log(error);
    
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          console.log(error);
    
            // play services not available or outdated
          } else {
            // some other error happened
          console.log(error);
    
          }
        }
      };
    useEffect(() => {
        GoogleSignin.configure({
          webClientId: '350416576934-3qnqa9niinbaikun27jg1vid04kj21c1.apps.googleusercontent.com',
        });
      }, [])


      const doPhoneSignin = async() => {
        console.log("Phone -> ",phone);
          if(phone){
           let res =  await phoneSignIn({phone})
           console.log('res => ',res);

           if(res){
            setconfirm(res)
            setisSent(true)
              console.log(res);

           }
          }
      }
      const doVerifyPhone = async() => {
        console.log(code);
        verifyPhone({code,confirm});
        }

      if(isSent){
        return(
          <View>
            <TextInput placeholder="Enter the code" onChangeText={(txt) => setcode(txt)} defaultValue={code}/>
                <TouchableOpacity onPress={doVerifyPhone}>
                  <Text>
                    Verify
                  </Text>
                </TouchableOpacity>
          </View>
        )
      }else{
        return(
      
          <View>
              <Text>
              SignIn page
              </Text>
              <GoogleSigninButton onPress={() => googleSignIn()}/>
              <View style={{marginTop:50}}>
                  <TextInput placeholder="Enter the phone number" style={{height:40}} onChangeText={(t) => setphone(t)} defaultValue={phone}/>
                  <TouchableOpacity onPress={doPhoneSignin} style={{backgroundColor:'purple',padding:20}}>
                    <Text style={{color:'white'}}>
                      Send
                    </Text>
                  </TouchableOpacity>
              </View>
          </View>
        )
      }

       
  
        
      
     
  }

const styles = new StyleSheet.create({

})
const mapDispatchToProps = {
  googleSignIn,
  phoneSignIn: (data) => phoneSignIn(data),
  verifyPhone: (data) => verifyPhone(data),
}


const mapStateToProps = (state) => ({
  authState: state.auth
})

Login.prototypes = {
  googleSignIn: propTypes.func.isRequired,
  phoneSignIn: propTypes.func.isRequired,
  authState: propTypes.object.isRequired,
  verifyPhone: propTypes.func.isRequired
  
}
export default connect(mapStateToProps, mapDispatchToProps )(Login);