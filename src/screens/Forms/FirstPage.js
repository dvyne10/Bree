import React, { useState } from 'react';
import { View, StatusBar, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StyledText, TextInput, Button } from '~/components';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';

const PAGE_HEIGHT = Dimensions.get('window').height;
const PAGE_WIDTH = Dimensions.get('window').width;

const FirstPage = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [openNationality, setOpenNationality] = useState(false);
  const [openMaritalStatus, setOpenMaritalStatus] = useState(false);
  const [maritalStatus, setMaritalStatus] = useState([
    { value: 'Single', label: 'Single' },
    { value: 'Married', label: 'Married' },
    { value: 'Divorced', label: 'Divorced' },
  ]);
  const [openDisability, setOpenDisability] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    { value: 'Mr', label: 'Mr' },
    { value: 'Miss', label: 'Miss' },
    { value: 'Mrs', label: 'Mrs' },
  ]);
  const [nationality, setNationality] = useState([
    { value: 'Ghanaian', label: 'Ghanaian' },
    { value: 'Nigerian', label: 'Nigerian' },
    { value: 'Togolese', label: 'Togolese' },
  ]);
  const [disability, setDisability] = useState([
    { value: 'Disabled', label: 'Disabled' },
    { value: 'Not Disabled', label: 'Not Disabled' },
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
              Personal Overview
            </StyledText>
          </View>
          <View style={styles.innerView}>
            <View>
              <StyledText size={18} style={styles.fontBold}>
                First Name
              </StyledText>
              <TextInput
                containerStyleOverride={{
                  borderWidth: 0,
                  height: 40,
                  margin: 0,
                  backgroundColor: '#dddddd',
                  width: PAGE_WIDTH / 2.3,
                  marginLeft: 5,
                }}
                placeholder="Brandon"
                placeholderTextColor="black"
                maxLength={2}
                onChangeText={value => {}}
              />
            </View>
            <View>
              <StyledText size={18} style={styles.fontBold}>
                Last Name
              </StyledText>
              <TextInput
                containerStyleOverride={{
                  borderWidth: 0,
                  height: 40,
                  margin: 0,
                  backgroundColor: '#dddddd',
                  width: PAGE_WIDTH / 2.3,
                  marginLeft: 5,
                }}
                placeholder="Armah"
                placeholderTextColor="black"
                maxLength={2}
                onChangeText={value => {}}
              />
            </View>
          </View>
          <View style={styles.innerView}>
            <View>
              <StyledText size={18} style={styles.fontBold}>
                Other Names
              </StyledText>
              <TextInput
                containerStyleOverride={{
                  borderWidth: 0,
                  height: 40,
                  margin: 0,
                  backgroundColor: '#dddddd',
                  width: PAGE_WIDTH / 2,
                  marginLeft: 5,
                }}
                placeholder="Quarcoo"
                placeholderTextColor="black"
                maxLength={2}
                onChangeText={value => {}}
              />
            </View>
            <View>
              <StyledText size={18} style={styles.fontBold}>
                Title
              </StyledText>
              <View>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  style={{
                    borderRadius: 20,
                    borderWidth: 0,
                    height: 40,
                    backgroundColor: '#dddddd',
                    width: PAGE_WIDTH / 3,
                    marginLeft: 5,
                  }}
                  placeholder="Select"
                  dropDownContainerStyle={{
                    borderBottomEndRadius: 20,
                    borderBottomLeftRadius: 20,
                    width: PAGE_WIDTH / 3,
                    marginLeft: 5,
                    backgroundColor: '#dddddd',
                    borderWidth: 0,
                    elevation: 1000,
                    zIndex: 1000,
                  }}
                  onChangeValue={value => {}}
                />
              </View>
            </View>
          </View>
          <View style={styles.innerView}>
            <View>
              <StyledText size={18} style={styles.fontBold}>
                Date of Birth
              </StyledText>
              <TextInput
                containerStyleOverride={{
                  borderWidth: 0,
                  height: 40,
                  margin: 0,
                  backgroundColor: '#dddddd',
                  width: PAGE_WIDTH / 2.7,
                  marginLeft: 5,
                }}
                placeholder="28/02/96"
                placeholderTextColor="black"
                maxLength={2}
                onChangeText={value => {}}
              />
            </View>
            <View>
              <StyledText size={18} style={styles.fontBold}>
                Nationality
              </StyledText>
              <View>
                <DropDownPicker
                  open={openNationality}
                  value={value}
                  items={nationality}
                  setOpen={setOpenNationality}
                  setValue={setValue}
                  setItems={setNationality}
                  style={{
                    borderRadius: 20,
                    borderWidth: 0,
                    height: 40,
                    backgroundColor: '#dddddd',
                    width: PAGE_WIDTH / 2.1,
                    marginLeft: 5,
                  }}
                  placeholder="Select"
                  dropDownContainerStyle={{
                    elevation: 900,
                    zIndex: 900,
                    borderBottomEndRadius: 20,
                    borderBottomLeftRadius: 20,
                    width: PAGE_WIDTH / 2.1,
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
              <StyledText size={18} style={styles.fontBold}>
                Marital Status
              </StyledText>
              <View>
                <DropDownPicker
                  open={openMaritalStatus}
                  value={value}
                  items={maritalStatus}
                  setOpen={setOpenMaritalStatus}
                  setValue={setValue}
                  setItems={setMaritalStatus}
                  style={{
                    borderRadius: 20,
                    borderWidth: 0,
                    height: 40,
                    backgroundColor: '#dddddd',
                    width: PAGE_WIDTH / 3,
                    marginLeft: 5,
                  }}
                  placeholder="Select"
                  dropDownContainerStyle={{
                    elevation: 1000,
                    zIndex: 1000,
                    borderBottomEndRadius: 20,
                    borderBottomLeftRadius: 20,
                    width: PAGE_WIDTH / 3,
                    marginLeft: 5,
                    backgroundColor: '#dddddd',
                    borderWidth: 0,
                  }}
                  onChangeValue={value => {}}
                />
              </View>
            </View>
            <View>
              <StyledText size={18} style={styles.fontBold}>
                Disability
              </StyledText>
              <View>
                <DropDownPicker
                  open={openDisability}
                  value={value}
                  items={disability}
                  setOpen={setOpenDisability}
                  setValue={setValue}
                  setItems={setDisability}
                  style={{
                    borderRadius: 20,
                    borderWidth: 0,
                    height: 40,
                    backgroundColor: '#dddddd',
                    width: PAGE_WIDTH / 2.1,
                    marginLeft: 5,
                  }}
                  placeholder="Select"
                  dropDownContainerStyle={{
                    elevation: 1000,
                    zIndex: 1000,
                    borderBottomEndRadius: 20,
                    borderBottomLeftRadius: 20,
                    width: PAGE_WIDTH / 2.1,
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
              <StyledText size={18} style={styles.fontBold}>
                Phone Number
              </StyledText>
              <TextInput
                containerStyleOverride={{
                  borderWidth: 0,
                  height: 40,
                  margin: 0,
                  backgroundColor: '#dddddd',
                  width: PAGE_WIDTH / 2.3,
                  marginLeft: 5,
                }}
                placeholder="0275544221"
                placeholderTextColor="black"
                maxLength={2}
                onChangeText={value => {}}
              />
            </View>
            <View>
              <StyledText size={18} style={styles.fontBold}>
                Other Number
              </StyledText>
              <TextInput
                containerStyleOverride={{
                  borderWidth: 0,
                  height: 40,
                  margin: 0,
                  backgroundColor: '#dddddd',
                  width: PAGE_WIDTH / 2.3,
                  marginLeft: 5,
                }}
                placeholder="0244444444"
                placeholderTextColor="black"
                maxLength={2}
                onChangeText={value => {}}
              />
            </View>
          </View>
          <View style={styles.innerView}>
            <View>
              <StyledText size={18} style={styles.fontBold}>
                Email
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
                placeholder="example@gmail.com"
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
                navigation.navigate('SecondPage');
              }}>
              <Button.Text color={'white'}>Next</Button.Text>
            </Button>
            <StyledText style={styles.step}>Step 1/5</StyledText>
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
  heading: {
    fontWeight: 'bold',
  },
  wrapper: {
    flexGrow: 1,
    height: '100%',
    marginHorizontal: 15,
    marginTop: PAGE_HEIGHT / 10,
  },
  innerView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  fontBold: {
    fontWeight: '600',
  },
  textInput: {
    borderWidth: 0,
    height: 35,
    margin: 0,
    backgroundColor: '#dddddd',
    width: PAGE_WIDTH / 2.5,
    marginLeft: 5,
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
    width: PAGE_WIDTH - PAGE_WIDTH / 1.25,
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
  step: {
    marginLeft: PAGE_WIDTH / 20,
  },
});

export default FirstPage;
