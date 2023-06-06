import { Image , ScrollView } from 'react-native';

export default function Post(post) {
    return (
        // <View>
        //     <Text>{post.id}</Text>
        // </View>
        <ScrollView horizontal style={{marginBottom:10}}>
        {Object.values(post.images[0]).map((post) => (
                <Image style={{width:400 , height:400}} source={{uri:post}}></Image>
        ))}
        </ScrollView>
    );
}
