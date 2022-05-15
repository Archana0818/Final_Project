import  React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SermonScreen from '../screens/SermonScreen';
import SongScreen from '../screens/SongScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import SermoneNavigator from './SermonNavigator';


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator 
            screenOptions = {{
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor : `#add8e6`,
                tabBarActiveBackgroundColor: '#b22222',
                tabBarInactiveBackgroundColor : '#b22222',
                
            }}        
        >

            <Tab.Screen name='Home' component={HomeScreen} options = {{
                headerTitle : 'El Bethel International Ministries ', headerStyle: {backgroundColor: '#b22222'},headerTintColor: '#fff',headerTitleAlign:'center',

                tabBarIcon : ({color, size}) => {
                    return <FontAwesome5 name="home" size={size} color= {color} />
                }
            }}/>

            <Tab.Screen name='Sermon' component={SermoneNavigator} options = {{
                headerTitle : 'El Bethel International Ministries ', headerStyle: {backgroundColor: '#b22222'},headerTintColor: '#fff',headerTitleAlign:'center',
                tabBarIcon : ({color, size}) => {
                    return <FontAwesome5 name="bible" size={size} color= {color} />
                }
            }}/>

            <Tab.Screen name='Songs' component={SongScreen} options = {{
                headerTitle : 'El Bethel International Ministries ', headerStyle: {backgroundColor: '#b22222'},headerTintColor: '#fff',headerTitleAlign:'center',
                tabBarIcon : ({color, size}) => {
                    return <FontAwesome5 name="compact-disc" size={size} color= {color} />
                }
            }}/>
        </Tab.Navigator>
    );   

  }


  export default AppNavigator;
