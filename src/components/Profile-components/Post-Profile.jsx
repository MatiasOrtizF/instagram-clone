import { Image , FlatList , TouchableOpacity } from 'react-native';
import data from '../../data/data.json'
import PostUno from './Post-uno'
import { createStackNavigator } from '@react-navigation/stack';
import PostDetails from './Post-Detail';

const Stack = createStackNavigator();

export default function PostProfile({navigation}) {

    return (
                    <FlatList
                        data={data.userInformation.post}
                        keyExtractor={item=>item.id}
                        renderItem={({item: post}) => (
                            post.images.map((img) =>
                                <TouchableOpacity style={{width:"33%" , margin:1}} onPress={()=> navigation.navigate('PostDetail')} >
                                    <Image style={{height:100}} source={{uri:img.image1}}/>
                                </TouchableOpacity>
                            )
                        )}
                        numColumns={3}
                        scrollEnabled={false}
                    />  

    );
}