import { Image , Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './home-components/Home'
import Search from './Search-components/Search'
import Plus from './Plus-components/Plus'
import Reels from './Reels-components/Reels'
import Profile from './Profile-components/Profile'
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
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({focused}) => (
                        <Image
                            source={require('../../assets/icons/home-icon.png')}
                            style={styles.icons} 
                        >
                        </Image>
                        )
                    }}
                    >
                    </Tab.Screen>

                    <Tab.Screen
                    name="Search"
                    component={Search}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({focused}) => (
                        <Image
                            source={require('../../assets/icons/search-icon.png')}
                            style={styles.icons} 
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
                        <Image
                            source={require('../../assets/icons/plus-icon.png')}
                            style={styles.icons} 
                        >
                        </Image>
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
                        <Image
                            source={require('../../assets/icons/reel-icon.png')}
                            style={styles.icons} 
                        >
                        </Image>
                        )
                    }}
                    >
                    </Tab.Screen>


                    <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({focused}) => (
                        <Image
                        source={{uri:'https://instagram.ffdo2-1.fna.fbcdn.net/v/t51.2885-19/43818140_2116018831763532_3803033961098117120_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ffdo2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8rrGORFcBx0AX-ALIFn&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfAhjcSMhgczSQcHN9pYlF9MOn_7sAmGky0vH_K_Wo0iSg&oe=647CC632&_nc_sid=a1ad6c'}}
                        style={{width:27 , height:27 , borderRadius:100}}
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