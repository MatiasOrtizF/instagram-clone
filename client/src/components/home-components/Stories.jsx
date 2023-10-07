import { Text, View , ScrollView , Image , TouchableOpacity } from 'react-native';
import { useDatas } from '../../hooks/datasContext';

export default function Stories() {
    const { userData } = useDatas();
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginVertical:10}}>
            <TouchableOpacity style={{alignItems:"center" , marginLeft:10}}>
                <Image style={{position:"absolute" , top:58 , left:58 , zIndex:3 , width:20 , height: 20}} source={require('../../../assets/icons/add-history-icon.png')}></Image>
                <Image style={{width:80,height:80 , borderRadius:100}} source={{uri:userData.userInformation.imageProfile}}></Image>
                <Text style={{fontSize:12, alignItems:"flex-end"}}>Tu historia</Text>
            </TouchableOpacity>                    
            {userData.following.map((user, index) =>
                (user.stories).length > 0 ? 
                <TouchableOpacity key={index} style={{alignItems:"center" , marginLeft:10 , width:80}}>
                    <Image style={{width:80,height:80 , borderRadius:100 , borderWidth: 3 , borderColor:"orange"}} source={{uri:user.imageProfile}}></Image>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={{fontSize:12}}>{user.userName}</Text>
                </TouchableOpacity>
                :
                null
            )}
        </ScrollView>
);
}