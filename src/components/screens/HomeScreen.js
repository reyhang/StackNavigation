import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Button} from 'react-native-elements';

export default function HomeScreen(props) {
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
        Hello Everyone !
      </Text>

      <Button
        title="Press to Login"
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
        onPress={() =>
          props.navigation.navigate('Login', {
            text: 'Write your email and password please.',
          })
        }
      />
      <Button
        title="Go to Detail Screen"
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
        onPress={() => props.navigation.navigate('Detail')}
      />
      <Button
        title="Check Details"
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
        onPress={() =>
          props.navigation.navigate('Detail', {
            name: 'Reyhan',
            surname: 'Güney',
          })
        }
      />
    </SafeAreaView>
  );
}
