import React, { useState } from 'react'
import {View,StyleSheet,Image,TouchableOpacity,Text} from 'react-native'
import Pop_up from './Pop_up'
const  Home = () => {
    const [visible, setVisible] = useState(false)
    
    const HandleOpen = () => {
       setVisible(true)
    }
    
    return (
        <View style={styles.container}>
            <Pop_up visible={visible} setVisible={setVisible}/>
            <Image source = {require("../assets/bell.jpg") } style={styles.img} />

            <TouchableOpacity style={styles.click} onPress={HandleOpen}>
                <Text style={styles.hintText}>Click here</Text>
                
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
   img : {
       width : 280,
       marginTop :15,
       height :200,
       shadowColor :'#000',
       shadowOffset : {width : 6, height :6},
       shadowOpacity :.4,
        marginBottom:15,
   },
   click : {
       width :180,
       height :50,
       shadowColor :'#000',
       shadowOffset : {width : 5, height :5},
       shadowOpacity :0.5,
       backgroundColor :'#3381e8',
       display : 'flex',
       alignItems:'center',
       justifyContent:'center',

   },
   hintText :{
        color : '#FFF',
        fontSize:15,
   },
   container:{
       width :'100%',
       alignItems: 'center',
       display: 'flex',

   }
  });

export default Home
