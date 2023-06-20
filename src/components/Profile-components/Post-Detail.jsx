import { Text, View , ScrollView , TextInput , Image} from 'react-native';
import styles from '../Styles';
import Constants from 'expo-constants'
import messageData from '../../data/message-data.json'
import { useDatas } from '../../hooks/datasContext';

export default function Chat() {

    return (
        <View style={{marginTop: Constants.statusBarHeight , backgroundColor:"white" , flex:1}}>
            <Text>Post Details</Text>
        </View>
    );
}
