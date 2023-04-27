import * as React from 'react';
import { View,Text} from 'react-native';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems:'center', justifyContent:'center'}}>
            <Text
                onPress={() => alert('This is Home Screen.')}
                style={{ fontSize:26, fontWeight:'bold', }}>Home Screen
            </Text>
        </View>
    )
}
export default HomeScreen;