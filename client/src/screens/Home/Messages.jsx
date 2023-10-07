import { Text, View , Image , ScrollView , TextInput, Touchable } from 'react-native';
import styles from '../../components/Styles';
import Constants from 'expo-constants'
import Stories from '../../components/home-components/Stories'
import Post from '../../components/home-components/Post'
import messageData from '../../data/message-data.json'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import { useDatas } from '../../hooks/datasContext';

export default function Messages({navigation}) {

    const { messages , chatOpen } = useDatas();

    return (
        <View>
            <ScrollView>

                <View style={{paddingHorizontal:10 , paddingVertical:15}}>
                    <TextInput
                    style={{backgroundColor:"#DADADA" , paddingVertical:5 , paddingHorizontal:10 , borderRadius:10}}
                    placeholder='Buscar'
                    />
                </View>

                <View style={{paddingHorizontal:10}}>
                    <Text style={{fontWeight:"600"}}>Messages</Text>
                </View>
                <View style={{padding:15}}>
                {messages.map((message, index) => (
                    <View key={index} style={{flexDirection:"row" , justifyContent:"space-between" , marginVertical:5 , width:"100%"}}>
                        <View style={{width:"85%"}}>
                            <TouchableOpacity style={{flexDirection:"row"}} onPress={()=> {navigation.navigate('Chat' , {chatId: message.id}) , chatOpen(message.id)}}>
                                <Image style={{width:45,height:45 , borderRadius:100}} source={{uri:message.imageProfile}}></Image>
                                
                                <View style={{justifyContent:"center" , marginLeft:10 , width:"75%"}}>
                                    <Text style={{fontWeight:"700"}}>{message.userName}</Text>
                                    <View style={{flexDirection:"row"}}>
                                        {message.chat[message.chat.length-1].senderI ? 
                                            <Text>Sent</Text>
                                            :
                                            message.chat[message.chat.length-1].seen ? 
                                                <Text numberOfLines={1} ellipsizeMode='tail'>{message.chat[message.chat.length-1].content}</Text>
                                                :
                                                <Text numberOfLines={1} ellipsizeMode='tail' style={{fontWeight:"700"}}>{ message.chat[message.chat.length-1].content}</Text>
                                        }
                                        <Text style={{marginLeft:8}}> . 2h</Text>
                                    </View>
                                
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"row" , alignItems:"center"  , width:"15%" , justifyContent:"flex-end"}}>
                            {!message.chat[message.chat.length-1].senderI && !message.chat[message.chat.length-1].seen ? 
                                <Image style={{width:7 , height:7 , marginRight:8}} source={require('../../../assets/icons/point-actived-icon.png')}></Image>
                                :
                                null
                            }
                            <Image source={require('../../../assets/icons/camara-icon.png')}></Image>
                        </View>
                    </View>  
                ))}
                </View>
            </ScrollView>
        </View>
    );
}
