import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import CustomInput from '../Components/CustomInputs/CustomInput';
import CustomButton from '../Components/CustomButtons/CustomButton';
import {Text} from 'react-native-elements';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {FIREBASE_auth} from '../Config/FirebaseConfig';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_auth;

  const handleRegister = async () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      const user = userCredential.user
      console.log('Registered with: ', user.email)
      alert('register berhasil! silahkan ke halaman login');
    })
    .catch((error)=>{
      console.log(error)
      alert('register gagal!: ' + error.message)
    })
  };

  const onPolicyPressed = () => {
    console.warn('Syarat dan Ketentuan');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Buat Akun</Text>
      <CustomInput
        placeholder="E-mail"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />

      <CustomButton text={'Register'} onPress={handleRegister} />
      <Text style={styles.text}>
        Dengan mendaftar, Anda mengonfirmasi bahwa Anda setuju dengan{' '}
        <Text style={styles.link} onPress={onPolicyPressed}>
          Syarat & Ketentuan
        </Text>{' '}
        POSPAY MOBILE
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
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FF6700',
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;
