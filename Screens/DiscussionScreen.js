import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {Icon} from 'react-native-elements';

const DiscussionScreen = ({navigation}) => {
  const [chatUser] = useState({
    name: 'POSPAY',
    profile_image: 'https://randomuser.me/api/portraits/men/0.jpg',
    sub_name: 'Helpdesk',
  });

  const [currentUser] = useState({
    name: 'John Doe',
  });

  const [messages, setMessages] = useState([
    {
      sender: 'John Doe', 
      message: 'Halo!', 
      time: '6:01 PM'},
    {
      sender: 'Robert Henry',
      message: 'Halo, Faris Nazhirah, Aku siap membantu kamu disini, ada yang bisa dibantu?',
      time: '6:02 PM',
    },
    {
      sender: 'John Doe', 
      message: 'Saya ingin menanyakan kendala Top Up. Bagaimana ya caranya?', 
      time: '6:02 PM'
    },
    
  ]);

  const [inputMessage, setInputMessage] = useState('');

  const getTime = date => {
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    return `${hours}:${minutes} ${ampm}`;
  };

  const sendMessage = () => {
    if (inputMessage === '') {
      return setInputMessage('');
    }
    const t = getTime(new Date());
    setMessages([
      ...messages,
      {
        sender: currentUser.name,
        message: inputMessage,
        time: t,
      },
    ]);
    setInputMessage('');
  };

  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: () => (
        <View style={styles.headerLeft}>
          <TouchableOpacity
            style={{paddingRight: 10}}
            onPress={() => navigation.goBack()}>
            <Icon
              name="angle-left"
              type="font-awesome"
              size={30}
              color="#fff"
            />
          </TouchableOpacity>
          <Image
            style={styles.userProfileImage}
            source={{uri: chatUser.profile_image}}
          />
          <View style={{paddingLeft: 10, justifyContent: 'center'}}>
            <Text style={{color: '#fff', fontWeight: '700', fontSize: 18}}>
              {chatUser.name}
            </Text>
            <Text style={{color: '#fff', fontWeight: '300'}}>
              {chatUser.sub_name}
            </Text>
          </View>
        </View>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{backgroundColor: '#ffffff'}}
        inverted={true}
        data={messages.slice().reverse()}
        renderItem={({item}) => (
          <TouchableWithoutFeedback>
            <View style={{marginTop: 6}}>
              <View
                style={[
                  styles.messageBubble,
                  {
                    alignSelf:
                      item.sender === currentUser.name
                        ? 'flex-end'
                        : 'flex-start',
                    borderBottomLeftRadius:
                      item.sender === currentUser.name ? 8 : 0,
                    borderBottomRightRadius:
                      item.sender === currentUser.name ? 0 : 8,
                  },
                ]}>
                <Text style={styles.messageText}>{item.message}</Text>
                <Text style={styles.messageTime}>{item.time}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      />

      <View style={{paddingVertical: 10}}>
        <View style={styles.messageInputView}>
          <TextInput
            defaultValue={inputMessage}
            style={styles.messageInput}
            placeholder="Message"
            onChangeText={text => setInputMessage(text)}
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity
            style={styles.messageSendView}
            onPress={sendMessage}>
            <Icon name="send" type="material" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DiscussionScreen;

const styles = StyleSheet.create({
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  userProfileImage: {
    height: '100%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  container: {
    flex: 1,
    backgroundColor: '#f2f2ff',
  },
  messageBubble: {
    maxWidth: Dimensions.get('screen').width * 0.8,
    backgroundColor: '#d9d9d9',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
  },
  messageText: {
    color: '#171717',
    fontSize: 16,
  },
  messageTime: {
    color: '#B9B9B9',
    fontSize: 14,
    alignSelf: 'flex-end',
  },
  messageInputView: {
    flexDirection: 'row',
    marginHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  messageInput: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});
