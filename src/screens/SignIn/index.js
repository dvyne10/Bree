import React, { useState, useContext } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EStyleSheet from 'react-native-extended-stylesheet';
import FastImage from 'react-native-fast-image';
import { Button, StyledText, TappableText, TextInput } from '~/components';
import { PasswordIcon, PersonIcon } from '~/components/svgs';
import axiosInstance from '../../utils/axiosInstance';
import AuthContext from '../../context/authContext';

const SignInScreen = ({ navigation }) => {
  const { setToken } = useContext(AuthContext);
  const [userName, setUserName] = useState('ImmArkorful');
  const [password, setPassword] = useState('123456789');
  const styles = generateStyles();
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <View
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: 'transparent', flex: 1, zIndex: -1 },
        ]}>
        <FastImage
          source={require('#/images/element5-digital.jpg')}
          style={{ width: '100%', height: '100%', zIndex: -1 }}
        />
      </View>
      <View style={styles.gradient} />
      <View style={styles.content}>
        <View style={styles.header}>
          <StyledText color={'white'} size={30}>
            {'Welcome \n back'}
          </StyledText>
          <PersonIcon />
        </View>
        <View>
          <TextInput
            containerStyleOverride={styles.textInputContainer}
            placeholder={'Username/Phone number'}
            value={userName}
            onChangeText={setUserName}>
            <PersonIcon fill={'black'} width={20} height={20} />
          </TextInput>
          <TextInput
            containerStyleOverride={styles.textInputContainer}
            placeholder={'Password'}
            value={password}
            onChangeText={setPassword}>
            <PasswordIcon />
          </TextInput>
          <Button
            style={styles.button}
            onPress={async () => {
              const { data } = await axiosInstance.post('/login', {
                username: userName,
                password,
              });
              await AsyncStorage.setItem('token', data.data.token);
              setToken(data.data.token);
            }}>
            <Button.Text color={'white'}>Sign In</Button.Text>
          </Button>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              display: 'flex',
              marginTop: 30,
            }}>
            <StyledText color={'white'} size={15} style={{}}>
              New User?
            </StyledText>
            <TappableText
              color={'white'}
              text={' Sign Up'}
              onTap={() => {
                navigation.navigate('SignUpStack');
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const generateStyles = () => {
  return EStyleSheet.create({
    gradient: {
      height: '100%',
      width: '100%',
      zIndex: 1,
      backgroundColor: 'rgba(0, 82, 227,0.5)',
      position: 'absolute',
    },
    content: {
      height: '100%',
      width: '100%',
      zIndex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 40,
    },
    header: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    },
    textInputContainer: {
      backgroundColor: 'white',
      marginTop: 15,
      borderColor: '#3eb2ff',
      height: 50,
    },
    button: {
      marginTop: 50,
    },
  });
};

export default SignInScreen;
