import { Text, View , Image , ScrollView , TextInput , TouchableOpacity , Button} from 'react-native';
import styles from '../Styles';
import Constants from 'expo-constants'
import Stories from './Stories'
import Post from './Post'
import { useEffect, useState } from 'react';
import DataJson from '../../data/data.json'
import { useDatas } from '../../hooks/datasContext';

export default function Comments({route}) {
    Comments.navigationOptions = {
        tabBarVisible:false
    }
    const { hDataPost , addComment , likedComment , userData} = useDatas();


    const {postId} = route.params;
    const postNumber = hDataPost.findIndex(item=>item.id==postId)

    const [input, setInput] = useState('')


    const [inputValue , setInputValue] = useState('')

    const replyComent = (userName) => {
        setInputValue(userName)
    }

    const handleInputValue = () => {
        setInputValue('')
    }

    return (
        <View style={{paddingVertical:5 , flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false} >

            {hDataPost[postNumber].comments.map((comment) => 
                <View style={{paddingHorizontal:15}}>
                    <View style={{flexDirection:"row" , alignItems:"center" , width:"100%" , marginVertical:10}}>
                        <View style={{width:"90%" , flexDirection:"row"}}>
                            <View style={{width:"20%"}}>
                                <Image
                                    source={{uri:comment.imageProfile}}
                                    style={{width:50 , height:50 , borderRadius:100}}
                                />
                            </View>
                            <View style={{width:"79%"}}>
                                <View style={{flexDirection:"row" , alignItems:"center" , width:"90%"}}>
                                    <Text numberOfLines={1} ellipsizeMode='tail' style={{fontWeight:"700"}}>{comment.userName}</Text>
                                    {comment.verified ?
                                        <Image style={{width:15 , height:15 , marginLeft:5}} source={require('../../../assets/icons/verificado-icon.png')} ></Image>
                                        :
                                        null
                                    }
                                </View>
                                <Text numberOfLines={13} ellipsizeMode='tail' style={{color:"black" , marginBottom:5}}>{comment.comment}</Text>
                                <TouchableOpacity onPress={()=>replyComent(comment.userName)}>
                                    <Text style={{color:"gray" , fontWeight:500}}>Reply</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{width:"10%" , alignSelf:"flex-start"}}>
                                <TouchableOpacity onPress={()=> likedComment(comment.id , postNumber)}>
                                    {comment.like ?
                                        <Image style={{width:20 , height:20 , alignSelf:"center"}} source={require('../../../assets/icons/like-actived-icon.png')}></Image>
                                    :
                                        <Image style={{width:20 , height:20 , alignSelf:"center"}} source={require('../../../assets/icons/like-icon.png')}></Image>
                                    }
                                </TouchableOpacity>
                            <Text style={{alignSelf:"center"}}>{comment.likesNumber}</Text>
                        </View>
                    </View>
                </View>
            )}
            </ScrollView>

            
            <View>
                {inputValue.length >0 ?
                    <View style={{paddingHorizontal:15 , flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , backgroundColor:"#DADADA" , paddingVertical:7}}>
                        <Text style={{fontWeight:500 , color:"gray"}}>Replying to @{inputValue}</Text>
                        <TouchableOpacity onPress={handleInputValue}>
                            <Image style={{width:10 , height:10}} source={require('../../../assets/icons/x-icon.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    :
                    null
                }
                <View style={{ backgroundColor: 'black', height: 0.9 , marginBottom:5}} />
                <View style={{width:"100%" , flexDirection:"row" , alignItems:"center" , justifyContent:"space-between" , marginVertical:7 , paddingHorizontal:15}}>
                    <Image
                            source={{uri:userData.userInformation.imageProfile}}
                            style={{width:40 , height:40 , borderRadius:100 , alignSelf:"flex-end"}}
                    />
                    {inputValue.length >0 ?
                        <>
                            <TextInput 
                                style={{width:"75%", paddingLeft:10}}
                                placeholder={"Add a coment for " + hDataPost[postNumber].userName + "..."}
                                // defaultValue={hDataPost[postNumber].userName} --> hacer esto cuando replico
                                multiline
                                onChangeText={setInput}
                                defaultValue={"@" + inputValue + " "}
                            />
                            <TouchableOpacity style={{width:"10%"}} onPress={()=> addComment(input, postNumber)}>
                                <Text style={{color:"#6192D7" , fontSize:17 , fontWeight:500}}>Post</Text>
                            </TouchableOpacity>
                        </>
                        :
                        <>
                        <TextInput 
                            style={{width:"75%", paddingLeft:10}}
                            placeholder={"Add a coment for " + hDataPost[postNumber].userName + "..."}
                            // defaultValue={hDataPost[postNumber].userName} --> hacer esto cuando replico
                            multiline
                            onChangeText={setInput}
                        />
                        <TouchableOpacity style={{width:"10%"}} onPress={()=> addComment(input,postNumber)}>
                            <Text style={{color:"#6192D7" , fontSize:17 , fontWeight:500}}>Post</Text>
                        </TouchableOpacity>
                        </>
                    }
                </View>
            </View>

        </View>

);
}
