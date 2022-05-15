import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SermonScreen from '../screens/SermonScreen';
import SundayServiceScreen from '../screens/SundayServiceScreen';
import FastingPrayerScreen from '../screens/FastingPrayerScreen';
import WwtkScreen from '../screens/WwtkScreen';
import FbsScreen from '../screens/FbsScreen';

const Stack = createStackNavigator ();

const SermoneNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{ headerTitleStyle :{color:'white',fontWeight: 'bold'}, headerStyle:{backgroundColor:'#ffa500'}, headerTitleAlign: 'center'}}
        >
          <Stack.Screen options={{headerShown: false}} name="SermonScreen" component={SermonScreen} />
          <Stack.Screen options={{ title: 'Sunday Service' }} name= "SundayServiceScreen" component={SundayServiceScreen} />
          <Stack.Screen options={{ title: 'Fasting Prayer' }} name= "FastingPrayerScreen" component={FastingPrayerScreen} />
          <Stack.Screen options={{ title: 'Walking With the King' }} name= "WwtkScreen" component={WwtkScreen} />
          <Stack.Screen options={{ title: 'Family Bible Study'}} name= "FbsScreen" component={FbsScreen} />
        </Stack.Navigator>
     
      );
}

export default SermoneNavigator;

