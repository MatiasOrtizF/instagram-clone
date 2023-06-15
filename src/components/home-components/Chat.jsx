import { Text, View , ScrollView , TextInput} from 'react-native';
import styles from '../Styles';
import Constants from 'expo-constants'
import Stories from './Stories'
import Post from './Post'
import messageData from '../../data/message-data.json'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect } from 'react';

export default function Chat({route,navigation}) {
    const {chatId} = route.params;
    const chatNumber = messageData.messages.findIndex(item=>item.id==chatId)

    return (
        <View style={{backgroundColor:"white" , flex:1}}>
            <ScrollView>
                {messageData.messages[chatNumber].chat.map((chat) => (
                    <View style={{paddingHorizontal:15 , paddingVertical:2 }}>
                        {chat.senderI?
                            <View style={{backgroundColor:"#6192D7" , alignSelf:"flex-end" , padding:7 , borderRadius:10 , margin:5}}>
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
            <View style={{flexDirection:"row" , justifyContent:"space-between" , backgroundColor:"#DBDBDB" , borderRadius:10 , marginHorizontal:15 , marginVertical:5 , padding:7}}>
                <TextInput
                    placeholder='Message...'
                />
                <TouchableOpacity style={{backgroundColor:"#6192D7" , alignSelf:"center" , paddingVertical:7 , paddingHorizontal:10 , borderRadius:7}}>
                    <Text style={{color:"white"}}>
                        Send
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
