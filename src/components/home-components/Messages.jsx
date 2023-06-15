import { Text, View , Image , ScrollView , TextInput, Touchable } from 'react-native';
import styles from '../Styles';
import Constants from 'expo-constants'
import Stories from './Stories'
import Post from './Post'
import messageData from '../../data/message-data.json'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect } from 'react';

export default function Messages({navigation}) {
    return (
        <View>
            <ScrollView>

                <View style={{padding:10}}>
                    <TextInput
                    style={{backgroundColor:"#DADADA" , paddingVertical:5 , paddingHorizontal:10 , borderRadius:10}}
                    placeholder='Buscar'
                    />
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom:10}}>
                    <View style={{alignItems:"center" , marginLeft:10}}>
                        <Image style={{position:"absolute" , top:0 , left:0 , zIndex:3 , width:25 , height: 25}} source={require('../../../assets/icons/add-note-icon.png')}></Image>
                        <Image style={{width:65,height:65 , borderRadius:100}} source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/43818140_2116018831763532_3803033961098117120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8rrGORFcBx0AX-ALIFn&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAhjcSMhgczSQcHN9pYlF9MOn_7sAmGky0vH_K_Wo0iSg&oe=647CC632&_nc_sid=a1ad6c'}}></Image>
                        <Text style={{fontSize:12, alignItems:"flex-end"}}>Tu nota</Text>
                    </View>                    
                    <View style={{alignItems:"center" , marginLeft:10}}>
                        <Image style={{width:65,height:65 , borderRadius:100 , borderWidth: 3 , borderColor:"orange"}} source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/43818140_2116018831763532_3803033961098117120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8rrGORFcBx0AX-ALIFn&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAhjcSMhgczSQcHN9pYlF9MOn_7sAmGky0vH_K_Wo0iSg&oe=647CC632&_nc_sid=a1ad6c'}}></Image>
                        <Text style={{fontSize:12}}>leomessi</Text>
                    </View>  
                    <View style={{alignItems:"center" , marginLeft:10}}>
                        <Image style={{width:65,height:65 , borderRadius:100 , borderWidth: 3 , borderColor:"orange"}} source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/43818140_2116018831763532_3803033961098117120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8rrGORFcBx0AX-ALIFn&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAhjcSMhgczSQcHN9pYlF9MOn_7sAmGky0vH_K_Wo0iSg&oe=647CC632&_nc_sid=a1ad6c'}}></Image>
                        <Text style={{fontSize:12}}>leomessi</Text>
                    </View>  
                    <View style={{alignItems:"center" , marginLeft:10}}>
                        <Image style={{width:65,height:65 , borderRadius:100}} source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/43818140_2116018831763532_3803033961098117120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8rrGORFcBx0AX-ALIFn&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAhjcSMhgczSQcHN9pYlF9MOn_7sAmGky0vH_K_Wo0iSg&oe=647CC632&_nc_sid=a1ad6c'}}></Image>
                        <Text style={{fontSize:12}}>leomessi</Text>
                    </View>  
                    <View style={{alignItems:"center" , marginLeft:10}}>
                        <Image style={{width:65,height:65 , borderRadius:100}} source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/43818140_2116018831763532_3803033961098117120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8rrGORFcBx0AX-ALIFn&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAhjcSMhgczSQcHN9pYlF9MOn_7sAmGky0vH_K_Wo0iSg&oe=647CC632&_nc_sid=a1ad6c'}}></Image>
                        <Text style={{fontSize:12}}>leomessi</Text>
                    </View>  
                    <View style={{alignItems:"center" , marginLeft:10}}>
                        <Image style={{width:65,height:65 , borderRadius:100}} source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/43818140_2116018831763532_3803033961098117120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8rrGORFcBx0AX-ALIFn&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAhjcSMhgczSQcHN9pYlF9MOn_7sAmGky0vH_K_Wo0iSg&oe=647CC632&_nc_sid=a1ad6c'}}></Image>
                        <Text style={{fontSize:12}}>leomessi</Text>
                    </View>  
                    <View style={{alignItems:"center" , marginLeft:10}}>
                        <Image style={{width:65,height:65 , borderRadius:100}} source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/43818140_2116018831763532_3803033961098117120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8rrGORFcBx0AX-ALIFn&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAhjcSMhgczSQcHN9pYlF9MOn_7sAmGky0vH_K_Wo0iSg&oe=647CC632&_nc_sid=a1ad6c'}}></Image>
                        <Text style={{fontSize:12}}>leomessi</Text>
                    </View>  
                    <View style={{alignItems:"center" , marginLeft:10}}>
                        <Image style={{width:65,height:65 , borderRadius:100}} source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/43818140_2116018831763532_3803033961098117120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8rrGORFcBx0AX-ALIFn&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAhjcSMhgczSQcHN9pYlF9MOn_7sAmGky0vH_K_Wo0iSg&oe=647CC632&_nc_sid=a1ad6c'}}></Image>
                        <Text style={{fontSize:12}}>leomessi</Text>
                    </View>  
                </ScrollView>

                <View style={{paddingHorizontal:10 , flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style={{fontWeight:"600"}}>Messages</Text>
                    <Text style={{color:"blue"}}>Requests</Text>
                </View>
                <View style={{padding:15}}>
                {messageData.messages.map((message) => (
                    <View style={{flexDirection:"row" , justifyContent:"space-between" , marginVertical:5}}>
                        <TouchableOpacity style={{flexDirection:"row"}} onPress={()=> {navigation.navigate('Chat' , {chatId: message.id}), navigation.setOptions({ tabBarShowLabel: false }) }}>
                            <Image style={{width:45,height:45 , borderRadius:100}} source={{uri:message.imageProfile}}></Image>
                            <View style={{justifyContent:"center" , marginLeft:10}}>
                                <Text style={{fontWeight:"700"}}>{message.userName}</Text>
                                <Text style={{fontWeight:"700"}}>6 new mmesages . 2h</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{flexDirection:"row" , alignItems:"center"}}>
                            <Image style={{width:8 , height:8 , marginRight:10}} source={require('../../../assets/icons/point-actived-icon.png')}></Image>
                            <Image source={require('../../../assets/icons/camara-icon.png')}></Image>
                        </View>
                    </View>  
                ))}
                </View>
            </ScrollView>
        </View>
    );
}
