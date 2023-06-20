import { Text, View , Image , ScrollView , TextInput , TouchableOpacity , Button} from 'react-native';
import styles from '../Styles';
import Constants from 'expo-constants'
import Stories from './Stories'
import Post from './Post'
import { useEffect, useState } from 'react';
import { useDatas } from '../../hooks/datasContext';

export default function Labelled({route}) {

    const { hDataPost } = useDatas();

    const {postId} = route.params;
    const [listLabeles , setListLabeles] = useState({});
    const postNumber = hDataPost.findIndex(item=>item.id==postId)

    return (
        <View style={{backgroundColor:"white", flex:1}}>
            <Text style={{fontWeight:800 , fontSize:20 , alignSelf:"center" , marginVertical:10}}>In this photo</Text>
            <View
                style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: 0.5,
                }}
            />
            <View style={{paddingHorizontal:15 , justifyContent:"flex-end" , paddingVertical:5}}>
                {hDataPost[postNumber].labelled.map((lab) => 
                    <View style={{flexDirection:"row" , alignItems:"center" , width:"100%" , marginVertical:10}}>
                        <View style={{width:"70%" , flexDirection:"row" , alignItems:"center"}}>
                            <View style={{width:"25%"}}>
                                <Image
                                    source={{uri:lab.imageProfile}}
                                    style={{width:50 , height:50 , borderRadius:100}}
                                />
                            </View>
                            <View style={{width:"70%"}}>
                                <View style={{flexDirection:"row" , alignItems:"center" , width:"90%"}}>
                                    <Text numberOfLines={1} ellipsizeMode='tail' style={{fontWeight:"700"}}>{lab.userName}</Text>
                                    {lab.verified ?
                                        <Image style={{width:15 , height:15}} source={require('../../../assets/icons/verificado-icon.png')} ></Image>
                                        :
                                        null
                                    }                                
                                    </View>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={{color:"gray"}}>{lab.name}</Text>
                            </View>
                        </View>
                        <View style={{width:"30%" , justifyContent:"flex-end"}}>
                            {lab.follow ?
                                <TouchableOpacity style={{backgroundColor:"#DBDBDB" , padding:10 , borderRadius:7}}>
                                    <Text style={{fontWeight:700, color:"black" , alignSelf:"center"}}>
                                        Following
                                    </Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={{backgroundColor:"#6192D7" , padding:10 , borderRadius:7}}>
                                    <Text style={{fontWeight:700 , color:"white" , alignSelf:"center"}}>
                                        Follow
                                    </Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                )}

            </View>
        </View>

);
}
