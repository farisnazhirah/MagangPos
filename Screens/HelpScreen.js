import * as React from 'react';
import { View, Text } from 'react-native';

function HelpScreen() {
    return (
        <View style={{ flex: 1, alignItems:'center', justifyContent:'center'}}>
            <Text
                onPress={() => alert('This is Bantuan Screen.')}
                style={{ fontSize:26, fontWeight:'bold' }}>Bantuan Screen
            </Text> 
        </View> 
    )
}

export default HelpScreen