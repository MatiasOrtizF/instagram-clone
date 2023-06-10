import { Text, View , Image , ScrollView , TextInput , TouchableOpacity} from 'react-native';
import styles from '../Styles';
import Constants from 'expo-constants'
import Stories from './Stories'
import Post from './Post'

export default function labelled() {
    return (
        <View style={{alignItems:"center"}}>
            <Text style={{fontWeight:800}}>In this photo</Text>
            <View style={{ backgroundColor: 'Black', height:1 }} />

            <View style={{paddingHorizontal:15 , justifyContent:"flex-end" , paddingVertical:5}}>
                <View style={{flexDirection:"row" , alignItems:"center" , width:"100%" , marginVertical:10}}>
                    <View style={{width:"70%" , flexDirection:"row" , alignItems:"center"}}>
                        <View style={{width:"25%"}}>
                            <Image
                                source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/321091715_1846570395678253_2397686410781786037_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=MfhICy0pQe0AX-mDG43&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfDN1ahWfxN3KT2lD7hMdzZN0z8kag_w3WjgiPC5A6JSDQ&oe=64884F8B&_nc_sid=a1ad6c'}}
                                style={{width:50 , height:50 , borderRadius:100}}
                            />
                        </View>
                        <View style={{width:"70%"}}>
                            <View style={{flexDirection:"row" , alignItems:"center" , width:"90%"}}>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={{fontWeight:"700"}}>rodridepaullllllllllllllllllllllllllllllllllllllllllllllllllllllllll</Text>
                                <Image style={{width:15 , height:15 , marginLeft:5}} source={require('../../../assets/icons/verificado-icon.png')} ></Image>
                            </View>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={{color:"gray"}}>Rodrigo De Paullllllllllllllllllllllllllllllllllllllllllll</Text>
                        </View>
                    </View>
                    <View style={{width:"30%" , justifyContent:"flex-end"}}>
                        <TouchableOpacity style={{backgroundColor:"blue" , padding:10 , borderRadius:7}}>
                            <Text style={{color:"white" , alignSelf:"center"}}>
                                Follow
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flexDirection:"row" , alignItems:"center" , width:"100%" , marginVertical:10}}>
                    <View style={{width:"70%" , flexDirection:"row" , alignItems:"center"}}>
                        <View style={{width:"25%"}}>
                            <Image
                                source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/321091715_1846570395678253_2397686410781786037_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=MfhICy0pQe0AX-mDG43&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfDN1ahWfxN3KT2lD7hMdzZN0z8kag_w3WjgiPC5A6JSDQ&oe=64884F8B&_nc_sid=a1ad6c'}}
                                style={{width:50 , height:50 , borderRadius:100}}
                            />
                        </View>
                        <View style={{width:"70%"}}>
                            <View style={{flexDirection:"row" , alignItems:"center" , width:"90%"}}>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={{fontWeight:"700"}}>rodridepaullllllllllllllllllllllllllllllllllllllllllllllllllllllllll</Text>
                                <Image style={{width:15 , height:15 , marginLeft:5}} source={require('../../../assets/icons/verificado-icon.png')} ></Image>
                            </View>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={{color:"gray"}}>Rodrigo De Paullllllllllllllllllllllllllllllllllllllllllll</Text>
                        </View>
                    </View>
                    <View style={{width:"30%" , justifyContent:"flex-end"}}>
                        <TouchableOpacity style={{backgroundColor:"blue" , padding:10 , borderRadius:7}}>
                            <Text style={{color:"white" , alignSelf:"center"}}>
                                Follow
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{flexDirection:"row" , alignItems:"center" , width:"100%" , marginVertical:10}}>
                    <View style={{width:"70%" , flexDirection:"row" , alignItems:"center"}}>
                        <View style={{width:"25%"}}>
                            <Image
                                source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/321091715_1846570395678253_2397686410781786037_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=MfhICy0pQe0AX-mDG43&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfDN1ahWfxN3KT2lD7hMdzZN0z8kag_w3WjgiPC5A6JSDQ&oe=64884F8B&_nc_sid=a1ad6c'}}
                                style={{width:50 , height:50 , borderRadius:100}}
                            />
                        </View>
                        <View style={{width:"70%"}}>
                            <View style={{flexDirection:"row" , alignItems:"center" , width:"90%"}}>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={{fontWeight:"700"}}>rodridepaullllllllllllllllllllllllllllllllllllllllllllllllllllllllll</Text>
                                <Image style={{width:15 , height:15 , marginLeft:5}} source={require('../../../assets/icons/verificado-icon.png')} ></Image>
                            </View>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={{color:"gray"}}>Rodrigo De Paullllllllllllllllllllllllllllllllllllllllllll</Text>
                        </View>
                    </View>
                    <View style={{width:"30%" , justifyContent:"flex-end"}}>
                        <TouchableOpacity style={{backgroundColor:"blue" , padding:10 , borderRadius:7}}>
                            <Text style={{color:"white" , alignSelf:"center"}}>
                                Follow
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flexDirection:"row" , alignItems:"center" , width:"100%" , marginVertical:10}}>
                    <View style={{width:"70%" , flexDirection:"row" , alignItems:"center"}}>
                        <View style={{width:"25%"}}>
                            <Image
                                source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/321091715_1846570395678253_2397686410781786037_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=MfhICy0pQe0AX-mDG43&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfDN1ahWfxN3KT2lD7hMdzZN0z8kag_w3WjgiPC5A6JSDQ&oe=64884F8B&_nc_sid=a1ad6c'}}
                                style={{width:50 , height:50 , borderRadius:100}}
                            />
                        </View>
                        <View style={{width:"70%"}}>
                            <View style={{flexDirection:"row" , alignItems:"center" , width:"90%"}}>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={{fontWeight:"700"}}>rodridepaullllllllllllllllllllllllllllllllllllllllllllllllllllllllll</Text>
                                <Image style={{width:15 , height:15 , marginLeft:5}} source={require('../../../assets/icons/verificado-icon.png')} ></Image>
                            </View>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={{color:"gray"}}>Rodrigo De Paullllllllllllllllllllllllllllllllllllllllllll</Text>
                        </View>
                    </View>
                    <View style={{width:"30%" , justifyContent:"flex-end"}}>
                        <TouchableOpacity style={{backgroundColor:"blue" , padding:10 , borderRadius:7}}>
                            <Text style={{color:"white" , alignSelf:"center"}}>
                                Follow
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

);
}
