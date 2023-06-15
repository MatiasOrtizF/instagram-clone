import { Text, View , Image , TouchableOpacity, ScrollView, FlatList , Linking } from 'react-native';
import Constants from 'expo-constants'
import data from '../../data/data.json'
import PostProfile from './Post-Profile';
import Posts from './Posts'
import Etiqueta from './Etiqueta'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Nose from './Nose'

export default function Followers() {
    openURL = (url) => {
        Linking.openURL(url)
    }
    const Tab = createMaterialTopTabNavigator();
    
    return (
        <View style={{marginTop: Constants.statusBarHeight}}>
            <Text>Followers</Text>
        </View>
    );
}