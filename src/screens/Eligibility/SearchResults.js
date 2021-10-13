import React, { Component } from 'react';
import { FlatList, ScrollView, View, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import FastImage from 'react-native-fast-image';
import { Button, StyledText, TextInput } from '~/components';

const DisplayCard = ({ name, location, image, onPress }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => onPress()}
        style={{
          height: 120,
          width: '100%',
          marginBottom: 15,
          borderRadius: 20,
        }}>
        <FastImage
          source={image}
          style={{ flex: 1, height: '100%', width: '100%', borderRadius: 20 }}
        />
        <View style={{ position: 'absolute', padding: 20 }}>
          <StyledText size={18} style={{ width: '50%' }} color={'white'}>
            {name}
          </StyledText>
          <StyledText color={'white'} style={{ right: -220 }}>
            {location}
          </StyledText>
        </View>
      </TouchableOpacity>
    </>
  );
};

const SearchResults = ({ navigation }) => {
  return (
    <>
      <ScrollView style={styles.container}>
        <View>
          <StyledText size={20}>Great!</StyledText>
          <StyledText size={20}>We found some schools</StyledText>
        </View>
        <View style={{ marginTop: 20 }}>
          <StyledText
            size={12}
            fontFamily={'Manrope-Light'}
            style={{ marginBottom: 20 }}>
            Browse through the school list
          </StyledText>
          {schools.map(item => {
            return (
              <>
                <DisplayCard
                  key={item.name}
                  name={item.name}
                  location={item.location}
                  image={item.image}
                  onPress={() => navigation.navigate('SchoolForm')}
                />
              </>
            );
          })}
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
});

const schools = [
  {
    name: 'Ghana Communication Technology University',
    location: 'Tesano,GA',
    image: require('#/images/bucerius-law-school.jpg'),
  },
  {
    name: 'University of Ghana,Legon (UG)',
    location: 'Legon,GA',
    image: require('#/images/coralie-meurice.jpg'),
  },
  {
    name: 'Kings College (KC)',
    location: 'West Hills,GA',
    image: require('#/images/porter-raab.jpg'),
  },
  {
    name: 'Accra Technical University (ATU)',
    location: 'Tesano,GA',
    image: require('#/images/sangga-rima-roman-selia.jpg'),
  },
];

export default SearchResults;
