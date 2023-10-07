import { Image , FlatList , TouchableOpacity , SafeAreaView } from 'react-native';
import data from '../../data/data.json'
import PostUno from './Post-uno'
import { createStackNavigator } from '@react-navigation/stack';
import PostDetails from '../Post-Detail';
import { useDatas } from '../../hooks/datasContext';

const Stack = createStackNavigator();

export default function PostProfile({navigation}) {

    const { post } = useDatas();

    return (
                    <FlatList
                        data={post}
                        keyExtractor={item=>item.id}
                        renderItem={({item: post}) => (
                                <TouchableOpacity style={{width:"33%" , margin:1}} onPress={()=> navigation.navigate('PostDetail')} >
                                    <Image style={{height:100}} source={{uri:post.image}}/>
                                </TouchableOpacity>
                        )}
                        numColumns={3}
                        scrollEnabled={false}
                    />  
    );
}