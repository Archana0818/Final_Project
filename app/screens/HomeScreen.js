import  React from 'react';
import { Text, View ,StyleSheet} from 'react-native';

const HomeScreen = () => {
    return (
        <View style ={styles.container}>
            <Text>Join us for Sunday Service at 1 PM EST </Text>
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

  export default HomeScreen;

