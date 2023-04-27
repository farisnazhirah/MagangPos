import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  UIManager,
} from 'react-native';
import {AccordionList} from 'react-native-accordion-list-view';

const DATA = [
  {
    title: 'Lorem Ipsum?',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Lorem Ipsum?',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Lorem Ipsum?',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    height: '100%',
  },
});

function HelpScreen() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);
  return (
    <>
      <SafeAreaView>
        <Text style={{
            marginTop: 10,
            marginHorizontal: 22, 
            fontSize: 16, 
            fontWeight:'bold'}}
            >Pertanyaan Umum</Text>
        <View style={styles.container}>    
          <AccordionList
            data={DATA}
            customTitle={item => <Text style={{marginHorizontal:10, fontSize: 16, fontWeight:'bold'}}>{item.title}</Text>}
            customBody={item => <Text>{item.body}</Text>}
            animationDuration={400}
            expandMultiple={true}
          />
        </View>
      </SafeAreaView>
      
    </>
  );
}

export default HelpScreen;
