import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, TextInput ,Alert, ScrollView,KeyboardAvoidingView,Modal,Image,Dimensions,Button,Pressable} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/header';
export default class dashboard extends React.Component{
    constructor(){
        
        super();
        this.state={
        userId:firebase.auth().currentUser.email,
        userName:'',
        currentTime:new Date().getHours()
        
        }
      
       
    }
    GreetUser=()=>{
        if(this.state.currentTime>17){
            return(
                <Text style={style.greetText}>Good Evening!{this.state.userName}</Text>
            )
        }
        else if(this.state.currentTime>12){
            return(
                <Text style={style.greetText}>Good AfterNoon{this.state.userName}</Text>
            )
        }
        else{
            return(
                <Text style={style.greetText}>Good Morning!{this.state.userName}</Text>
            )
        }
        
       
    }
    displayIncomeCard=()=>{
     return(
         <View style={{backgroundColor:"#6552F5",width:250,height:150,marginLeft:60,justifyContent:"center",marginTop:40}}> 
             <Text style={{color:'white',fontFamily:'sans-serif',marginTop:-90,marginLeft:20,fontSize:12}}>Your Current Balance </Text>
         </View>
     )
    } 
    
    getUserDetails=async()=>{
      
      await db.collection('users').where("email_id",'==',this.state.userId)  
      .onSnapshot((snapshot)=>{
        
        snapshot.forEach((doc)=>{
            this.setState({
                userName:doc.data().first_name.toUpperCase()
                
             
           })
        
        })
        
    
    })    
    }
    componentDidMount(){
 
        this.getUserDetails()
        console.log(this.state.currentTime)
    }
    render(){
        return(
            <View>
                <MyHeader title='' />
             {this.GreetUser()}
             <Text style={{marginLeft:33,color:'grey',fontSize:10}}>Hope you're doing well today</Text>
              {this.displayIncomeCard()}
            </View>
        )
    }
}

const style=StyleSheet.create({
    greetText:{
     fontSize:15,
     marginTop:20,
     marginLeft:30,
     fontWeight:"bold",
     fontFamily:"serif"
    }
})