import { Text, View , ScrollView , TextInput , Image} from 'react-native';
import styles from '../Styles';
import Constants from 'expo-constants'
import Stories from './Stories'
import Post from './Post'
import messageData from '../../data/message-data.json'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { useDatas } from '../../hooks/datasContext';

export default function Chat({route,navigation:{goBack}}) {
    const {chatId} = route.params;
    const chatNumber = messageData.messages.findIndex(item=>item.id==chatId)

    const { sendMessage , input , setInput } = useDatas();

    return (
        <View style={{marginTop: Constants.statusBarHeight , backgroundColor:"white" , flex:1}}>
            <View style={{paddingHorizontal:15 , paddingVertical:10 , backgroundColor:"#9D9D9D" , height:55}}>
                <View style={{flexDirection:"row" , alignItems:"center"}}>
                    <TouchableOpacity onPress={()=>goBack()}>
                        <Image source={require('../../../assets/icons/back-icon.png')}/>
                    </TouchableOpacity>
                    <View style={{flexDirection:"row" , marginLeft:5}}>
                        <Image style={{width:35 , height:35 , borderRadius:100 , marginRight:15}} source={{uri:messageData.messages[chatNumber].imageProfile}}></Image>
                        <View>
                            <Text style={{fontWeight:"700" , color:"white"}}>{messageData.messages[chatNumber].name}</Text>
                            <Text>{messageData.messages[chatNumber].userName}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flex:1}}>
                <ScrollView contentOffset={{y:10000}}>
                    {messageData.messages[chatNumber].chat.map((chat, index) => (
                        <View key={index} style={{paddingHorizontal:15 , paddingVertical:2 }}>
                            {chat.senderI?
                                <View style={{backgroundColor:"#6192D7" , alignSelf:"flex-end" , padding:7 , borderRadius:10}}>
                                    <Text style={{color:"white" , margin:5}}>{chat.content}</Text>
                                </View>
                                :
                                <View style={{backgroundColor:"#DBDBDB" , alignSelf:"flex-start" , padding:7 , borderRadius:10}}>
                                    <Text>{chat.content}</Text>
                                </View>
                            }
                        </View>
                    ))}
                </ScrollView>
            </View>
                <View style={{width:"100%" , height:50}}>
                    <View style={{backgroundColor:"#DBDBDB" , flexDirection:"row" , justifyContent:"space-between" , borderRadius:10 , padding:7 , marginHorizontal:15}}>
                        <TextInput
                            style={{width:"79%"}}
                            placeholder='Message...'
                            multiline
                            onChangeText={setInput}
                            value={input}
                        />
                        <View style={{width:"20%" , justifyContent:"flex-end"}}>
                            <TouchableOpacity style={{backgroundColor:"#6192D7" , paddingVertical:7 , borderRadius:7}} onPress={()=> sendMessage(chatNumber,input)}>
                                <Text style={{color:"white" , alignSelf:"center"}}>
                                    Send
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        </View>
    );
}
