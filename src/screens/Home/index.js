import React, { useEffect } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import FastImage from 'react-native-fast-image';
import { Button, StyledText, TappableText, TextInput } from '~/components';
import {
  AddPersonIcon,
  DrawerIcon,
  PasswordIcon,
  PersonIcon,
  PhoneIcon,
} from '~/components/svgs';

const HomeScreen = ({ navigation }) => {
  const styles = generateStyles();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('DrawerNavigation');
            navigation.openDrawer();
          }}>
          <DrawerIcon style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <>
          <View style={styles.imageContainer}>
            <AddPersonIcon />
          </View>
        </>
      ),
    });
  });
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <StyledText>Hello Bree,</StyledText>
          <StyledText>Welcome</StyledText>
          <TextInput
            containerStyleOverride={styles.textInputContainer}
            placeholder={'Find a Programme, School...'}
          />
        </View>
        <View style={styles.applicationGuides}>
          <StyledText>Application Guides</StyledText>
          {
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 10, width: '100%' }}
              data={applicationGuides}
              renderItem={({ item }) => {
                return (
                  <View style={styles.homeCard}>
                    <FastImage
                      source={item.image}
                      style={{ width: 200, height: 200, borderRadius: 25 }}
                    />
                    <StyledText style={{ width: 200, padding: 10 }} size={12}>
                      {item.title}
                    </StyledText>
                  </View>
                );
              }}
            />
          }
        </View>
        <View style={styles.interest}>
          <StyledText>Find Your Interest</StyledText>
          {
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 10, width: '100%' }}
              data={interest}
              renderItem={({ item }) => {
                return (
                  <View style={styles.homeCard}>
                    <FastImage
                      source={item.image}
                      style={{ width: 200, height: 200, borderRadius: 25 }}
                    />
                    <StyledText style={{ width: 200, padding: 10 }} size={12}>
                      {item.title}
                    </StyledText>
                  </View>
                );
              }}
            />
          }
        </View>
      </ScrollView>
    </>
  );
};

const generateStyles = () => {
  return EStyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 20,
    },
    imageContainer: {
      borderWidth: 1,
      borderColor: '#3eb2ff',
      width: 40,
      height: 40,
      marginRight: 10,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInputContainer: {
      backgroundColor: '#94d1ff',
      borderColor: 'white',
      marginTop: 10,
    },
    applicationGuides: {
      marginTop: 15,
      marginBottom: 20,
    },
    homeCard: {
      width: 230,
      height: 250,
    },
  });
};

const applicationGuides = [
  {
    image: require('#/images/bucerius-law-school.jpg'),
    title: 'How to select a course and a university',
  },
  {
    image: require('#/images/changbok-ko.jpg'),
    title: 'Things you need to look out of in the university',
  },
];

const interest = [
  {
    image: require('#/images/coralie-meurice.jpg'),
    title: 'Bsc. Software Engineering',
  },
  {
    image: require('#/images/firmbee-com.jpg'),
    title: 'Bsc. Business Administration',
  },
];

export default HomeScreen;
