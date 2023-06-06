import { Text, View , Image , TouchableOpacity, ScrollView, FlatList , Linking } from 'react-native';
import Constants from 'expo-constants'
import data from '../../data/data.json'
import PostProfile from './Post-Profile';

export default function Profile() {
    openURL = (url) => {
        Linking.openURL(url)
    }
    
    return (
        <View style={{marginTop: Constants.statusBarHeight , flex:1}}>
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
                        <View
                            style={{position: 'absolute' , top: 4 , right:47 , borderRadius:7 , borderWidth: 3 , borderColor: 'black' , width:25 , height:25}}>
                        </View>
                        <Image style={{width:16, height:16 , alignSelf:"center" , marginRight:20}} source={require('../../../assets/icons/create-icon.png')}></Image>
                        <Image source={require('../../../assets/icons/menu-burger-icon.png')}></Image>
                    </View>
                </View>
            </View>


            <ScrollView>
            <View style={{paddingHorizontal: 10}}>

                <View style={{paddingVertical:10}}>
                    <View style={{flexDirection:"row" , alignItems:"center" , justifyContent:"space-between"}}>
                        <View>
                            <Image style={{width:85,height:85 , borderRadius:100}} source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/43818140_2116018831763532_3803033961098117120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8rrGORFcBx0AX-ALIFn&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAhjcSMhgczSQcHN9pYlF9MOn_7sAmGky0vH_K_Wo0iSg&oe=647CC632&_nc_sid=a1ad6c'}}></Image>
                            <Text style={{fontWeight:600}}>{data.userInformation.username}</Text>
                        </View>
                        <View>
                            <Text style={{alignSelf:"center" , fontWeight:"bold" , fontSize:17}}>{data.userInformation.post.length}</Text>
                            <Text>Publicaciones</Text>
                        </View>
                        <View>
                            <Text style={{alignSelf:"center" , fontWeight:"bold" , fontSize:17}}>{data.userInformation.numberFollowers}</Text>
                            <Text>Seguidores</Text>
                        </View>
                        <View>
                            <Text style={{alignSelf:"center" , fontWeight:"bold" , fontSize:17}}>{data.userInformation.numberFollowing}</Text>
                            <Text>Seguidos</Text>
                        </View>
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
                <View style={{flexDirection:"row" , justifyContent:"space-between" , width:"100%" , marginTop:10}}>
                    <TouchableOpacity style={{backgroundColor:"#DADADA" , width:"44%" , padding:5 , borderRadius:7}}>
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
                <View style={{flexDirection:"row" , width:"100%" , marginTop:20}}>
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
                </View>

                <FlatList
                        data={data.userInformation.post}
                        keyExtractor={item=>item.id}
                        renderItem={({item: post}) => (
                            <PostProfile {...post}/>
                        )}
                        numColumns={3}
                        scrollEnabled={false}
                    />  

            </ScrollView>
        </View>
    );
}