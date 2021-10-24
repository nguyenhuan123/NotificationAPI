import React from 'react'
import { Modal, View,Text,Button,StyleSheet } from 'react-native'
import Iconmodel from 'react-native-vector-icons/Ionicons'
const Pop_up = ({visible,setVisible}) => {
    return (
      <Modal transparent visible={visible}>
          <View style={styles.wrap}>
              <View style={styles.notification}>
                  <View style={styles.Iconmodel}  > 
                <Iconmodel name="close" size={25} color="#000" style={styles.icons} onPress={()=>setVisible(false)}/>      
                </View>
                <Text style={styles.noti}>Notifications</Text>
                <View styles={styles.quest}>
                    <Text style={styles.questText}>What is method do you want ?</Text>
                    <View style={styles.button}>
                        <Button title='Ring a bell' />
                        <Button title='Vibrate' />
                    </View>
                </View>
              </View>
          </View>
      </Modal>
    )

}

const styles = StyleSheet.create({
    wrap:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'rgba(0,0,0,0.2)'
    },
    notification:{
        width:'80%',
        backgroundColor:'#FFF',
        alignItems: 'center',
        
    },
    noti:{
        fontSize:35,
        fontWeight:'bold',
        marginTop:8,
        marginBottom:8,
    },
    quest:{
        width:'100%',
        alignItems: 'center',
    },
    questText:{
        fontSize:13,
        color:'#6B6B6B',
        textAlign:'center',
    },
    button:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width:'80%',
        marginTop:25,
        marginBottom:20,
    },
    Iconmodel:{
        width:'100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    icons:{
        margin:12, 

    }
   });

export default Pop_up
