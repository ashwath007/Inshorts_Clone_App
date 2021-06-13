import React,{useEffect,useState} from 'react';
import { connect} from 'react-redux'
import {Dimensions } from "react-native"
import propTypes from 'prop-types'
import { APP_THEME_COLOR,WHITE } from './constants/Colors';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,

    useColorScheme,
    TouchableOpacity,
    View,
  } from 'react-native';

  import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
  import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';


  import {googleSignIn,phoneSignIn,verifyPhone} from "../action/auth"

  import { Avatar ,Text,Subheading,Caption,TextInput,Button  } from 'react-native-paper';
  import LOGO from "./src/logo.png"

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;



  const CELL_COUNT = 6;
  const Login = ({googleSignIn,authState,phoneSignIn,verifyPhone}) => {
    
    const [user, setuser] = useState('');
    const [phone, setphone] = useState('');
    const [code, setcode] = useState('');

    const [confirm, setconfirm] = useState(null);

    const [isSent, setisSent] = useState(false);
    const [value, setValue] = useState(''); 
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
    
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
            if(phone.length === 10){
              var tphone = "+91"+phone;
              setphone(tphone)
              let res =  await phoneSignIn({phone})
              console.log('res => ',res);
              if(res){
                setconfirm(res)
                setisSent(true)
                  console.log(res);
    
               }
            }
            else if(phone.length === 13){
              let res =  await phoneSignIn({phone})
              console.log('res => ',res);
              if(res){
                setconfirm(res)
                setisSent(true)
                  console.log(res);
    
               }
            }
         

           
          }
      }
      const doVerifyPhone = async() => {
        console.log(code);
        verifyPhone({code,confirm});
        }

      if(isSent){
        return(
          <View style={{padding:30,marginTop:105}}>
            <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={code}
        onChangeText={(txt) => setcode(txt)}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />

         
                <Button icon="shield-check" mode="contained" onPress={doVerifyPhone} style={{marginTop:14,backgroundColor:APP_THEME_COLOR}}>
    Verify
  </Button>

          </View>
        )
      }else{
        return(
      
          <View style={styles.lbody}>
            <Avatar.Image size={100} source={LOGO} style={{alignSelf:'center',marginTop:50}}/>
            <Text style={{fontFamily:'poppins',fontSize:18,alignSelf:'center',marginTop:12}}>

              Oii Signin fast...
            </Text>
              <GoogleSigninButton onPress={() => googleSignIn()} style={{alignSelf:'center',marginTop:52}}/>

              <Text style={{fontFamily:'poppins',fontSize:18,alignSelf:'center',marginTop:12}}>

or
</Text>
              <View style={{marginTop:50,padding:20}}>
                  <TextInput 
                  keyboardType='phone-pad'
                  placeholder="Enter the phone number" style={{height:40,marginBottom:15}} onChangeText={(t) => setphone(t)} defaultValue={phone}/>
                  <Button icon="login" mode="contained" onPress={doPhoneSignin}>
    Press me
  </Button>
                  
                
              </View>
          </View>
        )
      }

       
  
        
      
     
  }

  const styles = new StyleSheet.create({
    lbody: {
      backgroundColor: WHITE,
      height:windowHeight
    },
    root: {flex: 1, padding: 20,  marginTop:80},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderRadius:8,  
    borderColor: APP_THEME_COLOR,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
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


