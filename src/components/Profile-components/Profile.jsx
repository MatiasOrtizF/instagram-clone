import { Text, View , Image , TouchableOpacity, ScrollView, FlatList , Linking } from 'react-native';
import Constants from 'expo-constants'
import data from '../../data/data.json'
import Posts from './Posts'
import Etiqueta from './Etiqueta'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Nose from './Nose'
import PostDetail from './Post-Detail'
import { createStackNavigator } from '@react-navigation/stack';
import StackPostDetails from './StackPostDetails'
import { useDatas } from '../../hooks/datasContext';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function PostProfile({navigation}) {
    const { userData } = useDatas();
    return (
                    <FlatList
                        data={userData[0].post}
                        keyExtractor={item=>item.id}
                        renderItem={({item: post}) => (
                                <TouchableOpacity style={{width:"33%" , margin:1}} onPress={()=> navigation.navigate('PostDetail')} >
                                    <Image style={{height:100}} source={{uri:post.image}}/>
                                </TouchableOpacity>
                        )}
                        numColumns={3}
                        scrollEnabled={false}
                    />  
    );
}

export default function Profile({navigation}) {
    const { userData , post , followingData , followersData , usersData , contFollowing ,contFollowers } = useDatas();
    const lengthPost = (userData[0].post.length)
    const ceilLengthPost = Math.ceil(lengthPost/3)

    openURL = (url) => {
        Linking.openURL(url)
    }
    
    return (
        <View style={{marginTop: Constants.statusBarHeight , backgroundColor:"white"}}>
            <ScrollView>
                <View>
                    
                <View style={{padding: 10}}>
                    <View style={{flexDirection:"row" , justifyContent:"space-between"}}>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{fontWeight:"bold" , fontSize:20}}>{userData[0].userName}</Text>
                            <Image style={{width:14 , height:14 , marginLeft:5 , alignSelf:"center"}} source={require('../../../assets/icons/verificado-icon.png')} ></Image>
                            {/* <TouchableOpacity style={{alignSelf:"center"}}> 
                                <Image style={{width:20 , height:20 , marginLeft:5}} source={require('../../../assets/icons/arrow-down-icon.png')} ></Image>
                            </TouchableOpacity>                     */}
                        </View>
                        <View style={{flexDirection:"row"}}>
                            {/* <Image style={{width:20, height:20 , alignSelf:"center" , marginRight:20}} source={require('../../../assets/icons/add-profile-icon.png')}></Image> */}
                            <Image source={require('../../../assets/icons/menu-burger-icon.png')}></Image>
                        </View>
                    </View>
                </View>


                <View style={{paddingHorizontal: 10}}>

                    <View>
                        <View style={{flexDirection:"row" , alignItems:"center" , justifyContent:"space-between"}}>
                            <View>
                                <Image style={{width:85,height:85 , borderRadius:100}} source={{uri:userData[0].imageProfile}}></Image>
                                <Text style={{fontWeight:600}}>{userData[0].name}</Text>
                            </View>
                            <View>
                                <Text style={{alignSelf:"center" , fontWeight:"bold" , fontSize:17}}>{userData[0].post.length}</Text>
                                <Text>Posts</Text>
                            </View>
                            <TouchableOpacity onPress={()=> navigation.navigate('Followers')}>
                                <Text style={{alignSelf:"center" , fontWeight:"bold" , fontSize:17}}>{userData[0].numberFollowers}</Text>
                                <Text>Followers</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> navigation.navigate('Following')}>
                                <Text style={{alignSelf:"center" , fontWeight:"bold" , fontSize:17}}>{userData[0].numberFollowing}</Text>
                                <Text>Following</Text>
                            </TouchableOpacity>
                        </View>
                        <Text>{userData[0].description}</Text>
                        <View style={{flexDirection:"row"}}>
                            <Image style={{width:17 , height: 17 , marginRight:5}} source={require('../../../assets/icons/link-icon.png')}></Image>
                            <TouchableOpacity onPress={()=> openURL(userData[0].link)}>
                                <Text style={{color:"blue"}}>themessistore.com</Text>   
                            </TouchableOpacity> 
                        </View>
                        {/* <Text style={{color:"blue"}}>Paris, France</Text> */}
                    </View>
                    <View style={{flexDirection:"row" , justifyContent:"space-between" , width:"100%" , marginVertical:10}}>
                        <TouchableOpacity style={{backgroundColor:"#DADADA" , width:"44%" , padding:5 , borderRadius:7}}onPress={()=> navigation.navigate('EditProfile')}>
                            <Text style={{alignSelf:"center" , fontWeight:"bold"}}>Edit profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:"#DADADA" , width:"44%" , padding:5 , borderRadius:7}}>
                            <Text style={{alignSelf:"center" , fontWeight:"bold"}}>Share profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:"#DADADA" , width:"9%" , padding:5 , borderRadius:7}}>
                            <Image style={{width:20 , height:20 , alignSelf:"center"}} source={require('../../../assets/icons/add-icon.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                    {/* <View style={{flexDirection:"row" , width:"100%" , marginTop:20}}>
                        <View style={{width:"50%" , alignItems:"center"}}>
                            <Image style={{width:30 , height:30}} source={require('../../../assets/icons/publicaciones-icon.png')}></Image>
                        </View>
                        <View style={{width:"50%" , alignItems:"center"}}>
                            <Image source={require('../../../assets/icons/etiquetado-icon.png')}></Image>
                        </View>
                    </View>
                    <View style={{width:"100%", justifyContent:"space-between" , flexDirection:"row" , marginTop:5}}>
                        <View style={{ backgroundColor: 'gray', height: 1 , width:"50%" , alignSelf:"flex-start" }} />
                        <View style={{ backgroundColor: 'gray', height: 0.5 , width:"50%"}} />
                    </View> */}
                </View>
                <View>
                        <Tab.Navigator style={{height:(102*ceilLengthPost)+50}}>
                                <Tab.Screen
                                name="PostProfile"
                                component={PostProfile}
                                options={{
                                    tabBarShowLabel: false,
                                    tabBarIcon: ({focused}) => (
                                        <Image style={{width:30 , height:30}} source={require('../../../assets/icons/publicaciones-icon.png')}></Image>
                                    )
                                }}>
                                </Tab.Screen>
                                
    
                                <Tab.Screen
                                name="Etiqueta"
                                component={Etiqueta}
                                options={{
                                    tabBarShowLabel: false,
                                    tabBarIcon: ({focused}) => (
                                        <Image source={require('../../../assets/icons/etiquetado-icon.png')}></Image>
                                    )
                                }}
                                />
                        </Tab.Navigator>
                </View>
            </ScrollView>
        </View>
    );
}