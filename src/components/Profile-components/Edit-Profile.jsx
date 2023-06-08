import { Text, View , Image , ScrollView , TextInput} from 'react-native';
import styles from '../Styles';
import Constants from 'expo-constants'
import Stories from './Stories'
import Post from './Post'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function EditProfile() {
    return (
        <View style={{marginTop: Constants.statusBarHeight}}>
            <View style={{alignItems:"center" , marginTop:10}}>
                <Image style={{width:65,height:65 , borderRadius:100 , marginBottom:5}} source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/43818140_2116018831763532_3803033961098117120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8rrGORFcBx0AX-ALIFn&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAhjcSMhgczSQcHN9pYlF9MOn_7sAmGky0vH_K_Wo0iSg&oe=647CC632&_nc_sid=a1ad6c'}}></Image>
                <TouchableOpacity>
                    <Text style={{color:"blue"}}>Edit picture or avatar</Text>
                </TouchableOpacity>
            </View>
            <View style={{padding:10}}>
                <Text>Name</Text>
                <TextInput placeholder='Leo Messi'></TextInput>
                <View style={{ backgroundColor: 'black', height: 1 , marginBottom:7 }} />

                <Text>UserName</Text>
                <TextInput placeholder='LeoMessi'></TextInput>
                <View style={{ backgroundColor: 'black', height: 1 , marginBottom:7 }} />

                <Text>Bio</Text>
                <TextInput placeholder='Add Bio'></TextInput>
                <View style={{ backgroundColor: 'black', height: 1 , marginBottom:7 }} />

                <Text>Link</Text>
                <TextInput placeholder='Add link'></TextInput>
                <View style={{ backgroundColor: 'black', height: 1 , marginBottom:7 }} />
            </View>
        </View>
    );
}
