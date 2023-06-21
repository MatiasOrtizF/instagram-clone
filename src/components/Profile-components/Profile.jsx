import { Text, View , Image , TouchableOpacity, ScrollView, FlatList , Linking } from 'react-native';
import Constants from 'expo-constants'
import data from '../../data/data.json'
import PostProfile from './Post-Profile';
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

export default function Profile({navigation}) {
    const { userData } = useDatas();

    openURL = (url) => {
        Linking.openURL(url)
    }
    
    return (
        <View style={{marginTop: Constants.statusBarHeight}}>
            <ScrollView>
                <View>
                    
                <View style={{padding: 10}}>
                    <View style={{flexDirection:"row" , justifyContent:"space-between"}}>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{fontWeight:"bold" , fontSize:20}}>{data.userInformation.username}</Text>
                            <Image style={{width:14 , height:14 , marginLeft:5 , alignSelf:"center"}} source={require('../../../assets/icons/verificado-icon.png')} ></Image>
                            <TouchableOpacity style={{alignSelf:"center"}}> 
                                <Image style={{width:20 , height:20 , marginLeft:5}} source={require('../../../assets/icons/arrow-down-icon.png')} ></Image>
                            </TouchableOpacity>                    
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <Image style={{width:20, height:20 , alignSelf:"center" , marginRight:20}} source={require('../../../assets/icons/add-profile-icon.png')}></Image>
                            <Image source={require('../../../assets/icons/menu-burger-icon.png')}></Image>
                        </View>
                    </View>
                </View>


                <View style={{paddingHorizontal: 10}}>

                    <View style={{paddingVertical:10}}>
                        <View style={{flexDirection:"row" , alignItems:"center" , justifyContent:"space-between"}}>
                            <View>
                                <Image style={{width:85,height:85 , borderRadius:100}} source={{uri:userData.imageProfile}}></Image>
                                <Text style={{fontWeight:600}}>{data.userInformation.username}</Text>
                            </View>
                            <View>
                                <Text style={{alignSelf:"center" , fontWeight:"bold" , fontSize:17}}>{data.userInformation.post.length}</Text>
                                <Text>Publicaciones</Text>
                            </View>
                            <TouchableOpacity onPress={()=> navigation.navigate('Followers')}>
                                <Text style={{alignSelf:"center" , fontWeight:"bold" , fontSize:17}}>{data.userInformation.numberFollowers}</Text>
                                <Text>Seguidores</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> navigation.navigate('Following')}>
                                <Text style={{alignSelf:"center" , fontWeight:"bold" , fontSize:17}}>{data.following.length}</Text>
                                <Text>Seguidos</Text>
                            </TouchableOpacity>
                        </View>
                        <Text>{data.userInformation.description}</Text>
                        <View style={{flexDirection:"row"}}>
                            <Image style={{width:17 , height: 17 , marginRight:5}} source={require('../../../assets/icons/link-icon.png')}></Image>
                            <TouchableOpacity onPress={()=> openURL(data.userInformation.link)}>
                                <Text style={{color:"blue"}}>themessistore.com</Text>   
                            </TouchableOpacity> 
                        </View>
                        {/* <Text style={{color:"blue"}}>Paris, France</Text> */}
                    </View>
                    <View style={{flexDirection:"row" , justifyContent:"space-between" , width:"100%" , marginVertical:10}}>
                        <TouchableOpacity style={{backgroundColor:"#DADADA" , width:"44%" , padding:5 , borderRadius:7}}onPress={()=> navigation.navigate('EditProfile')}>
                            <Text style={{alignSelf:"center" , fontWeight:"bold"}}>Editar perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:"#DADADA" , width:"44%" , padding:5 , borderRadius:7}}>
                            <Text style={{alignSelf:"center" , fontWeight:"bold"}}>Compartir perfil</Text>
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
                <View style={{height:450}}>
                        <Tab.Navigator>
                                <Tab.Screen
                                name="StackPostDetails"
                                component={StackPostDetails}
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