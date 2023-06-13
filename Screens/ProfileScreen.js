import * as React from 'react';
import { View, Text } from 'react-native';

function ProfileScreen() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          onPress={() => alert('This is Profile Screen.')}
          style={{fontSize: 26, fontWeight: 'bold'}}>
          Profile Screen
        </Text>
      </View>
    );
}

export default ProfileScreen