import  React from 'react';
import { Text, View ,StyleSheet} from 'react-native';

const SundayServiceScreen = ({ navigation }) => {
    return (
        <View style ={styles.container}>
            <Text>Sunday Service Screen</Text>
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

  export default SundayServiceScreen;


