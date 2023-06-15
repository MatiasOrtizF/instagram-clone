import { createStackNavigator } from '@react-navigation/stack';
import Post from './Post';
import Labelled from './Labelled';
import { useDatas } from '../../hooks/datasContext';
import Home from './Home';
import Comments from './Comments'
import Messages from './Messages';
import Chat from './Chat';

export default function RootStackScreen() {
    const { hDataPost } = useDatas();
    const RootStack = createStackNavigator();
    return (
            <RootStack.Navigator>
                <RootStack.Group>
                    <RootStack.Screen name="Messages" component={Messages}
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
                                        }} />
                </RootStack.Group>
                <RootStack.Group screenOptions={{ presentation: 'modal' }}>
                    <RootStack.Screen name="Chat" component={Chat} />
                </RootStack.Group>
            </RootStack.Navigator>
    );
}