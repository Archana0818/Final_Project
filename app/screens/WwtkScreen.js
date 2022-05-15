import  React from 'react';
import { Text, View ,StyleSheet} from 'react-native';

const WwtkScreen = ({ navigation }) => {
    return (
        <View style ={styles.container}>
            <Text>Walking With the King Screen</Text>
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

  export default WwtkScreen;


