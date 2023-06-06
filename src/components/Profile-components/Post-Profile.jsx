import { Image } from 'react-native';

export default function PostProfile(post) {

    return (
        <>
                {post.images.map((img) =>
                    <Image style={{width:"33%" , margin:1 , height:100}} source={{uri:img.image1}}></Image>
                )}
        </>
    );
}