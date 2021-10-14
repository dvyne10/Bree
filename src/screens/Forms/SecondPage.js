import React, { useState } from 'react';
import { View, StatusBar, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StyledText, TextInput, Button } from '~/components';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';

const PAGE_HEIGHT = Dimensions.get('window').height;
const PAGE_WIDTH = Dimensions.get('window').width;

const SecondPage = ({ navigation }) => {
  const [openRelationship, setOpenRelationship] = useState(false);
  const [value, setValue] = useState('');
  const [relationship, setRelationship] = useState([
    { value: 'Parent', label: 'Parent' },
    { value: 'God Parent', label: 'God Parent' },
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
              Guardian Overview
            </StyledText>
          </View>
          <View style={styles.innerView}>
            <View>
              <StyledText size={18} style={styles.textStyle}>
                Guardian's Name
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
                placeholder="Full Name"
                placeholderTextColor="black"
                maxLength={2}
                onChangeText={value => {}}
              />
            </View>
          </View>
          <View style={styles.innerView}>
            <View>
              <StyledText size={18} style={styles.textStyle}>
                Relationship
              </StyledText>
              <View>
                <DropDownPicker
                  open={openRelationship}
                  value={value}
                  items={relationship}
                  setOpen={setOpenRelationship}
                  setValue={setValue}
                  setItems={setRelationship}
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
          <View style={styles.innerView}>
            <View>
              <StyledText size={18} style={styles.textStyle}>
                Phone Number
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
                placeholder="0275544221"
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
                navigation.navigate('ThirdPage');
              }}>
              <Button.Text color={'white'}>Next</Button.Text>
            </Button>
            <StyledText style={styles.step}>Step 2/5</StyledText>
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
    width: PAGE_WIDTH - PAGE_WIDTH / 1.6,
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
