import React, { useState } from 'react';
import { View, StatusBar, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StyledText, TextInput, Button } from '~/components';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';

const PAGE_HEIGHT = Dimensions.get('window').height;
const PAGE_WIDTH = Dimensions.get('window').width;

const SecondPage = ({ navigation }) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <View style={styles.wrapper}>
          <View>
            <StyledText
              size={25}
              style={styles.heading}
              fontFamily={'Montserrat-Light'}>
              Declaration
            </StyledText>
          </View>
          <View style={styles.innerView}>
            <StyledText>
              {' '}
              I, Mrs. Bree Doe, certify that all information stated in this
              application are true. All documents attached are genuine and
              legal.
            </StyledText>
          </View>
          <View
            style={{
              marginTop: 60,
            }}>
            <Button
              style={styles.button}
              // disabled={error}
              onPress={() => {
                navigation.navigate('FinalPage');
              }}>
              <Button.Text color={'white'}>Accept</Button.Text>
            </Button>
            <StyledText style={styles.step}>Step 5/5</StyledText>
            <View styles={styles.progressContainer}>
              <View style={styles.progress}></View>
              <View style={styles.progressComplete}></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    flexGrow: 1,
    height: '100%',
    marginHorizontal: 15,
    marginTop: PAGE_HEIGHT / 10,
  },
  heading: {
    fontWeight: 'bold',
  },
  innerView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  textStyle: {
    marginBottom: 5,
  },
  button: {
    marginTop: 50,
    width: '40%',
    alignSelf: 'center',
    height: 40,
  },
  progress: {
    height: 10,
    width: PAGE_WIDTH - PAGE_WIDTH / 10,
    backgroundColor: '#dddddd',
    borderWidth: 0,
    borderRadius: 5,
    // marginHorizontal: 20,
  },
  progressComplete: {
    height: 10,
    width: PAGE_WIDTH - PAGE_WIDTH / 10,
    backgroundColor: '#94d1ff',
    borderWidth: 0,
    borderRadius: 5,
    position: 'absolute',
  },
  progressContainer: {
    flex: 1,
    justifyItems: 'flex-end',
    alignItems: 'center',
  },
});

export default SecondPage;
