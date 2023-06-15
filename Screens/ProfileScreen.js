import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FIREBASE_auth} from '../Config/FirebaseConfig';
import useAuthStore from '../State/AuthStore';
import {useNavigation} from '@react-navigation/native';

function ProfileScreen() {
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
    <View style={styles.container}>
      <Text>Email: {FIREBASE_auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProfileScreen;

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
