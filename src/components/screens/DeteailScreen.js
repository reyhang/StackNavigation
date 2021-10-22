import React, {useLayoutEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Button} from 'react-native-elements';

export default function DetailScreen(props) {
  const {name, surname} = props?.route?.params; //default param verirsek bu şekilde çalışır.
  //const name = props?.route?.params?.name;
  //const surname = props?.route?.params?.surname;

  useLayoutEffect(() => {
    props.navigation.setOptions({title: `${name} ${surname}`});
    return () => {};
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: '#F0F8FF', height: 750}}>
      <Text
        style={{
          color: '#ffe6e9',
          fontSize: 45,
          margin: 15,
          textAlign: 'center',
          letterSpacing: 5,
        }}>
        Details
      </Text>
      <Text
        style={{
          color: '#707ea9',
          fontSize: 25,
          margin: 15,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Name and Surname : {name} {surname}
      </Text>

      <Button
        title="Back to Home"
        type="outlined"
        titleStyle={{
          color: 'white',
        }}
        containerStyle={{
          padding: 5,
          backgroundColor: '#B0C4DE',
          borderRadius: 10,
          width: 200,
          alignSelf: 'center',
          marginVertical: 5,
        }}
        onPress={() => props.navigation.navigate('Home')}
      />

      <Button
        title="Go back"
        type="outlined"
        titleStyle={{
          color: 'white',
        }}
        containerStyle={{
          padding: 5,
          backgroundColor: '#707ea9',
          borderRadius: 10,
          width: 200,
          alignSelf: 'center',
          marginVertical: 5,
        }}
        onPress={() => props.navigation.goBack()}
      />

      <Button
        title="Go to Custom Stack"
        type="outlined"
        titleStyle={{
          color: 'white',
        }}
        containerStyle={{
          padding: 5,
          backgroundColor: '#B0C4DE',
          borderRadius: 10,
          width: 200,
          alignSelf: 'center',
          marginVertical: 5,
        }}
        onPress={() => props.navigation.navigate('CustomStack')}
      />
    </SafeAreaView>
  );
}
