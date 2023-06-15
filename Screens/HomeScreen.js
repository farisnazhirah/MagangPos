import * as React from 'react';
import {View, Text} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => alert('This is Profile Screen.')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Selamat Datang
      </Text>
      <Text>Pergi ke Profile untuk melihat Email-mu!</Text>
    </View>
  );
};
export default HomeScreen;
