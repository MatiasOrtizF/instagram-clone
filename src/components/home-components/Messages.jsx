import { Text, View , Image , ScrollView , TextInput } from 'react-native';
import styles from '../Styles';
import Constants from 'expo-constants'
import Stories from './Stories'
import Post from './Post'

export default function Messages() {
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
                    <View style={{flexDirection:"row" , justifyContent:"space-between" , marginVertical:5}}>
                        <View style={{flexDirection:"row"}}>
                            <Image style={{width:45,height:45 , borderRadius:100}} source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/43818140_2116018831763532_3803033961098117120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8rrGORFcBx0AX-ALIFn&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAhjcSMhgczSQcHN9pYlF9MOn_7sAmGky0vH_K_Wo0iSg&oe=647CC632&_nc_sid=a1ad6c'}}></Image>
                            <View style={{justifyContent:"center" , marginLeft:10}}>
                                <Text style={{fontWeight:"700"}}>leomessi</Text>
                                    <Text style={{fontWeight:"700"}}>6 new mmesages . 2h</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row" , alignItems:"center"}}>
                            <Image style={{width:8 , height:8 , marginRight:10}} source={require('../../../assets/icons/point-actived-icon.png')}></Image>
                            <Image source={require('../../../assets/icons/camara-icon.png')}></Image>
                        </View>
                    </View>  

                    <View style={{flexDirection:"row" , justifyContent:"space-between" , marginVertical:5 , width:"100%"}}>
                        <View style={{flexDirection:"row" , width:"75%"}}>
                            <Image style={{width:45,height:45 , borderRadius:100}} source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/43818140_2116018831763532_3803033961098117120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8rrGORFcBx0AX-ALIFn&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAhjcSMhgczSQcHN9pYlF9MOn_7sAmGky0vH_K_Wo0iSg&oe=647CC632&_nc_sid=a1ad6c'}}></Image>
                            <View style={{justifyContent:"center" , marginHorizontal:10}}>
                                <Text style={{fontWeight:"700"}}>leomessi</Text>
                                <Text numberOfLines={1} ellipsizeMode="tail">Felicidades por la copa del mundo crack, genio, maquina</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row" , alignItems:"center" , width:"25%" , justifyContent:"flex-end"}}>
                            <Image style={{width:8 , height:8 , marginRight:10}} source={require('../../../assets/icons/point-actived-icon.png')}></Image>
                            <Image source={require('../../../assets/icons/camara-icon.png')}></Image>
                        </View>
                    </View> 

                    <View style={{flexDirection:"row" , justifyContent:"space-between" , marginVertical:5}}>
                        <View style={{flexDirection:"row"}}>
                            <Image style={{width:45,height:45 , borderRadius:100}} source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/43818140_2116018831763532_3803033961098117120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8rrGORFcBx0AX-ALIFn&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAhjcSMhgczSQcHN9pYlF9MOn_7sAmGky0vH_K_Wo0iSg&oe=647CC632&_nc_sid=a1ad6c'}}></Image>
                            <View style={{justifyContent:"center" , marginLeft:10}}>
                                    <Text style={{fontWeight:"700"}}>leomessi</Text>
                                    <Text>Sent 5h ago</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row" , alignItems:"center"}}>
                            <Image style={{width:8 , height:8 , marginRight:10}} source={require('../../../assets/icons/point-actived-icon.png')}></Image>
                            <Image source={require('../../../assets/icons/camara-icon.png')}></Image>
                        </View>
                    </View> 


                    <View style={{flexDirection:"row" , justifyContent:"space-between" , marginVertical:5}}>
                        <View style={{flexDirection:"row"}}>
                            <Image style={{width:45,height:45 , borderRadius:100}} source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/43818140_2116018831763532_3803033961098117120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8rrGORFcBx0AX-ALIFn&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAhjcSMhgczSQcHN9pYlF9MOn_7sAmGky0vH_K_Wo0iSg&oe=647CC632&_nc_sid=a1ad6c'}}></Image>
                            <View style={{justifyContent:"center" , marginLeft:10}}>
                            <Text style={{fontWeight:"700"}}>leomessi</Text>
                                    <Text>Seen 5h ago</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row" , alignItems:"center"}}>
                            <Image style={{width:8 , height:8 , marginRight:10}} source={require('../../../assets/icons/point-actived-icon.png')}></Image>
                            <Image source={require('../../../assets/icons/camara-icon.png')}></Image>
                        </View>
                    </View> 

                    <View style={{flexDirection:"row" , justifyContent:"space-between" , marginVertical:5}}>
                        <View style={{flexDirection:"row"}}>
                            <Image style={{width:45,height:45 , borderRadius:100}} source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/43818140_2116018831763532_3803033961098117120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8rrGORFcBx0AX-ALIFn&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAhjcSMhgczSQcHN9pYlF9MOn_7sAmGky0vH_K_Wo0iSg&oe=647CC632&_nc_sid=a1ad6c'}}></Image>
                            <View style={{justifyContent:"center" , marginLeft:10}}>
                            <Text style={{fontWeight:"700"}}>leomessi</Text>
                                    <Text>Alto tibio .7w</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row" , alignItems:"center"}}>
                            <Image style={{width:8 , height:8 , marginRight:10}} source={require('../../../assets/icons/point-actived-icon.png')}></Image>
                            <Image source={require('../../../assets/icons/camara-icon.png')}></Image>
                        </View>
                    </View> 
                </View>
            </ScrollView>
        </View>
    );
}
