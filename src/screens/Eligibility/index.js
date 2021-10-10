import React, { Component, useEffect, useState } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button, StyledText, TextInput } from '~/components';
import DropDownPicker from 'react-native-dropdown-picker';
import { createStackNavigator } from '@react-navigation/stack';
import SearchResults from './SearchResults';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const EligibilityScreen = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(courses);
  const [subjects, setSubjects] = useState(null);
  const [core, setCore] = useState(coreSubjects);
  const [elective, setElective] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    core.map(coreSubs => {
      if (coreSubs.grade === '') {
        return setError(true);
      }
      return setError(false);
    });
    elective &&
      elective.map(electiveSubs => {
        if (electiveSubs.grade === '') {
          return setError(true);
        }
        return setError(false);
      });
  }, [elective]);
  return (
    <>
      <ScrollView nestedScrollEnabled style={styles.container}>
        <View>
          <StyledText
            size={20}>{`Hello Bree, \nLet's find you a course`}</StyledText>
        </View>
        <View style={{ marginTop: 30 }}>
          <StyledText>What programme did you study in high school?</StyledText>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
              borderRadius: 20,
              marginTop: 10,
            }}
            dropDownContainerStyle={{
              borderBottomEndRadius: 20,
              borderBottomLeftRadius: 20,
            }}
            onChangeValue={value => {
              if (value === 'GS') {
                setElective(electiveSciences);
              } else {
                setElective(electiveArts);
              }
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingRight: 20,
            }}>
            <StyledText>Subjects</StyledText>
            <StyledText>Grades</StyledText>
          </View>
          <FlatList
            data={core}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginTop: 10,
                  }}
                  key={item.id}>
                  <View style={styles.subject}>
                    <StyledText>{item.value}</StyledText>
                  </View>
                  <View style={styles.grade}>
                    <TextInput
                      containerStyleOverride={styles.textInput}
                      maxLength={2}
                      onChangeText={value => {
                        const newCore = core.slice();
                        newCore[index].grade = value;
                        setCore(newCore);
                      }}
                    />
                  </View>
                </View>
              );
            }}
          />
          {elective && (
            <>
              <FlatList
                data={elective}
                renderItem={({ item, index }) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginTop: 10,
                      }}
                      key={item.id}>
                      <View style={styles.subject}>
                        <StyledText>{item.value}</StyledText>
                      </View>
                      <View style={styles.grade}>
                        <TextInput
                          containerStyleOverride={styles.textInput}
                          maxLength={2}
                          onChangeText={value => {
                            const newElective = elective.slice();
                            newElective[index].grade = value;
                            setElective(newElective);
                          }}
                        />
                      </View>
                    </View>
                  );
                }}
              />
              <Button
                style={styles.button}
                // disabled={error}
                onPress={() => {
                  // console.log('newCore', core);
                  // console.log('newElective', elective);
                  navigation.navigate('SearchResults');
                }}>
                <Button.Text color={'white'}>Next</Button.Text>
              </Button>
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
};

const styles = EStyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  grade: {
    width: '20%',
    backgroundColor: '#dddddd',
    borderRadius: 20,
  },
  subject: {
    width: '70%',
    backgroundColor: '#dddddd',
    borderRadius: 20,
    padding: 10,
  },
  textInput: {
    borderWidth: 0,
    height: 40,
    margin: 0,
  },
  button: {
    marginTop: 30,
    width: '50%',
    alignSelf: 'center',
  },
});

const Stack = createStackNavigator();

const EligibilityUpStack = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="SignUpScreen">
        <Stack.Screen
          name="EligibilityScreen"
          component={EligibilityScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchResults"
          component={SearchResults}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
};

const courses = [
  { value: 'GA', label: 'General Arts' },
  { value: 'GS', label: 'General Science' },
  { value: 'HE', label: 'Home Economics' },
  { value: 'TS', label: 'Technical Studies' },
  { value: 'VA', label: 'Visual Arts' },
];

const coreSubjects = [
  { id: '1', value: 'Core Maths', grade: '' },
  { id: '2', value: 'English', grade: '' },
  { id: '3', value: 'Integrated Science', grade: '' },
  { id: '4', value: 'Social Studies', grade: '' },
];

const electiveSciences = [
  { id: '1', value: 'Elective Maths', grade: '' },
  { id: '2', value: 'Physics', grade: '' },
  { id: '3', value: 'Chemistry', grade: '' },
  { id: '4', value: 'Biology', grade: '' },
];

const electiveBusiness = [
  { id: '1', value: 'Economics', grade: '' },
  { id: '2', value: 'Accounting', grade: '' },
  { id: '3', value: 'Finance', grade: '' },
  { id: '4', value: 'Administration', grade: '' },
];

const electiveArts = [
  { id: '1', value: 'Economics', grade: '' },
  { id: '2', value: 'Elective Maths', grade: '' },
  { id: '3', value: 'Geography', grade: '' },
  { id: '4', value: 'History', grade: '' },
  { id: '5', value: 'Literature', grade: '' },
];

export default EligibilityUpStack;
