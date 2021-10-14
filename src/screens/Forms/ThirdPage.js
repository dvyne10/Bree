import React, { useState } from 'react';
import { View, StatusBar, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StyledText, TextInput, Button } from '~/components';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';

const PAGE_HEIGHT = Dimensions.get('window').height;
const PAGE_WIDTH = Dimensions.get('window').width;

const SecondPage = ({ navigation }) => {
  const [openCampus, setOpenCampus] = useState(false);
  const [openSession, setOpenSession] = useState(false);
  const [openProgrammeType, setOpenProgrammeType] = useState(false);
  const [openProgrammeFirst, setOpenProgrammeFirst] = useState(false);
  const [openProgrammeSecond, setOpenProgrammeSecond] = useState(false);
  const [openProgrammeThird, setOpenProgrammeThird] = useState(false);
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [campus, setCampus] = useState([
    { value: 'GTUC', label: 'GTUC' },
    { value: 'Coventry', label: 'Coventry' },
  ]);
  const [session, setSession] = useState([
    { value: 'Morning', label: 'Morning' },
    { value: 'Evening', label: 'Evening' },
  ]);
  const [programmeType, setProgrammeType] = useState([
    { value: 'Parent', label: 'Parent' },
    { value: 'God Parent', label: 'God Parent' },
  ]);
  const [programmes, setProgrammes] = useState([
    { value: 'Computer Engineering', label: 'Computer Engineering' },
    { value: 'Computer Science', label: 'Computer Science' },
    { value: 'Business Administration', label: 'Business Administration' },
  ]);
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
              Ghana Communication Technology University (GTUC)
            </StyledText>
          </View>
          <View style={styles.innerView}>
            <View>
              <StyledText size={18} style={styles.textStyle}>
                Campus
              </StyledText>
              <View>
                <DropDownPicker
                  open={openCampus}
                  value={value}
                  items={campus}
                  setOpen={setOpenCampus}
                  setValue={setValue}
                  setItems={setCampus}
                  style={{
                    borderRadius: 20,
                    borderWidth: 0,
                    height: 40,
                    backgroundColor: '#dddddd',
                    width: PAGE_WIDTH - PAGE_WIDTH / 10,
                    marginLeft: 5,
                  }}
                  placeholder="Select"
                  dropDownContainerStyle={{
                    elevation: 1000,
                    zIndex: 1000,
                    borderBottomEndRadius: 20,
                    borderBottomLeftRadius: 20,
                    width: PAGE_WIDTH - PAGE_WIDTH / 10,
                    marginLeft: 5,
                    backgroundColor: '#dddddd',
                    borderWidth: 0,
                  }}
                  onChangeValue={value => {}}
                />
              </View>
            </View>
          </View>
          <View style={styles.innerView}>
            <View>
              <StyledText size={18} style={styles.textStyle}>
                Session
              </StyledText>
              <View>
                <DropDownPicker
                  open={openSession}
                  value={value}
                  items={session}
                  setOpen={setOpenSession}
                  setValue={setValue}
                  setItems={setSession}
                  style={{
                    borderRadius: 20,
                    borderWidth: 0,
                    height: 40,
                    backgroundColor: '#dddddd',
                    width: PAGE_WIDTH - PAGE_WIDTH / 10,
                    marginLeft: 5,
                  }}
                  placeholder="Select"
                  dropDownContainerStyle={{
                    elevation: 1000,
                    zIndex: 1000,
                    borderBottomEndRadius: 20,
                    borderBottomLeftRadius: 20,
                    width: PAGE_WIDTH - PAGE_WIDTH / 10,
                    marginLeft: 5,
                    backgroundColor: '#dddddd',
                    borderWidth: 0,
                  }}
                  onChangeValue={value => {}}
                />
              </View>
            </View>
          </View>
          <View style={styles.innerView}>
            <View>
              <StyledText size={18} style={styles.textStyle}>
                Programme Type
              </StyledText>
              <View>
                <DropDownPicker
                  open={openProgrammeType}
                  value={value}
                  items={programmeType}
                  setOpen={setOpenProgrammeType}
                  setValue={setValue}
                  setItems={setProgrammeType}
                  style={{
                    borderRadius: 20,
                    borderWidth: 0,
                    height: 40,
                    backgroundColor: '#dddddd',
                    width: PAGE_WIDTH - PAGE_WIDTH / 10,
                    marginLeft: 5,
                  }}
                  placeholder="Select"
                  dropDownContainerStyle={{
                    elevation: 1000,
                    zIndex: 1000,
                    borderBottomEndRadius: 20,
                    borderBottomLeftRadius: 20,
                    width: PAGE_WIDTH - PAGE_WIDTH / 10,
                    marginLeft: 5,
                    backgroundColor: '#dddddd',
                    borderWidth: 0,
                  }}
                  onChangeValue={value => {}}
                />
              </View>
            </View>
          </View>
          <View style={styles.innerView}>
            <View>
              <StyledText size={18} style={styles.textStyle}>
                Programme
              </StyledText>
              <View>
                <View style={{ zIndex: 3 }}>
                  <DropDownPicker
                    open={openProgrammeFirst}
                    value={value}
                    items={programmes}
                    setOpen={setOpenProgrammeFirst}
                    setValue={setValue}
                    setItems={setProgrammes}
                    style={{
                      borderRadius: 20,
                      borderWidth: 0,
                      height: 40,
                      backgroundColor: '#dddddd',
                      width: PAGE_WIDTH - PAGE_WIDTH / 10,
                      marginLeft: 5,
                      marginBottom: 10,
                    }}
                    placeholder="First Choice"
                    dropDownContainerStyle={{
                      elevation: 1000,
                      borderBottomEndRadius: 20,
                      borderBottomLeftRadius: 20,
                      width: PAGE_WIDTH - PAGE_WIDTH / 10,
                      marginLeft: 5,
                      backgroundColor: '#dddddd',
                      borderWidth: 0,
                    }}
                    onChangeValue={value => {}}
                  />
                </View>
                <View style={{ zIndex: 2 }}>
                  <DropDownPicker
                    open={openProgrammeSecond}
                    value={value2}
                    items={programmes}
                    setOpen={setOpenProgrammeSecond}
                    setValue={setValue2}
                    setItems={setProgrammes}
                    style={{
                      borderRadius: 20,
                      borderWidth: 0,
                      height: 40,
                      backgroundColor: '#dddddd',
                      width: PAGE_WIDTH - PAGE_WIDTH / 10,
                      marginLeft: 5,
                      marginBottom: 10,
                    }}
                    placeholder="Second Choice"
                    dropDownContainerStyle={{
                      elevation: 999,
                      borderBottomEndRadius: 20,
                      borderBottomLeftRadius: 20,
                      width: PAGE_WIDTH - PAGE_WIDTH / 10,
                      marginLeft: 5,
                      backgroundColor: '#dddddd',
                      borderWidth: 0,
                    }}
                    onChangeValue={value => {}}
                  />
                </View>
                <View style={{ zIndex: 1 }}>
                  <DropDownPicker
                    open={openProgrammeThird}
                    value={value3}
                    items={programmes}
                    setOpen={setOpenProgrammeThird}
                    setValue={setValue3}
                    setItems={setProgrammes}
                    style={{
                      borderRadius: 20,
                      borderWidth: 0,
                      height: 40,
                      backgroundColor: '#dddddd',
                      width: PAGE_WIDTH - PAGE_WIDTH / 10,
                      marginLeft: 5,
                      marginBottom: 10,
                    }}
                    placeholder="Third Choice"
                    dropDownContainerStyle={{
                      elevation: 998,
                      borderBottomEndRadius: 20,
                      borderBottomLeftRadius: 20,
                      width: PAGE_WIDTH - PAGE_WIDTH / 10,
                      marginLeft: 5,
                      backgroundColor: '#dddddd',
                      borderWidth: 0,
                    }}
                    onChangeValue={value => {}}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 60,
            }}>
            <Button
              style={styles.button}
              // disabled={error}
              onPress={() => {
                navigation.navigate('FourthPage');
              }}>
              <Button.Text color={'white'}>Next</Button.Text>
            </Button>
            <StyledText style={styles.step}>Step 3/5</StyledText>
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
    width: PAGE_WIDTH - PAGE_WIDTH / 8,
    backgroundColor: '#dddddd',
    borderWidth: 0,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  progressComplete: {
    height: 10,
    width: PAGE_WIDTH - PAGE_WIDTH / 2.3,
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
