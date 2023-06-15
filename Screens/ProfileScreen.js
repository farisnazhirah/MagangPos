import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {FIREBASE_auth} from '../Config/FirebaseConfig';
import useAuthStore from '../State/AuthStore';
import {useNavigation} from '@react-navigation/native';

function ProfileScreen() {
  const navigation = useNavigation();
  const {logout} = useAuthStore();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

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
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowLogoutDialog(true)}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
      <Modal visible={showLogoutDialog} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Apakah kamu yakin ingin Logout?
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.modalButton]}
                onPress={handleLogout}>
                <Text style={styles.buttonText}>Log Out</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.modalButton, styles.cancelButton]}
                onPress={() => setShowLogoutDialog(false)}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  cancelButton: {
    backgroundColor: 'gray',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  modalButton: {
    width: '40%',
    marginTop: 10,
  },
});
