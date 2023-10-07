import { Text, View , Image , TouchableOpacity, ScrollView, FlatList , Linking } from 'react-native';
import Constants from 'expo-constants'
import data from '../../data/data.json'
import PostProfile from './Post-Profile';
import Posts from './Posts'
import Etiqueta from './Etiqueta'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Nose from './Nose'
import {useDatas} from '../../hooks/datasContext'

export default function Followers() {

    const { usersData , unFollowUser , followUser } = useDatas();    
    return (
        <ScrollView>
            <View style={{paddingHorizontal:15 , justifyContent:"flex-end" , paddingVertical:5}}>
                {usersData.map((user, index) => (
                    user.follower?
                    <View key={index} style={{flexDirection:"row" , alignItems:"center" , width:"100%" , marginVertical:10}}>
                        <View style={{width:"70%" , flexDirection:"row" , alignItems:"center"}}>
                            <View style={{width:"25%"}}>
                                <Image
                                    source={{uri:user.imageProfile}}
                                    style={{width:50 , height:50 , borderRadius:100}}
                                />
                            </View>
                            <View style={{width:"70%"}}>
                                <View style={{flexDirection:"row" , alignItems:"center" , width:"90%"}}>
                                    <Text numberOfLines={1} ellipsizeMode='tail' style={{fontWeight:"700"}}>{user.userName}</Text>
                                    {user.verified ?
                                        <Image style={{width:15 , height:15}} source={require('../../../assets/icons/verificado-icon.png')} ></Image>
                                        :
                                        null
                                    }                                
                                    </View>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={{color:"gray"}}>{user.name}</Text>
                            </View>
                        </View>
                        <View style={{width:"30%" , justifyContent:"flex-end"}}>
                            {user.following ?
                                <TouchableOpacity onPress={()=> unFollowUser(user.id)} style={{backgroundColor:"#DBDBDB" , padding:10 , borderRadius:7}}>
                                    <Text style={{fontWeight:700, color:"black" , alignSelf:"center"}}>
                                        Following
                                    </Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={()=> followUser(user.id)} style={{backgroundColor:"#6192D7" , padding:10 , borderRadius:7}}>
                                    <Text style={{fontWeight:700 , color:"white" , alignSelf:"center"}}>
                                        Follow
                                    </Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                    :
                    null
                ))}
            </View>
        </ScrollView>
    );
}