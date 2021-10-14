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
  const [openMonth, setOpenMonth] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  const [value, setValue] = useState('');
  const [campus, setCampus] = useState([
    { value: 'GTUC', label: 'GTUC' },
    { value: 'Coventry', label: 'Coventry' },
  ]);
  const [months, setMonths] = useState([
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' },
  ]);
  const [year, setYear] = useState([
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' },
    { value: '2025', label: '2025' },
    { value: '2026', label: '2026' },
    { value: '2027', label: '2027' },
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
              Academic Report
            </StyledText>
          </View>
          <View style={styles.innerView}>
            <View
              style={{
                width: '100%',
              }}>
              <StyledText size={18} style={styles.textStyle}>
                Certificate Type
              </StyledText>
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                }}>
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
                    width: PAGE_WIDTH - PAGE_WIDTH / 4,
                    marginLeft: 5,
                  }}
                  placeholder="Select"
                  dddddd
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
                <View
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    marginRight: 10,
                    backgroundColor: '#dddddd',
                    justifyContent: 'center',
                    alignContent: 'center',
                  }}>
                  <StyledText
                    size={35}
                    style={{
                      color: 'black',
                      textAlign: 'center',
                    }}>
                    +
                  </StyledText>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.innerView}>
            <View>
              <StyledText size={18} style={styles.textStyle}>
                Month
              </StyledText>
              <DropDownPicker
                open={openMonth}
                value={value}
                items={months}
                setOpen={setOpenMonth}
                setValue={setValue}
                setItems={setMonths}
                style={{
                  borderRadius: 20,
                  borderWidth: 0,
                  height: 40,
                  backgroundColor: '#dddddd',
                  width: PAGE_WIDTH / 2.5,
                  marginLeft: 5,
                }}
                placeholder="Select"
                dropDownContainerStyle={{
                  elevation: 1000,
                  zIndex: 1000,
                  borderBottomEndRadius: 20,
                  borderBottomLeftRadius: 20,
                  width: PAGE_WIDTH / 2.5,
                  marginLeft: 5,
                  backgroundColor: '#dddddd',
                  borderWidth: 0,
                }}
                onChangeValue={value => {}}
              />
            </View>
            <View>
              <StyledText size={18} style={styles.textStyle}>
                Year
              </StyledText>
              <DropDownPicker
                open={openYear}
                value={value}
                items={year}
                setOpen={setOpenYear}
                setValue={setValue}
                setItems={setYear}
                style={{
                  borderRadius: 20,
                  borderWidth: 0,
                  height: 40,
                  backgroundColor: '#dddddd',
                  width: PAGE_WIDTH / 2.5,
                  marginLeft: 5,
                }}
                placeholder="Select"
                dropDownContainerStyle={{
                  elevation: 1000,
                  zIndex: 1000,
                  borderBottomEndRadius: 20,
                  borderBottomLeftRadius: 20,
                  width: PAGE_WIDTH / 2.5,
                  marginLeft: 5,
                  backgroundColor: '#dddddd',
                  borderWidth: 0,
                }}
                onChangeValue={value => {}}
              />
            </View>
          </View>
          <View style={styles.innerView}>
            <View>
              <StyledText size={18} style={styles.textStyle}>
                Index Number
              </StyledText>
              <TextInput
                containerStyleOverride={{
                  borderWidth: 0,
                  height: 40,
                  margin: 0,
                  backgroundColor: '#dddddd',
                  width: PAGE_WIDTH - PAGE_WIDTH / 10,
                  marginLeft: 5,
                }}
                placeholder="Index Number"
                placeholderTextColor="black"
                maxLength={2}
                onChangeText={value => {}}
              />
            </View>
          </View>
          <View style={styles.innerView}>
            <View>
              <StyledText size={18} style={styles.textStyle}>
                Examination Center Number
              </StyledText>
              <TextInput
                containerStyleOverride={{
                  borderWidth: 0,
                  height: 40,
                  margin: 0,
                  backgroundColor: '#dddddd',
                  width: PAGE_WIDTH - PAGE_WIDTH / 10,
                  marginLeft: 5,
                }}
                placeholder="Examination Center Number"
                placeholderTextColor="black"
                maxLength={2}
                onChangeText={value => {}}
              />
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
                navigation.navigate('FifthPage');
              }}>
              <Button.Text color={'white'}>Next</Button.Text>
            </Button>
            <StyledText style={styles.step}>Step 4/5</StyledText>
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
    width: PAGE_WIDTH - PAGE_WIDTH / 3.2,
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
