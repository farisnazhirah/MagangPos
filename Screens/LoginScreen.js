import React, {useState} from 'react';
import {View, Image, StyleSheet, useWindowDimensions, Text} from 'react-native';
import CustomInput from '../Components/CustomInputs/CustomInput';
import CustomButton from '../Components/CustomButtons/CustomButton';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {FIREBASE_auth} from '../Config/FirebaseConfig';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const auth = FIREBASE_auth;

  const handleLogin = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('Logged In with: ', user.email);
      })
      .catch((error) => {
        console.log(error);
        alert('login gagal!: ' + error.message);
      });
  };

  const onForgotPasswordPressed = () => {
    console.warn('Lupa Password?');
  };

  return (
    <View style={styles.root}>
      <Image
        source={require('../Assets/Images/pospay_logo.png')}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />

      <CustomButton text={'Login'} onPress={handleLogin} />

      <Text style={styles.text}>
        Belum punya akun?{' '}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('RegisterScreen')}>
          Klik
        </Text>{' '}
        disini
      </Text>
      <Text style={styles.text}>
        <Text style={styles.link1} onPress={onForgotPasswordPressed}>
          Lupa Password?
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    height: 100,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FF6700',
    fontWeight: 'bold',
  },
  link1: {
    color: '#D44120',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
