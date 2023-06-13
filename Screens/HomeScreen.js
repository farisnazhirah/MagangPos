import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FIREBASE_auth} from '../Config/FirebaseConfig';
import useAuthStore from '../State/AuthStore';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {logout} = useAuthStore();
  const handleLogout = () => {
    logout();
    navigation.reset({
      index: 0,
      routes: [{name: 'LoginScreen'}],
    });
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() => alert('This is Home Screen.')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Home Screen
      </Text>
      <Text>Email: {FIREBASE_auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText} >
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '50%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
