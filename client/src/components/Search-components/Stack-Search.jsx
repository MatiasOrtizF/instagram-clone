import { createStackNavigator } from '@react-navigation/stack';
import Search from './Search';
import SearchDetail from './Search-Detail';
import { NavigationContainer } from '@react-navigation/native';
import Labelled from '../home-components/Labelled';
import CommentsSearch from './Commets-Search'

const Stack = createStackNavigator();

export default function MyStack() {
    return (
            <Stack.Navigator>
                    <Stack.Screen 
                        name="Search" 
                        component={Search} 
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Group screenOptions={{ presentation: 'modal' }}>
                        <Stack.Screen 
                            name="SearchDetail" 
                            component={SearchDetail} 
                            options={{
                                title:"Explore"
                            }}
                        />
                    </Stack.Group>
                    <Stack.Group screenOptions={{ presentation: 'modal' }}>
                        <Stack.Screen name="Labelled" component={Labelled} />
                        <Stack.Screen name="Comments" component={CommentsSearch} />
                    </Stack.Group>
            </Stack.Navigator>
    )
}