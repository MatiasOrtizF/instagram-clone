import { Text, View , Image , ScrollView , TextInput , TouchableOpacity} from 'react-native';
import styles from '../Styles';
import Constants from 'expo-constants'
import Stories from './Stories'
import Post from './Post'
import Labelled from './Labelled';
import { useDatas } from '../../hooks/datasContext';

export default function Home({navigation}) {

    const { hDataPost , savePost , likedPost , commentsList , messagesCount } = useDatas();


    return (
        <View style={{marginTop: Constants.statusBarHeight , flex:1}}>
            <View style={{justifyContent:"space-between", flexDirection:"row" , padding:10}}>
                <Text style={{fontSize:20}}>INSTAGRAM</Text>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Notifications')}>
                        <Image style={styles.icons} source={require('../../../assets/icons/notifications-icon.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('Messages')}>
                        {messagesCount > 0 ?
                            <View style={{position:"absolute" , zIndex:2 , top:-9 , right:-9 , backgroundColor:"red" , borderRadius:100 , width:18 , height:18 , justifyContent:"center" , alignItems:"center"}}>
                                <Text style={{color:"white" , fontWeight:600 , fontSize:12}}>{messagesCount}</Text>
                            </View>
                        :
                        null}
                        <Image style={{marginLeft:20 , width:22,height:22}} source={require('../../../assets/icons/messenger-icon.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>

                <Stories/>

                <View style={{ backgroundColor: 'gray', height: 0.5 }} />

                {/* Post */}
                {hDataPost.map((post) => (
                <View>
                    <View style={{flexDirection:"row" , alignItems:"center" , margin:10}}>
                        <Image style={{width:30,height:30 , borderRadius:100}} source={{uri:"https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/346442308_273390681703252_1576124466292856058_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=1-ov-nRAL00AX-VD-ZO&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfBBEOvv2v9G4H9HpghENlr4n8YXYFYKL6MmuXtxA1sjXw&oe=647DE067&_nc_sid=a1ad6c"}}></Image>
                        <Text style={{marginLeft:10 , fontWeight:700}}>{post.userName}</Text>
                        <Image style={{width:15 , height:15 , marginLeft:5}} source={require('../../../assets/icons/verificado-icon.png')} ></Image>
                        {/* agregar el lugar */}
                    </View>
                    <ScrollView horizontal style={{marginBottom:10}}>
                        {Object.values(post.images[0]).map((postImg) => (
                            <View>
                                {post.labelled.length > 0 ?
                                    <TouchableOpacity style={{position:"absolute" , zIndex:3 , bottom:15 , left:15}} onPress={()=> navigation.navigate('Labelled', {postId: post.id})}>
                                        <Image style={{width:22 , height: 22}} source={require('../../../assets/icons/user-icon.png')}></Image>
                                    </TouchableOpacity>
                                    :
                                    null
                                }
                                <Image style={{width:390 , height:400}} source={{uri:postImg}}></Image>
                            </View>
                        ))}
                    </ScrollView>
                    <View style={{flexDirection:"row", flex: 1, padding:10}}>
                        <View style={{flexDirection:"row" , width:"33%"}}>
                            <TouchableOpacity onPress={()=>likedPost(post.id)}>
                                {post.like ?
                                    <Image style={styles.icons} source={require('../../../assets/icons/like-actived-icon.png')}></Image>
                                    :
                                    <Image style={styles.icons} source={require('../../../assets/icons/like-icon.png')}></Image>
                                }
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=> commentsList(post.id)}>
                                <Image style={{width:25,height:25 , marginLeft:20}} source={require('../../../assets/icons/comentary-icon.png')}></Image>
                            </TouchableOpacity>
                            <Image style={{width:25,height:25 , marginLeft:20}} source={require('../../../assets/icons/compartir-icon.png')}></Image>
                        </View>
                        <View style={{alignItems:"center" , width:"33%" , flexDirection:"row" , justifyContent:"center"}}>
                            {/* {post.images.map((img) => (
                                console.log(img)
                            ))} */}
                            {Object.values(post.images[0]).length > 1 ?
                            Object.values(post.images[0]).map(() => (
                                // <Image style={{width:9 , height:9}} source={require("../../../assets/icons/point-actived-icon.png")}></Image>
                                <Image style={{width:14 , height:14}} source={require("../../../assets/icons/point-icon.png")}></Image>
                            ))
                            :
                            null
                        }
                            {/* <Image style={{width:9 , height:9}} source={require("../../../assets/icons/point-actived-icon.png")}></Image> */}
                        </View>
                        <View style={{width:"33%", alignItems:"flex-end"}}>
                            <TouchableOpacity onPress={()=>savePost(post.id) }>
                                {post.saved?
                                    <Image style={styles.icons} source={require('../../../assets/icons/save-actived-icon.png')}></Image>
                                    :
                                    <Image style={styles.icons} source={require('../../../assets/icons/save-icon.png')}></Image>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginHorizontal:10}}>
                        <Text style={{fontWeight:700}}>{post.likes} Me gusta</Text>{/*modificar para que se vea asi: (1,123,758)*/}
                        <Text numberOfLines={2} ellipsizeMode='tail'>
                            <Text style={{fontWeight:700}}>{post.userName} </Text>
                            <Text>{post.content}</Text>
                        </Text>
                        {/* Si el largo de coomments es > 1 hace esto:*/}
                        <TouchableOpacity onPress={()=> navigation.navigate('Comments', {postId: post.id})}>
                            {post.comments.length > 1 ? 
                                <Text style={{color:"gray"}}>Ver los {post.comments.length} comentarios </Text>
                                :
                                null
                            }
                        </TouchableOpacity>
                        {post.comments.length > 1 ?
                            post.comments.slice(0,2).map((comment) => (
                                <Text>
                                    <Text style={{fontWeight:700}}>{comment.userName + " "}</Text>
                                    <Text>{comment.comment}</Text>
                                </Text>
                            )) 
                            :
                            null
                        }
                        {/* <Text style={{color:"gray"}}>Ver los {post.comments.length} comentarios </Text>
                            {post.comments.map((comment) => (
                                <Text>
                                    <Text style={{fontWeight:700}}>{comment.userName + " "}</Text>
                                    <Text>{comment.comment}</Text>
                                </Text>
                            ))} */}
                        <Text style={{color:"gray"}}>{post.createdAt}</Text>
                    </View>
                </View>
                ))}
                {/* Fin Post */}


                {/* <Labelled/> */}

            </ScrollView>
        </View>
    );
}
