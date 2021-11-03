import React, { useState, useContext } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import FastImage from 'react-native-fast-image';
import { Button, StyledText, TappableText, TextInput } from '~/components';
import {
  AddPersonIcon,
  PasswordIcon,
  PersonIcon,
  PhoneIcon,
} from '~/components/svgs';
import axiosInstance from '../../utils/axiosInstance';

const Screen0ne = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { userName, phoneNumber } = route?.params;
  const styles = generateStyles();
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <FastImage
            source={require('#/images/chad-madden.jpg')}
            style={{
              width: '100%',
              height: '100%',
              borderBottomRightRadius: 50,
              borderBottomLeftRadius: 50,
            }}
          />
          <View style={styles.gradient} />
          <View style={styles.content}>
            <StyledText
              style={{ textAlign: 'center', marginTop: 50 }}
              size={30}
              color={'white'}>
              Anytime, Anywhere
            </StyledText>
            <StyledText
              size={12}
              color={'white'}
              style={{ textAlign: 'center', marginTop: 20 }}>
              Enjoy the captivating process of online application in a place and
              at a time of your choice, comfort and convenience
            </StyledText>
          </View>
        </View>
        <View style={styles.body}>
          <TextInput
            containerStyleOverride={styles.textInputContainer}
            placeholder={'Email'}
            value={email}
            onChangeText={setEmail}>
            <PasswordIcon fill={'black'} width={20} height={20} />
          </TextInput>
          <TextInput
            containerStyleOverride={styles.textInputContainer}
            placeholder={'Password'}
            value={password}
            onChangeText={setPassword}>
            <PasswordIcon fill={'black'} width={20} height={20} />
          </TextInput>
          <Button
            style={styles.button}
            onPress={async () => {
              const { data: res } = await axiosInstance.post('/signup', {
                username: userName,
                password,
                email,
                phonenumber: phoneNumber,
              });
              res &&
                navigation.navigate('OtpScreen', { token: res.data.token });
            }}>
            <Button.Text color={'white'}>Create account</Button.Text>
          </Button>
        </View>
      </View>
    </>
  );
};

const generateStyles = () => {
  return EStyleSheet.create({
    wrapper: {
      height: '100%',
      width: '100%',
    },
    header: {
      height: '40%',
      borderBottomRightRadius: 50,
      borderBottomLeftRadius: 50,
    },
    gradient: {
      height: '100%',
      width: '100%',
      zIndex: 1,
      backgroundColor: 'rgba(0, 82, 227,0.5)',
      position: 'absolute',
      borderBottomRightRadius: 50,
      borderBottomLeftRadius: 50,
    },
    content: {
      position: 'absolute',
      zIndex: 2,
      alignContent: 'center',
      justifyContent: 'center',
      padding: 50,
    },
    textInputContainer: {
      backgroundColor: 'white',
      marginTop: 15,
      borderColor: '#3eb2ff',
      height: 50,
    },
    body: {
      padding: 20,
    },
    button: {
      marginTop: 50,
      width: '50%',
      alignSelf: 'center',
    },
  });
};

export default Screen0ne;
