import { createStackNavigator } from '@react-navigation/stack';
import Search from './Search';
import SearchDetail from './Search-Detail';
import { NavigationContainer } from '@react-navigation/native';

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
            </Stack.Navigator>
    )
}