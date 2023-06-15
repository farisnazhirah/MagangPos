import { useNavigation } from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  UIManager,
  TouchableOpacity,
} from 'react-native';
import {AccordionList} from 'react-native-accordion-list-view';

const DATA = [
  {
    title: 'Saldo & Top-Up?',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Transaksi dan Pembayaran?',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Tentang Pospay?',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const HelpScreen = () => {
  const navigation = useNavigation()
  useEffect(() => {
    if (
      Platform.OS === 'android' &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const renderTitle = item => <Text style={styles.title}>{item.title}</Text>;
  const renderBody = item => <Text style={styles.body}>{item.body}</Text>;

  return (
    <>
      <SafeAreaView>
        <Text style={styles.heading}>Hubungi Kami</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('DiscussionStack')}>
            <Text style={styles.buttonText}>CHAT</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.heading}>Pertanyaan Umum</Text>
        <View style={styles.container}>
          <AccordionList
            data={DATA}
            customTitle={renderTitle}
            customBody={renderBody}
            animationDuration={400}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  heading: {
    marginTop: 10,
    marginHorizontal: 22,
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    paddingVertical: '2%',
    paddingHorizontal: '5%',
    height: '100%',
  },
  title: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    marginHorizontal: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#D9D9D9',
    width: '90%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
