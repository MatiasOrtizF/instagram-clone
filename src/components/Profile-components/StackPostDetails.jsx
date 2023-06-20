import { createStackNavigator } from '@react-navigation/stack';
import PostProfile from './Post-Profile';
import Etiqueta from './Etiqueta'
import { NavigationContainer } from '@react-navigation/native';
import PostDetail from './Post-Detail';


const Stack = createStackNavigator();

export default function StackPostDetails() {
    return (
            <Stack.Navigator>
                    <Stack.Screen 
                        name="PostProfile" 
                        component={PostProfile} 
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
                        <Stack.Screen name="PostDetail" component={PostDetail} />
                        <Stack.Screen name="Etiqueta" component={Etiqueta} />
                    </Stack.Group>

            </Stack.Navigator>
    )
}