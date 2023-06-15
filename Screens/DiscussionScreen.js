import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DiscussionScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        onPress={() => alert('This is Profile Screen.')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Belum ada diskusi, nih
      </Text>
      
    </View>
  );
}

export default DiscussionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#D44120',
    width: '50%',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});