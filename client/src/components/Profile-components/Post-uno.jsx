import { Image , TouchableOpacity } from 'react-native';

export default function PostUno(post) {

    return (
        <>
            {post.images.map((img, index) =>
                <TouchableOpacity key={index} style={{width:"33%" , margin:1}}>
                    <Image style={{height:100}} source={{uri:img.image1}}/>
                </TouchableOpacity>
            )}
        </>
    );
}