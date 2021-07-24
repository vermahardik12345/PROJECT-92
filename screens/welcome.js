import { StyleSheet, Text, View,TouchableOpacity, TextInput ,Alert, ScrollView,KeyboardAvoidingView,Modal,Image,Dimensions,Button,Pressable} from 'react-native';
import React ,{Component} from 'react';

import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RFValue } from "react-native-responsive-fontsize";
const {width,height} =Dimensions.get('window')

export default class Welcome extends React.Component{
    componentDidMount(){
        console.log(width,height/35.9)
    }
    render(){
        
        return(
        <View>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.logIntext}>LogIn in to app or sign up for the app and enjoy the experience </Text>
          <Image
          source={require('../assets/Illustration.png')}
          style={styles.image}
          />
          <TouchableOpacity style={styles.loginbutton} onPress={()=>{this.props.navigation.navigate('Login')}}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
         
        </View>
        )
    }
}
const styles = StyleSheet.create({
welcomeText:{
color:"black",
textAlign:"center",
marginTop:120,
fontWeight:"bold",
fontSize:30
},
logIntext:{
  textAlign:"center",
  color:"grey",
  marginTop:20
},
image:{
  width:250,
  height:250,
  alignSelf:"center",
  marginTop:50
},
loginbutton:{
  backgroundColor:"#FFEB3A",
  height:50,
  width:250,
  borderBottomRightRadius:30,
  borderBottomLeftRadius:30,
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
  alignSelf:"center",
  marginTop:40,
 
  borderColor:"black",
  shadowColor:"black",
  shadowOffset:{width:0,height:6},
  shadowOpacity:1,
  shadowRadius:80,


},
signupbutton:{
  backgroundColor:"#FFEB3A",
  height:50,
  width:250,
  borderBottomRightRadius:30,
  borderBottomLeftRadius:30,
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
  alignSelf:"center",
  marginTop:10,
  borderColor:"blue", 
  shadowColor:"black",
  shadowOffset:{width:0,height:6},
  shadowOpacity:1,
  shadowRadius:80,

},
loginButtonText:{
textAlign:"center",
marginTop:12
}
  });