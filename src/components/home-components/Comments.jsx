import { Text, View , Image , ScrollView , TextInput , TouchableOpacity , Button} from 'react-native';
import styles from '../Styles';
import Constants from 'expo-constants'
import Stories from './Stories'
import Post from './Post'
import { useEffect, useState } from 'react';
import { useDatas } from '../../hooks/datasContext';

export default function Comments({route}) {

    const { hDataPost } = useDatas();

    const {postId} = route.params;
    const [listLabeles , setListLabeles] = useState({});
    const postNumber = hDataPost.findIndex(item=>item.id==postId)

    // useEffect(() => {
    //     console.log(hDataPost[postNumber].labelled)
    // })

    return (
        <View style={{paddingHorizontal:15 , paddingVertical:5}}>
            <ScrollView showsVerticalScrollIndicator={false} >

            {hDataPost[postNumber].comments.map((comment) => 
                <View>
                    <View style={{flexDirection:"row" , alignItems:"center" , width:"100%" , marginVertical:10}}>
                        <View style={{width:"90%" , flexDirection:"row"}}>
                            <View style={{width:"20%"}}>
                                <Image
                                    source={{uri:"https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-15/337907795_965721114605317_500941260975134003_n.jpg?stp=dst-jpg_e35_p240x240&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=w_4IYARRucAAX-lP-DC&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA2ODk1MzE3NjgzNzc1NzY4NA%3D%3D.2-ccb7-5&oh=00_AfA3LpLadBkgeHZyBE_C7VAZRDkFnMGm3kZOgjmWERXt8Q&oe=647D423B&_nc_sid=a1ad6c"}}
                                    style={{width:50 , height:50 , borderRadius:100}}
                                />
                            </View>
                            <View style={{width:"79%"}}>
                                <View style={{flexDirection:"row" , alignItems:"center" , width:"90%"}}>
                                    <Text numberOfLines={1} ellipsizeMode='tail' style={{fontWeight:"700"}}>{comment.userName}</Text>
                                    {comment.verified ?
                                        <Image style={{width:15 , height:15}} source={require('../../../assets/icons/verificado-icon.png')} ></Image>
                                        :
                                        null
                                    }
                                </View>
                                <Text numberOfLines={13} ellipsizeMode='tail' style={{color:"black" , marginBottom:5}}>{comment.comment}</Text>
                                <TouchableOpacity>
                                    <Text style={{color:"gray" , fontWeight:500}}>Reply</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{width:"10%" , alignSelf:"flex-start"}}>
                                {comment.like ?
                                    <TouchableOpacity>
                                        <Image style={{width:20 , height:20 , alignSelf:"center"}} source={require('../../../assets/icons/like-actived-icon.png')}></Image>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity>
                                        <Image style={{width:20 , height:20 , alignSelf:"center"}} source={require('../../../assets/icons/like-icon.png')}></Image>
                                    </TouchableOpacity>
                                }
                                <Text style={{alignSelf:"center"}}>{comment.likesNumber}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{alignItems:"center"}}>
                        <Text style={{color:"gray" , fontWeight:500}}>View 12 more replies</Text>
                    </TouchableOpacity>
                </View>
            )}
            </ScrollView>

        </View>

);
}
