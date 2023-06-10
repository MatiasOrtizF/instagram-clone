import { Text, View , Image , ScrollView , TextInput , TouchableOpacity} from 'react-native';
import styles from '../Styles';
import Constants from 'expo-constants'
import Stories from './Stories'
import Post from './Post'
import Labelled from './Labelled';

export default function Home({navigation}) {
    return (
        <View style={{marginTop: Constants.statusBarHeight , flex:1}}>
            <View style={{justifyContent:"space-between", flexDirection:"row" , padding:10}}>
                <Text style={{fontSize:20}}>INSTAGRAM</Text>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Notifications')}>
                        <Image style={styles.icons} source={require('../../../assets/icons/notifications-icon.png')}></Image>
                    </TouchableOpacity>
                        <TouchableOpacity onPress={()=> navigation.navigate('Messages')}>
                        <Image style={{marginLeft:20 , width:25,height:25}} source={require('../../../assets/icons/messenger-icon.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>

                <Stories/>

                <View style={{ backgroundColor: 'gray', height: 0.5 }} />

                <Post/>

                <Labelled/>

            </ScrollView>
        </View>
    );
}
