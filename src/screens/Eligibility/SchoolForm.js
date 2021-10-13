import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import FastImage from 'react-native-fast-image';
import { Button, StyledText, TextInput } from '~/components';
import { LocationIcon } from '~/components/svgs';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';

const SchoolForm = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(payment);
  const [number, setNumber] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paymentSuccessfull, setPaymentSuccessfull] = useState(false);
  const [review, setReview] = useState(false);

  const payMoney = () => {
    setTimeout(() => {
      setLoading(false);
      setPaymentSuccessfull(true);
    }, 5000);
  };

  const confirmApplication = () => {
    setTimeout(() => {
      setLoading(false);
      setPaymentSuccessfull(false);
      setReview(false);
    }, 5000);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.imageContainer}>
            <FastImage
              source={require('#/images/bucerius-law-school.jpg')}
              style={{ width: '100%', height: 180, borderRadius: 20 }}
            />
            <View
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'black',
                opacity: 0.4,
                borderRadius: 20,
              }}
            />
            <StyledText
              size={18}
              style={{ width: '50%', position: 'absolute', padding: 20 }}
              color={'white'}>
              {' Ghana Communication Technology University (GCTU)'}
            </StyledText>
            <StyledText
              color={'white'}
              style={{
                width: '50%',
                position: 'absolute',
                padding: 20,
                right: -50,
                top: 120,
              }}>
              {'4.5/5 star'}
            </StyledText>
          </View>
          <View style={{ padding: 10 }}>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <FastImage
                source={require('#/images/school_icon.png')}
                style={{ width: 50, height: 50, marginRight: 10 }}
              />
              <StyledText>
                {'Ghana Communication Technology University (GCTU)'}
              </StyledText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
                marginBottom: 7,
              }}>
              <LocationIcon style={{ marginRight: 20 }} />
              <StyledText size={12}>
                {'PMB 100, Nsawam Road, Tesano, GA, 00233'}
              </StyledText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
                marginBottom: 7,
              }}>
              <LocationIcon style={{ marginRight: 20 }} />
              <StyledText size={12}>
                {'+233 (0) 20 1000001 / 2000002'}
              </StyledText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
                marginBottom: 7,
              }}>
              <LocationIcon style={{ marginRight: 20 }} />
              <StyledText size={12}>{'www.gtuc.edu.gh'}</StyledText>
            </View>
          </View>
          <View style={{ padding: 10 }}>
            <StyledText style={{ marginBottom: 10 }}>Facilities</StyledText>
            <View style={{ flexDirection: 'row' }}>
              {facilities.map((facility, index) => {
                return (
                  <>
                    <View
                      key={index}
                      style={{ width: 80, alignItems: 'center' }}>
                      <View
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 50,
                          borderColor: '#94d1ff',
                          borderWidth: 1,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Icon
                          name="checkmark-circle"
                          style={{
                            alignContent: 'center',
                            justifyContent: 'center',
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            left: 1,
                            bottom: 1.5,
                          }}
                          size={50}
                          color="#94d1ff"
                        />
                      </View>
                      <StyledText size={10}>{facility}</StyledText>
                    </View>
                  </>
                );
              })}
            </View>
            <View style={{ marginVertical: 10 }}>
              <StyledText size={14} style={{ marginBottom: 5 }}>
                Admissions
              </StyledText>
              <StyledText size={14} style={{ marginBottom: 5 }}>
                {'status: OPEN (04 Apr - 15 sept)'}
              </StyledText>
              <StyledText size={14} style={{ marginBottom: 5 }}>
                {'Admissions fees: GHC 200.00'}
              </StyledText>
              <StyledText size={14} style={{ marginBottom: 5 }}>
                {'Departments: Business, IT, Engineering'}
              </StyledText>
            </View>
            <Button
              style={styles.button}
              // disabled={error}
              onPress={() => {
                // console.log('newCore', core);
                // console.log('newElective', elective);
                // navigation.navigate('SearchResults');
                setReview(true);
              }}>
              <Button.Text color={'white'}>Apply</Button.Text>
            </Button>
          </View>
        </View>
        <View>
          <Modal isVisible={review}>
            <View
              style={{
                height: 350,
                margin: 10,
                backgroundColor: 'white',
                borderRadius: 30,
                alignItems: 'center',
                padding: 20,
                paddingTop: 40,
                justifyContent: 'space-between',
              }}>
              {!paymentSuccessfull ? (
                <>
                  <View style={{ alignItems: 'center' }}>
                    <StyledText style={{ textAlign: 'center' }}>
                      {'Ghana Communication Technology University (GCTU)'}
                    </StyledText>
                    <StyledText size={12} fontFamily={'Manrope-Light'}>
                      {'Fee: GHC200.00'}
                    </StyledText>
                    <StyledText size={12} fontFamily={'Manrope-Light'}>
                      {'Mobile Money'}
                    </StyledText>
                  </View>
                  {!loading ? (
                    <>
                      <View>
                        <StyledText>Mobile Network</StyledText>
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
                            height: 40,
                            backgroundColor: '#94d1ff',
                            borderWidth: 0,
                            zIndex: 2,
                            marginBottom: 5,
                          }}
                          dropDownContainerStyle={{
                            borderBottomEndRadius: 20,
                            borderBottomLeftRadius: 20,
                            zIndex: 1000,
                            elevation: 1000,
                          }}
                          onChangeValue={value => {
                            setValue(value);
                          }}
                        />
                      </View>
                      <View>
                        <StyledText style={{ marginBottom: 5 }}>
                          Phone Number
                        </StyledText>
                        <TextInput
                          containerStyleOverride={styles.textInput}
                          maxLength={10}
                          onChangeText={value => {
                            setNumber(value);
                          }}
                        />
                      </View>
                    </>
                  ) : (
                    <>
                      <StyledText style={{ marginTop: 20 }}>
                        Payment in Progress...
                      </StyledText>
                      <StyledText
                        size={12}
                        style={{ textAlign: 'center' }}
                        fontFamily={'Manrope-Light'}>
                        You'll recieve a serial number and pin code soon. Please
                        enter to apply
                      </StyledText>
                    </>
                  )}
                  {!loading && (
                    <Button
                      style={styles.button}
                      // disabled={error}
                      onPress={() => {
                        setLoading(true);
                        payMoney();
                      }}>
                      <Button.Text color={'white'}>Pay</Button.Text>
                    </Button>
                  )}
                  {loading && (
                    <ActivityIndicator
                      style={{ marginTop: 30 }}
                      color={'#94d1ff'}
                      size={'large'}
                    />
                  )}
                </>
              ) : (
                <>
                  <View style={{ alignItems: 'center' }}>
                    <StyledText style={{ textAlign: 'center' }}>
                      {'Ghana Communication Technology University (GCTU)'}
                    </StyledText>
                    <StyledText size={12} fontFamily={'Manrope-Light'}>
                      {'Application 2021'}
                    </StyledText>
                  </View>
                  <View>
                    <StyledText style={{ marginBottom: 5 }}>
                      serial Number
                    </StyledText>
                    <TextInput
                      containerStyleOverride={styles.textInput}
                      maxLength={10}
                      onChangeText={value => {
                        setNumber(value);
                      }}
                    />
                  </View>
                  <View>
                    <StyledText style={{ marginBottom: 5 }}>Pin</StyledText>
                    <TextInput
                      containerStyleOverride={styles.textInput}
                      maxLength={10}
                      onChangeText={value => {
                        setNumber(value);
                      }}
                    />
                  </View>
                  {!loading && (
                    <Button
                      style={styles.button}
                      // disabled={error}
                      onPress={() => {
                        setLoading(true);
                        confirmApplication();
                      }}>
                      <Button.Text color={'white'}>Confirm</Button.Text>
                    </Button>
                  )}
                  {loading && (
                    <ActivityIndicator
                      style={{ marginTop: 30 }}
                      color={'#94d1ff'}
                      size={'large'}
                    />
                  )}
                </>
              )}
            </View>
          </Modal>
        </View>
      </View>
    </>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '90%',
    height: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#242424',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.23,
    shadowRadius: 1.62,
    elevation: 4,
  },
  button: {
    marginTop: 30,
    width: '50%',
    alignSelf: 'center',
    height: 40,
  },
  textInput: {
    backgroundColor: '#94d1ff',
    borderWidth: 0,
  },
});

const facilities = ['Canteen', 'Computer Lab', 'Gym', 'Library'];

const payment = [
  { value: 'Vodafone Cash', label: 'Vodafone Cash' },
  { value: 'MTN MoMo', label: 'MTN MoMo' },
  { value: 'Tigo Cash', label: 'Tigo Cash' },
];

export default SchoolForm;
