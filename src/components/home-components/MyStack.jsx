import { createStackNavigator } from '@react-navigation/stack';
import RootStackScreen from './RootStackScreen';
import Home from './Home'
import Notifications from './Notifications'
import Messages from './Messages'
import Chat from './Chat';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
            <Stack.Navigator>
                    <Stack.Screen 
                    name="RootStackScreen" 
                    component={RootStackScreen} 
                    options={{
                    headerShown: false,
                    // tabBarShowLabel: false,
                    //     tabBarIcon: ({focused}) => (
                    //     <Image
                    //         source={require('../../../assets/icons/notifications-icon.png')}
                    //         style={styles.icons} 
                    //     >
                    //     </Image>
                    //     )
                    }}
                    />

                    <Stack.Screen 
                    name="Notifications" 
                    component={Notifications} 
                    // options={{
                    //     headerShown: false,
                    //     tabBarShowLabel: false,
                    //     tabBarIcon: ({focused}) => (
                    //     <Image
                    //         source={require('../../../assets/icons/notifications-icon.png')}
                    //         style={styles.icons} 
                    //     >
                    //     </Image>
                    //     )
                    // }}
                    />

                    <Stack.Screen 
                    name="Messages" 
                    component={Messages} 
                    options={{
                        title: "LeoMessi",
                        // tabBarShowLabel: false,
                        //     tabBarIcon: ({focused}) => (
                        //     <Image
                        //         source={require('../../../assets/icons/notifications-icon.png')}
                        //         style={styles.icons} 
                        //     >
                        //     </Image>
                        //     )
                        }} />
                        <Stack.Group>
                            <Stack.Screen 
                                name="Chat" 
                                component={Chat}
                                options={{
                                    headerShown:false
                                }}
                            />
                        </Stack.Group>
            </Stack.Navigator>
    )
}