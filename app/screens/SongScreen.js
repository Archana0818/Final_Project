import  React from 'react';
import { Text, View ,StyleSheet} from 'react-native';

const SongScreen = () => {
    return (
        <View style ={styles.container}>
            <Text>Song Screen</Text>
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

  export default SongScreen;

