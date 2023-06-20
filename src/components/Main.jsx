import { Image , Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import StackHome from './home-components/Stack-Home'
import StackSearch from './Search-components/Stack-Search'
import Plus from './Plus-components/Plus'
import Reels from './Reels-components/Reels'
import StackProfile from './Profile-components/Stack-Profile'
import styles from './Styles'
import { useDatas } from '../hooks/datasContext';
import Loading from './Loading';

export default function Main() {
    const { dataLoaded } = useDatas();
    const Tab = createBottomTabNavigator();

    return (

        dataLoaded ? 
            <NavigationContainer>
                <Tab.Navigator screenOptions={{HeaderShown: false}}>
                    <Tab.Screen
                    name="StackHome"
                    component={StackHome}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({focused}) => (
                        focused ? 
                        <Image
                            source={require('../../assets/icons/home-icon-actived.png')}
                            style={styles.icons} 
                        />
                        :
                        <Image
                            source={require('../../assets/icons/home-icon.png')}
                            style={styles.icons} 
                        />
                        )
                    }}
                    >
                    </Tab.Screen>

                    <Tab.Screen
                    name="StackSearch"
                    component={StackSearch}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({focused}) => (
                        <Image
                            source={require('../../assets/icons/search-icon.png')}
                            style={{width: focused ? 28: 25 , height: focused ? 28 : 25 }} 
                        >
                        </Image>
                        )
                    }}
                    >
                    </Tab.Screen>

                    <Tab.Screen
                    name="Plus"
                    component={Plus}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({focused}) => (
                        focused ? 
                        <Image
                            source={require('../../assets/icons/plus-icon.png')}
                            style={{width:27 , height:27}} 
                        />
                        :
                        <Image
                            source={require('../../assets/icons/plus-icon-actived.png')}
                            style={styles.icons} 
                        />
                        )
                    }}
                    >
                    </Tab.Screen>

                    <Tab.Screen
                    name="Reels"
                    component={Reels}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({focused}) => (
                        focused ?
                        <Image
                            source={require('../../assets/icons/reel-icon.png')}
                            style={styles.icons} 
                        />
                            :
                        <Image
                            source={require('../../assets/icons/reel-icon-actived.png')}
                            style={styles.icons} 
                        />
                        )
                    }}
                    >
                    </Tab.Screen>


                    <Tab.Screen
                    name="Profile"
                    component={StackProfile}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({focused}) => (
                        <Image
                        source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/43818140_2116018831763532_3803033961098117120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8rrGORFcBx0AX-ALIFn&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAhjcSMhgczSQcHN9pYlF9MOn_7sAmGky0vH_K_Wo0iSg&oe=647CC632&_nc_sid=a1ad6c'}}
                        style={{width:30 , height:30 , borderRadius:100 , borderWidth:2 , borderColor: focused ? "black" : null}}
                        >
                        </Image>
                        )
                    }}
                    >
                    </Tab.Screen>

                </Tab.Navigator>
            </NavigationContainer>

            :

            <Loading/>
    );
}