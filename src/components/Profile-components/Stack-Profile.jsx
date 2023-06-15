import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Profile';
import Followers from './Followers';
import Following from './Following';
import EditProfile from './Edit-Profile'

const Stack = createStackNavigator();

export default function StackProfile() {
    return (
            <Stack.Navigator>
                    <Stack.Screen 
                    name="Profile" 
                    component={Profile} 
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
                    name="Followers" 
                    component={Followers} 
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
                    name="Following" 
                    component={Following} 
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

                    <Stack.Screen 
                    name="EditProfile" 
                    component={EditProfile} 
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