import { Text, View , Image , ScrollView} from 'react-native';
import styles from '../../components/Styles';
import Constants from 'expo-constants'
import Stories from '../../components/home-components/Stories'
import Post from '../../components/home-components/Post'

export default function Notifications() {
    return (
        <View style={{marginTop: Constants.statusBarHeight , flex:1 , paddingHorizontal:15}}>
            <Text style={{fontWeight:"700" , fontSize:17}}>New</Text>
            <View style={{justifyContent:"flex-end" , paddingVertical:5 }}>
                    <View style={{flexDirection:"row" , alignItems:"center" , width:"100%" , marginVertical:10}}>
                        <View style={{flexDirection:"row" , alignItems:"center" , width:"85%"}}>
                            <View>
                                <Image
                                    source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/321091715_1846570395678253_2397686410781786037_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=raZCDrKTwBMAX_KSp19&edm=ALlQn9MBAAAA&ccb=7-5&oh=00_AfAlYyzPKPzYlxL69LkXMLL7zS3MSob3YjZk5MvxmRJrAQ&oe=649232CB&_nc_sid=463a08'}}
                                    style={{width:50 , height:50 , borderRadius:100}}
                                />
                            </View>
                            <View style={{width:"80%" , marginLeft:"3%"}}>
                                    <Text>
                                        <Text numberOfLines={1} ellipsizeMode='tail' style={{fontWeight:"700"}}>rodridepaul</Text>
                                        <Image style={{width:15 , height:15}} source={require('../../../assets/icons/verificado-icon.png')} ></Image>                                  
                                        <Text>liked your post</Text>
                                    </Text>
                            </View>
                        </View>
                        <View style={{width:"15%"}}>
                            <Image style={{width:55 , height:55}} source={{uri:"https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-15/353459848_584711250314504_7725045540774999221_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=DHYf5J1yAw8AX_OTFNB&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzEyNDQ4MjY2ODg1OTE0ODk0Nw%3D%3D.2-ccb7-5&oh=00_AfD2GOpS0mzbjnwbq5OAFhJznBKqvu6TVK3ZWI9OdsKpqw&oe=64924199&_nc_sid=640168"}}></Image>
                        </View>
                    </View>
                    <View style={{flexDirection:"row" , alignItems:"center" , width:"100%" , marginVertical:10}}>
                        <View style={{flexDirection:"row" , alignItems:"flex-start" , width:"85%"}}>
                            <View>
                                <Image
                                    source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/321091715_1846570395678253_2397686410781786037_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=raZCDrKTwBMAX_KSp19&edm=ALlQn9MBAAAA&ccb=7-5&oh=00_AfAlYyzPKPzYlxL69LkXMLL7zS3MSob3YjZk5MvxmRJrAQ&oe=649232CB&_nc_sid=463a08'}}
                                    style={{width:50 , height:50 , borderRadius:100}}
                                />
                            </View>
                            <View style={{width:"80%" , marginLeft:"3%"}}>
                                    <Text>
                                        <Text numberOfLines={1} ellipsizeMode='tail' style={{fontWeight:"700"}}>rodridepaul</Text>
                                        <Image style={{width:15 , height:15}} source={require('../../../assets/icons/verificado-icon.png')} ></Image>                                  
                                        <Text>liked your comment:</Text>
                                        <Text>Vamos rodri!!! con todo carajo!!!asffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</Text>
                                    </Text>
                            </View>
                        </View>
                        <View style={{width:"15%"}}>
                            <Image style={{width:55 , height:55}} source={{uri:"https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-15/353459848_584711250314504_7725045540774999221_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=DHYf5J1yAw8AX_OTFNB&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzEyNDQ4MjY2ODg1OTE0ODk0Nw%3D%3D.2-ccb7-5&oh=00_AfD2GOpS0mzbjnwbq5OAFhJznBKqvu6TVK3ZWI9OdsKpqw&oe=64924199&_nc_sid=640168"}}></Image>
                        </View>
                    </View>
            </View>
            <Text style={{fontWeight:"600" , fontSize:17}}>This Month</Text>
        </View>
    );
}
