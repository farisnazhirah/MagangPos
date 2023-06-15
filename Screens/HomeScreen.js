import * as React from 'react';
import {View, Text} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => alert('This is Profile Screen.')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Welcome, User
      </Text>
      <Text>Go to Profile to see your Email!</Text>
    </View>
  );
};
export default HomeScreen;
