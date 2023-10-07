import { Text, View } from 'react-native';
import Constants from 'expo-constants'

export default function Posts() {
    return (
        <View style={{marginTop: Constants.statusBarHeight , flex:1}}>
            <Text>Posts</Text>
        </View>
    );
}
