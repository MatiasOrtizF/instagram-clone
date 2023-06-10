import { Image , ScrollView , View , TouchableOpacity} from 'react-native';
import styles from '../Styles';

export default function PostDetails(post) {
    labelledList = (id) => {
        console.log("lista de etiqueados en el post:" + id)
    }
    return (
        // <View>
        //     <Text>{post.id}</Text>
        // </View>
        <ScrollView horizontal style={{marginBottom:10}}>
        {Object.values(post.images[0]).map((postImg) => (
            <View>
                {post.labelled.length > 0 ?
                    <TouchableOpacity style={{position:"absolute" , zIndex:3 , bottom:15 , left:15}} onPress={()=> labelledList(post.id)}>
                        <Image style={{width:22 , height: 22}} source={require('../../../assets/icons/user-icon.png')}></Image>
                    </TouchableOpacity>
                    :
                    null
                }
                <Image style={{width:400 , height:400}} source={{uri:postImg}}></Image>
            </View>
        ))}
        </ScrollView>
    );
}
