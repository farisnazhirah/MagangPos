import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import CustomInput from '../Components/CustomInputs/CustomInput';
import CustomButton from '../Components/CustomButtons/CustomButton';
import {Text} from 'react-native-elements';

const RegisterScreen = () => {
  const {username, setUsername} = useState('');
  const {email, setEmail} = useState('');
  const {password, setPassword} = useState('');
  const {repeatPassword, setPasswordRepeat} = useState('');

  const onRegisterPressed = () => {
    console.warn('register');
  };
  const onForgotPasswordPressed = () => {
    console.warn('Lupa Password?');
  };
  const onSignUpPressed = () => {
    console.warn('Buat Akun');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Buat Akun</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput placeholder="E-mail" value={email} setValue={setEmail} />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      
      <CustomButton text={'Register'} onPress={onRegisterPressed} />
      <Text style={styles.text}>
        Dengan mendaftar, Anda mengonfirmasi bahwa Anda setuju dengan{' '}
        <Text style={styles.link}>Syarat & Ketentuan</Text> POSPAY MOBILE
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
  text:{
    color:'gray',
    marginVertical: 10,
  },
  link:{
    color:'#FF6700',
    textDecorationLine:'underline'
  }
});

export default RegisterScreen;
