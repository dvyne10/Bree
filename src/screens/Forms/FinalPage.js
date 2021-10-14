import React, { useState } from 'react';
import { View, StatusBar, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StyledText, TextInput, Button } from '~/components';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';

const PAGE_HEIGHT = Dimensions.get('window').height;
const PAGE_WIDTH = Dimensions.get('window').width;

const SecondPage = ({ navigation }) => {
  const [fullName, setFullName] = useState('Miss Bree Doe');
  const [date, setDate] = useState('02/04/2021');
  const [nationality, setNationality] = useState('Ghanaian');
  const [maritalStatus, setMaritalStatus] = useState('Single');
  const [disability, setDisability] = useState('None');
  const [email, setEmail] = useState('email@gmail.com');
  const [gaurdianFullName, setGaurdianFullName] = useState(
    'Mr. Jenkins Broman Doe',
  );
  const [gaurdianRelationship, setGaurdianRelationship] = useState('Father');
  const [gaurdianEmail, setGaurdianEmail] = useState('father@gmail.com');
  const [guardianPhoneNumber, setguardianPhoneNumber] = useState('0203000003');
  const [phoneNumbers, setPhoneNumbers] = useState([
    '0244444444',
    '0274444444',
  ]);
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <View style={styles.wrapper}>
          <View>
            <StyledText
              size={25}
              style={styles.heading}
              fontFamily={'Montserrat-Light'}>
              Overview
            </StyledText>
          </View>
          <View>
            <StyledText
              size={23}
              style={styles.subHeading}
              fontFamily={'Montserrat-Light'}>
              Personal Overview
            </StyledText>
          </View>
          <View style={{ marginHorizontal: 15 }}>
            <View>
              <StyledText
                size={18}
                color="#d0d0d0"
                style={styles.subHeading}
                fontFamily={'Montserrat-Light'}>
                Full Name
              </StyledText>
              <StyledText
                size={20}
                style={styles.text}
                fontFamily={'Montserrat-Light'}>
                {fullName}
              </StyledText>
            </View>
            <View
              style={{
                flexDirection: 'row',

                width: PAGE_WIDTH / 1.7,
              }}>
              <View style={{ flex: 1, width: '50%' }}>
                <StyledText
                  size={18}
                  color="#d0d0d0"
                  style={{ ...styles.subHeading }}
                  fontFamily={'Montserrat-Light'}>
                  Date
                </StyledText>
                <StyledText
                  size={20}
                  style={{
                    ...styles.text,
                  }}
                  fontFamily={'Montserrat-Light'}>
                  {date}
                </StyledText>
              </View>
              <View>
                <StyledText
                  size={18}
                  color="#d0d0d0"
                  style={styles.subHeading}
                  fontFamily={'Montserrat-Light'}>
                  Nationality
                </StyledText>
                <StyledText
                  size={20}
                  style={styles.text}
                  fontFamily={'Montserrat-Light'}>
                  {nationality}
                </StyledText>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '50%' }}>
                <StyledText
                  size={18}
                  color="#d0d0d0"
                  style={styles.subHeading}
                  fontFamily={'Montserrat-Light'}>
                  Marital Status
                </StyledText>
                <StyledText
                  size={20}
                  style={{
                    ...styles.text,
                  }}
                  fontFamily={'Montserrat-Light'}>
                  {maritalStatus}
                </StyledText>
              </View>
              <View>
                <StyledText
                  size={18}
                  color="#d0d0d0"
                  style={styles.subHeading}
                  fontFamily={'Montserrat-Light'}>
                  Disability
                </StyledText>
                <StyledText
                  size={20}
                  style={styles.text}
                  fontFamily={'Montserrat-Light'}>
                  {disability}
                </StyledText>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{ width: '50%' }}>
                <StyledText
                  size={18}
                  color="#d0d0d0"
                  style={styles.subHeading}
                  fontFamily={'Montserrat-Light'}>
                  Phone Number
                </StyledText>
                <StyledText
                  size={20}
                  style={{
                    ...styles.text,
                    width: PAGE_WIDTH / 3,
                  }}
                  fontFamily={'Montserrat-Light'}>
                  {phoneNumbers.join(',')}
                </StyledText>
              </View>
              <View>
                <StyledText
                  size={18}
                  color="#d0d0d0"
                  style={styles.subHeading}
                  fontFamily={'Montserrat-Light'}>
                  Email
                </StyledText>
                <StyledText
                  size={20}
                  style={styles.text}
                  fontFamily={'Montserrat-Light'}>
                  {email}
                </StyledText>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              height: 2,
              backgroundColor: '#94d1ff',
            }}></View>
          <View>
            <StyledText
              size={23}
              style={styles.subHeading}
              fontFamily={'Montserrat-Light'}>
              Guardian's Overview
            </StyledText>
          </View>
          <View style={{ marginHorizontal: 15 }}>
            <View>
              <StyledText
                size={18}
                color="#d0d0d0"
                style={styles.subHeading}
                fontFamily={'Montserrat-Light'}>
                Full Name
              </StyledText>
              <StyledText
                size={20}
                style={styles.text}
                fontFamily={'Montserrat-Light'}>
                {gaurdianFullName}
              </StyledText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: PAGE_WIDTH / 1.4,
              }}>
              <View style={{ flex: 1, width: '50%' }}>
                <StyledText
                  size={18}
                  color="#d0d0d0"
                  style={{ ...styles.subHeading }}
                  fontFamily={'Montserrat-Light'}>
                  Relationship
                </StyledText>
                <StyledText
                  size={20}
                  style={{
                    ...styles.text,
                  }}
                  fontFamily={'Montserrat-Light'}>
                  {gaurdianRelationship}
                </StyledText>
              </View>
              <View>
                <StyledText
                  size={18}
                  color="#d0d0d0"
                  style={styles.subHeading}
                  fontFamily={'Montserrat-Light'}>
                  Email
                </StyledText>
                <StyledText
                  size={20}
                  style={styles.text}
                  fontFamily={'Montserrat-Light'}>
                  {gaurdianEmail}
                </StyledText>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={{ width: '50%' }}>
                <StyledText
                  size={18}
                  color="#d0d0d0"
                  style={styles.subHeading}
                  fontFamily={'Montserrat-Light'}>
                  Phone Number
                </StyledText>
                <StyledText
                  size={20}
                  style={{
                    ...styles.text,
                    width: PAGE_WIDTH / 3,
                  }}
                  fontFamily={'Montserrat-Light'}>
                  {guardianPhoneNumber}
                </StyledText>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              height: 2,
              backgroundColor: '#94d1ff',
            }}></View>
          <View>
            <StyledText
              size={23}
              style={styles.subHeading}
              fontFamily={'Montserrat-Light'}>
              Ghana Communication Technology University
            </StyledText>
          </View>
          <View style={{ marginHorizontal: 15 }}>
            <View
              style={{
                flexDirection: 'row',

                width: PAGE_WIDTH / 1.7,
              }}>
              <View style={{ flex: 1, width: '50%' }}>
                <StyledText
                  size={18}
                  color="#d0d0d0"
                  style={{ ...styles.subHeading }}
                  fontFamily={'Montserrat-Light'}>
                  Campus
                </StyledText>
                <StyledText
                  size={20}
                  style={{
                    ...styles.text,
                  }}
                  fontFamily={'Montserrat-Light'}>
                  Tesano
                </StyledText>
              </View>
              <View>
                <StyledText
                  size={18}
                  color="#d0d0d0"
                  style={styles.subHeading}
                  fontFamily={'Montserrat-Light'}>
                  Session
                </StyledText>
                <StyledText
                  size={20}
                  style={styles.text}
                  fontFamily={'Montserrat-Light'}>
                  Morning
                </StyledText>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ width: '50%' }}>
                <StyledText
                  size={18}
                  color="#d0d0d0"
                  style={styles.subHeading}
                  fontFamily={'Montserrat-Light'}>
                  Programme Type
                </StyledText>
                <StyledText
                  size={20}
                  style={{
                    ...styles.text,
                  }}
                  fontFamily={'Montserrat-Light'}>
                  Degree
                </StyledText>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View>
                <StyledText
                  size={18}
                  color="#d0d0d0"
                  style={styles.subHeading}
                  fontFamily={'Montserrat-Light'}>
                  Programmes
                </StyledText>
                <StyledText
                  size={20}
                  style={{
                    ...styles.text,
                  }}
                  fontFamily={'Montserrat-Light'}>
                  Computer Science
                </StyledText>
                <StyledText
                  size={20}
                  style={{
                    ...styles.text,
                  }}
                  fontFamily={'Montserrat-Light'}>
                  Computer Engineering
                </StyledText>
                <StyledText
                  size={20}
                  style={{
                    ...styles.text,
                  }}
                  fontFamily={'Montserrat-Light'}>
                  Business Administration
                </StyledText>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              height: 2,
              backgroundColor: '#94d1ff',
            }}></View>
          <View>
            <StyledText
              size={23}
              style={styles.subHeading}
              fontFamily={'Montserrat-Light'}>
              Academic Report
            </StyledText>
          </View>
          <View style={{ marginHorizontal: 15 }}>
            <View>
              <StyledText
                size={18}
                color="#d0d0d0"
                style={styles.subHeading}
                fontFamily={'Montserrat-Light'}>
                Certificate Type
              </StyledText>
              <StyledText
                size={20}
                style={styles.text}
                fontFamily={'Montserrat-Light'}>
                WASSCE
              </StyledText>
            </View>
            <View
              style={{
                flexDirection: 'row',

                width: PAGE_WIDTH / 1.7,
              }}>
              <View style={{ flex: 1, width: '50%' }}>
                <StyledText
                  size={18}
                  color="#d0d0d0"
                  style={{ ...styles.subHeading }}
                  fontFamily={'Montserrat-Light'}>
                  Date
                </StyledText>
                <StyledText
                  size={20}
                  style={{
                    ...styles.text,
                  }}
                  fontFamily={'Montserrat-Light'}>
                  Sept, 2021
                </StyledText>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <StyledText
                  size={18}
                  color="#d0d0d0"
                  style={styles.subHeading}
                  fontFamily={'Montserrat-Light'}>
                  Examination Center Number
                </StyledText>
                <StyledText
                  size={20}
                  style={{
                    ...styles.text,
                  }}
                  fontFamily={'Montserrat-Light'}>
                  0100000110
                </StyledText>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View>
                <StyledText
                  size={18}
                  color="#d0d0d0"
                  style={styles.subHeading}
                  fontFamily={'Montserrat-Light'}>
                  Grades
                </StyledText>
                <View style={{ flexDirection: 'row' }}>
                  <StyledText
                    size={20}
                    style={{
                      ...styles.text,
                      width: '50%',
                    }}
                    fontFamily={'Montserrat-Light'}>
                    English Language
                  </StyledText>
                  <StyledText
                    size={20}
                    style={{
                      ...styles.text,
                      width: '50%',
                    }}
                    fontFamily={'Montserrat-Light'}>
                    A1
                  </StyledText>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <StyledText
                    size={20}
                    style={{
                      ...styles.text,
                      width: '50%',
                    }}
                    fontFamily={'Montserrat-Light'}>
                    Core Mathematics
                  </StyledText>
                  <StyledText
                    size={20}
                    style={{
                      ...styles.text,
                      width: '50%',
                    }}
                    fontFamily={'Montserrat-Light'}>
                    A1
                  </StyledText>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <StyledText
                    size={20}
                    style={{
                      ...styles.text,
                      width: '50%',
                    }}
                    fontFamily={'Montserrat-Light'}>
                    English Language
                  </StyledText>
                  <StyledText
                    size={20}
                    style={{
                      ...styles.text,
                      width: '50%',
                    }}
                    fontFamily={'Montserrat-Light'}>
                    A1
                  </StyledText>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <StyledText
                    size={20}
                    style={{
                      ...styles.text,
                      width: '50%',
                    }}
                    fontFamily={'Montserrat-Light'}>
                    Social Studies
                  </StyledText>
                  <StyledText
                    size={20}
                    style={{
                      ...styles.text,
                      width: '50%',
                    }}
                    fontFamily={'Montserrat-Light'}>
                    A1
                  </StyledText>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <StyledText
                    size={20}
                    style={{
                      ...styles.text,
                      width: '50%',
                    }}
                    fontFamily={'Montserrat-Light'}>
                    Elective Chemistry
                  </StyledText>
                  <StyledText
                    size={20}
                    style={{
                      ...styles.text,
                      width: '50%',
                    }}
                    fontFamily={'Montserrat-Light'}>
                    A1
                  </StyledText>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <StyledText
                    size={20}
                    style={{
                      ...styles.text,
                      width: '50%',
                    }}
                    fontFamily={'Montserrat-Light'}>
                    Elective Mathematics
                  </StyledText>
                  <StyledText
                    size={20}
                    style={{
                      ...styles.text,
                      width: '50%',
                    }}
                    fontFamily={'Montserrat-Light'}>
                    A1
                  </StyledText>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <StyledText
                    size={20}
                    style={{
                      ...styles.text,
                      width: '50%',
                    }}
                    fontFamily={'Montserrat-Light'}>
                    Elective Physics
                  </StyledText>
                  <StyledText
                    size={20}
                    style={{
                      ...styles.text,
                      width: '50%',
                    }}
                    fontFamily={'Montserrat-Light'}>
                    A1
                  </StyledText>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Button
              style={styles.button}
              // disabled={error}
              onPress={() => {
                //   navigation.navigate('SecondPage');
              }}>
              <Button.Text color={'white'}>Apply</Button.Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
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
    fontWeight: '900',
  },
  subHeading: {
    fontWeight: '700',
    marginTop: 10,
  },
  text: {
    fontWeight: '700',
  },
  button: {
    marginTop: 20,
    width: '40%',
    alignSelf: 'center',
    height: 40,
  },
});

export default SecondPage;
