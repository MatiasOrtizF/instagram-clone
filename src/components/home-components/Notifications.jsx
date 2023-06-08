import { Text, View , Image , ScrollView} from 'react-native';
import styles from '../Styles';
import Constants from 'expo-constants'
import Stories from './Stories'
import Post from './Post'

export default function Notifications() {
    return (
        <View style={{marginTop: Constants.statusBarHeight , flex:1}}>
            <Text>Notifications</Text>
        </View>
    );
}
