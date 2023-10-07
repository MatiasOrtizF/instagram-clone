import { Text, View , Image , TouchableOpacity , TextInput , ScrollView } from 'react-native';
import styles from '../Styles';
// import homeData from '../../data/home-data.json'
import PostDetails from './Post-Details'
import { useDatas } from '../../hooks/datasContext';
import Labelled from './Labelled';
// import { TextInput } from 'react-native-gesture-handler';

export default function Post({navigation}) {

    const { hDataPost , savePost , likedPost , commentsList , vCommentsList , numberLabel } = useDatas();

    return (
        hDataPost.map((post, index) => (
                <View key={index}>
                    <View style={{flexDirection:"row" , alignItems:"center" , margin:10}}>
                        <Image style={{width:30,height:30 , borderRadius:100}} source={{uri:"https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/346442308_273390681703252_1576124466292856058_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=1-ov-nRAL00AX-VD-ZO&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfBBEOvv2v9G4H9HpghENlr4n8YXYFYKL6MmuXtxA1sjXw&oe=647DE067&_nc_sid=a1ad6c"}}></Image>
                        <Text style={{marginLeft:10 , fontWeight:700}}>{post.userName}</Text>
                        <Image style={{width:15 , height:15 , marginLeft:5}} source={require('../../../assets/icons/verificado-icon.png')} ></Image>
                        {/* agregar el lugar */}
                    </View>
                    <ScrollView horizontal style={{marginBottom:10}}>
                        {Object.values(post.images[0]).map((postImg, index) => (
                            <View key={index}>
                                {post.labelled.length > 0 ?
                                    <TouchableOpacity style={{position:"absolute" , zIndex:3 , bottom:15 , left:15}} onPress={()=> commentsList(post.id)}>
                                        <Image style={{width:22 , height: 22}} source={require('../../../assets/icons/user-icon.png')}></Image>
                                    </TouchableOpacity>
                                    :
                                    null
                                }
                                <Image style={{width:400 , height:400}} source={{uri:postImg}}></Image>
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
                        <TouchableOpacity onPress={()=> vCommentsList(post.id)}>
                            {post.comments.length > 1 ? 
                                <Text style={{color:"gray"}}>Ver los {post.comments.length} comentarios </Text>
                                :
                                null
                            }
                        </TouchableOpacity>
                        {post.comments.length > 1 ?
                            post.comments.slice(0,2).map((comment, index) => (
                                <Text key={index}>
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
        ))
    );
}
