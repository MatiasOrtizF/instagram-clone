import { Text, View , Image , TouchableOpacity, ScrollView, FlatList , Linking } from 'react-native';
import Constants from 'expo-constants'
import data from '../../data/data.json'
import PostProfile from './Post-Profile';
import Posts from './Posts'
import Etiqueta from './Etiqueta'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default function Profile() {
    openURL = (url) => {
        Linking.openURL(url)
    }
    const Tab = createMaterialTopTabNavigator();
    
    return (
        <Tab.Navigator>
                        <Tab.Screen
                        name="Posts"
                        component={PostProfile}
                        options={{
                            headerShown: false,
                            tabBarShowLabel: false,
                            tabBarIcon: ({focused}) => (
                                <Image style={{width:30 , height:30}} source={require('../../../assets/icons/publicaciones-icon.png')}></Image>
                            )
                        }}
                        />
                        <Tab.Screen
                        name="Etiqueta"
                        component={Etiqueta}
                        options={{
                            headerShown: false,
                            tabBarShowLabel: false,
                            tabBarIcon: ({focused}) => (
                                <Image source={require('../../../assets/icons/etiquetado-icon.png')}></Image>
                            )
                        }}
                        />
        </Tab.Navigator>
    );
}