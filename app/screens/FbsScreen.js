import  React from 'react';
import { Text, View ,StyleSheet} from 'react-native';

const FbsScreen = ({ navigation }) => {
    return (
        <View style ={styles.container}>
            <Text>Family Bible Study Screen</Text>
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

  export default FbsScreen;


