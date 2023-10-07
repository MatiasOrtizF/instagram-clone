import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home/Home'
import Notifications from '../../screens/Home/Notifications'
import Messages from '../../screens/Home/Messages'
import Chat from './Chat';
import Comments from './Comments'
import Labelled from './Labelled';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
            <Stack.Navigator>
                    <Stack.Screen 
                        name="Home" 
                        component={Home} 
                        options={{
                            headerShown: false,
                        //     tabBarShowLabel: false,
                        //     tabBarIcon: ({focused}) => (
                        //     <Image
                        //         source={require('../../../assets/icons/notifications-icon.png')}
                        //         style={styles.icons} 
                        //     >
                        //     </Image>
                        //     )
                        }}
                    />
                    <Stack.Group screenOptions={{ presentation: 'modal' }}>
                        <Stack.Screen name="Labelled" component={Labelled} />
                        <Stack.Screen name="Comments" component={Comments} />
                    </Stack.Group>

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