import { View , Image , ScrollView , TextInput , FlatList , TouchableOpacity , Text } from 'react-native';
import styles from '../Styles';
import Constants from 'expo-constants'
import data from '../../data/search-data.json'

export default function SearchDetail({route , navigation}) {
    const {postId} = route.params;
    const postNumber = data.post.findIndex(item=>item.id==postId)
    return (
        <View style={{flex:1}}>
        <ScrollView>
            {/* Post */}
            <View>
                <View style={{flexDirection:"row", margin:10 , justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row" , alignItems:"center"}}>
                        <Image style={{width:30,height:30 , borderRadius:100}} source={{uri:"https://i.pinimg.com/736x/21/07/58/210758e2e79b3ec9832b9547a8204380.jpg"}}></Image>
                        <Text style={{marginLeft:10 , fontWeight:700}}>{data.post[postNumber].userName}</Text>
                        <Image style={{width:15 , height:15 , marginLeft:5}} source={require('../../../assets/icons/verificado-icon.png')} ></Image>
                    </View>
                    <TouchableOpacity style={{backgroundColor:"#DBDBDB" , paddingHorizontal:10 , paddingVertical:7 , borderRadius:7}}>
                        <Text style={{fontWeight:700}}>
                            Follow
                        </Text>
                    </TouchableOpacity>
                    {/* agregar el lugar */}
                </View>
                <ScrollView horizontal style={{marginBottom:10}}>
                    {Object.values(data.post[postNumber].images[0]).map((postImg) => (
                        <View>
                            {data.post[postNumber].labelled.length > 0 ?
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
                        <TouchableOpacity onPress={()=>likedPost(data.post[postNumber].id)}>
                            {data.post[postNumber].like ?
                                <Image style={styles.icons} source={require('../../../assets/icons/like-actived-icon.png')}></Image>
                                :
                                <Image style={styles.icons} source={require('../../../assets/icons/like-icon.png')}></Image>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> commentsList(data.post[postNumber].id)}>
                            <Image style={{width:25,height:25 , marginLeft:20}} source={require('../../../assets/icons/comentary-icon.png')}></Image>
                        </TouchableOpacity>
                        <Image style={{width:25,height:25 , marginLeft:20}} source={require('../../../assets/icons/compartir-icon.png')}></Image>
                    </View>
                    <View style={{alignItems:"center" , width:"33%" , flexDirection:"row" , justifyContent:"center"}}>
                        {/* {post.images.map((img) => (
                            console.log(img)
                        ))} */}
                        {Object.values(data.post[postNumber].images[0]).length > 1 ?
                        Object.values(data.post[postNumber].images[0]).map(() => (
                            // <Image style={{width:9 , height:9}} source={require("../../../assets/icons/point-actived-icon.png")}></Image>
                            <Image style={{width:14 , height:14}} source={require("../../../assets/icons/point-icon.png")}></Image>
                        ))
                        :
                        null
                    }
                        {/* <Image style={{width:9 , height:9}} source={require("../../../assets/icons/point-actived-icon.png")}></Image> */}
                    </View>
                    <View style={{width:"33%", alignItems:"flex-end"}}>
                        <TouchableOpacity onPress={()=>savePost(data.post[postNumber].id) }>
                            {data.post[postNumber].saved?
                                <Image style={styles.icons} source={require('../../../assets/icons/save-actived-icon.png')}></Image>
                                :
                                <Image style={styles.icons} source={require('../../../assets/icons/save-icon.png')}></Image>
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginHorizontal:10}}>
                    <Text style={{fontWeight:700}}>{data.post[postNumber].likes} Me gusta</Text>{/*modificar para que se vea asi: (1,123,758)*/}
                    <Text numberOfLines={2} ellipsizeMode='tail'>
                        <Text style={{fontWeight:700}}>{data.post[postNumber].userName} </Text>
                        <Text>{data.post[postNumber].content}</Text>
                    </Text>
                    {/* Si el largo de coomments es > 1 hace esto:*/}
                    <TouchableOpacity onPress={()=> navigation.navigate('Comments', {postId: data.post[postNumber].id})}>
                        {data.post[postNumber].comments.length > 1 ? 
                            <Text style={{color:"gray"}}>Ver los {data.post[postNumber].comments.length} comentarios </Text>
                            :
                            null
                        }
                    </TouchableOpacity>
                    {data.post[postNumber].comments.length > 1 ?
                        data.post[postNumber].comments.slice(0,2).map((comment) => (
                            <Text>
                                <Text style={{fontWeight:700}}>{comment.userName + " "}</Text>
                                <Text>{comment.comment}</Text>
                            </Text>
                        )) 
                        :
                        null
                    }
                    <Text style={{color:"gray"}}>{data.post[postNumber].createdAt}</Text>
                </View>
            </View>
            {/* Fin Post */}


            {/* <Labelled/> */}

        </ScrollView>
    </View>
    );
}