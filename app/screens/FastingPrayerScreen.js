import  React from 'react';
import { Text, View ,StyleSheet} from 'react-native';

const FastingPrayerScreen = ({ navigation }) => {
    return (
        <View style ={styles.container}>
            <Text>Fasting Prayer Screen</Text>
        </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
   });

  export default FastingPrayerScreen;


