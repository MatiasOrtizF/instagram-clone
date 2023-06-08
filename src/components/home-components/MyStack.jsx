import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'
import Notifications from './Notifications'
import Messages from './Messages'
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
                //     headerShown: false,
                //     tabBarShowLabel: false,
                //     tabBarIcon: ({focused}) => (
                //     <Image
                //         source={require('../../../assets/icons/messenger-icon.png')}
                //         style={styles.icons} 
                //     >
                //     </Image>
                //     )
                }}
                />
            </Stack.Navigator>
    )
}