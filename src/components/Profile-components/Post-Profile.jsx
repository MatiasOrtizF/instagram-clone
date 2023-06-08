import { Image , FlatList ,ScrollView } from 'react-native';
import data from '../../data/data.json'
import PostUno from './Post-uno'

export default function PostProfile() {

    return (
                    <FlatList
                        data={data.userInformation.post}
                        keyExtractor={item=>item.id}
                        renderItem={({item: post}) => (
                            <PostUno {...post}/>
                        )}
                        numColumns={3}
                        scrollEnabled={false}
                    />  
    );
}